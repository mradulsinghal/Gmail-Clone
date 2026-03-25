import { Dialog } from "@mui/material";
import { useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Close from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import useApi from "../hooks/useApi.js";
import { API_URLS } from "../services/api.url.js";

const dialoguestyle = {
  height: "90%",
  width: "80%",
  maxHeight: "100%",
  maxWidth: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0 ",
};

const ComposeHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 16px",
  background: "#f2f6fc",
  "& >P": {
    fontSize: 14,
    fontWeight: 500,
  },
});

const ComposeInput = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "5px 16px",
  "& > div": {
    fontSize: 14,
    borderBottom: "1px solid #F5F5F5",
  },
});

const ComposeTextArea = styled(Box)({
  "& > div ": {
    width: "100%",
  },
});

const ComposeFooter = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
});

const Composebutton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  fontWeight: 500,
  textTransform: "none",
  borderRadius: 18,
});

export const ComposeMail = ({ closedialogue, setClosedialogue }) => {
  const savesentemailsservice = useApi(API_URLS.savesentemails);
  const [data, setData] = useState({
    to: "",
    subject: "",
    body: "",
  });
  const savedraftservice = useApi(API_URLS.savedraftemails);

  const closecomposemail = (e) => {
    e.preventDefault();
    setClosedialogue(false);
  };

  const closedeleteicon = (e) => {
    e.preventDefault();

    const payload = {
      to: data.to,
      from: "iitg.mradul.singhal555@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: "",
      name: "Mradul Singhal",
      starred: false,
      type: "drafts",
    };

    savedraftservice.call(payload);
    setClosedialogue(false);
    setData({});
  };
  const closesend = async () => {
    const payload = {
      ...data,
      from: "YOUR_GMAIL@gmail.com",
      date: new Date(),
      name: "Mradul",
      starred: false,
      bin: false,
      type: "sent",
    };
  
    await savesentemailsservice.call(payload);
  
    setClosedialogue(false);
    setData({ to: "", subject: "", body: "" });
  };

  return (
    <Dialog open={closedialogue} PaperProps={{ sx: dialoguestyle }}>
      <ComposeHeader>
        <Typography>New Message</Typography>
        <Close
          onClick={(e) => closecomposemail(e)}
          sx={{ cursor: "pointer" }}
        />
      </ComposeHeader>
      <ComposeInput>
      <InputBase
  placeholder="Recipients"
  value={data.to}
  onChange={(e) => setData({ ...data, to: e.target.value })}
/>

<InputBase
  placeholder="Subject"
  value={data.subject}
  onChange={(e) => setData({ ...data, subject: e.target.value })}
/>

      </ComposeInput>
      <ComposeTextArea>
        <TextField
          multiline
          rows={24}

  value={data.body}
  onChange={(e) => setData({ ...data, body: e.target.value })}
          // variant="standard"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
      </ComposeTextArea>
      <ComposeFooter>
        <Composebutton onClick={() => closesend()} sx={{ cursor: "pointer" }}>
          Send
        </Composebutton>
        <DeleteOutline
          onClick={() => closedeleteicon()}
          sx={{ cursor: "pointer" }}
        />
      </ComposeFooter>
    </Dialog>
  );
};
