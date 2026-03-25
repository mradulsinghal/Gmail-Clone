import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { useEffect, useState } from "react";
import CheckBox from "@mui/icons-material/CheckBox";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Email from "./Email";
import { API_URLS } from "../services/api.url.js";
import NoMails from "./NoMails.jsx";
import { EMPTY_TABS } from "../constants/constant.jsx";
const Emails = () => {
  const { openDrawer } = useOutletContext();
  const [selectedemails, setSelectedemails] = useState([]);
  const [refreshemails, setRefreshemails] = useState(false);

  const { type } = useParams();

  const getemailservice = useApi(API_URLS.getemailfromtype);
  const sendemailtobinservice = useApi(API_URLS.moveEmailstobin);
  const deleteEmailservice = useApi(API_URLS.deleteEmail)
  useEffect(() => {
    getemailservice.call({}, type);
  }, [type, refreshemails]);

  const selectedallemails = (e) => {
    if (e.target.checked) {
      const emails = getemailservice?.response?.map((email) => email._id);
      setSelectedemails(emails);
    } else {
      setSelectedemails([]);
    }
  };

  const selectemailtobin = () => {
    if (type === "bin") {
      deleteEmailservice.call(selectedemails)
    } else {
      sendemailtobinservice.call(selectedemails);
    }
    setRefreshemails((prevstate) => !prevstate);
  };

  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "calc(100% - 250px) " }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          display: "flex",
          padding: "20px 10px 0px 10px",
          alignItems: "center",
        }}
      >
        <CheckBox size="small" onChange={(e) => selectedallemails(e)} />
        <DeleteOutline onClick={() => selectemailtobin()} />
      </Box>
      <List>
        <ListItem>
          {getemailservice?.response?.map((email) => (
            <Email
              key={email._id}
              email={email}
              selectedemails={selectedemails}
              setRefreshemails={setRefreshemails}
              setSelectedemails ={setSelectedemails}
            />
          ))}
        </ListItem>
      </List>
      {
        getemailservice.response?.length === 0 &&
        <NoMails message = {EMPTY_TABS[type]}/>
      }
    </Box>
  );
};

export default Emails;
