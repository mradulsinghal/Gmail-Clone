import email from "../model/email.js";
import { transporter } from "../mailer.js";

export const savesendemails = async (request, response) => {
  try {
    const Email = new email(request.body);
    await Email.save();
    await transporter.sendMail({
      from: req.body.from,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.body,
    });
    response.status(200).json({ message: "email saved  successfully" });
  } catch (error) {
    response.status(500).json(error.message);
  }
};
export const getemails = async (req, res) => {
  try {
    let emails;

    if (req.params.type === "sent") {
      emails = await email.find({ type: "sent" });
    } 
    else if (req.params.type === "inbox") {
      emails = await email.find({ type: "inbox" });
    }
    else if (req.params.type === "drafts") {
      emails = await email.find({ type: "drafts" });
    }
    else if (req.params.type === "starred") {
      emails = await email.find({ starred: true, bin: false });
    }
    else if (req.params.type === "bin") {
      emails = await email.find({ bin: true });
    }
    else {
      emails = await email.find({});
    }

    return res.status(200).json(emails);

  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const savedraftemails = async (req, res) => {
  const draftemail = new email(req.body);
  await draftemail.save();
  return res.status(200).json({ message: "email saved  in draft" });
};

export const moveEmailstoBin = async (req, res) => {
  try {
    await email.updateMany(
      { id: { $in: req.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return res.status(200).json({ messgae: "emails deleted succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const togglestarredEmails = async (req, res) => {
  try {
    await email.updateOne({_id : req.body.id} ,{ $set : {starred : req.body.value}});
    return (
      res.status(200).json({message : "email is starred mark"})
    )
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};


export const deleteemails = async(req , res) => {
  try {
    await email.deleteMany({_id : {$in : req.body}})
    return res.status(200).json({message : 'email deleted successfully'})
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
}