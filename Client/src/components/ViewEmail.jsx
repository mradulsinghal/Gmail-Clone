import { useOutletContext, useLocation } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";
import { emptyprofilepic } from "../constants/constant";
import useApi from "../hooks/useApi.js";
import { API_URLS } from "../services/api.url";
const IconWrapper = styled(Box)({
  padding: 15,
});

const Subject = styled(Typography)({
  fontSize: 22,
  margin: "10px 0 20px 75px",
  display: "flex",
});

const Indicator = styled(Box)({
  fontSize: 12,
  background: "#ddd",
  color: "#222",
  borderRadius: 4,
  marginLeft: 6,
  padding: "2px 4px",
  alignItems: "center",
});

const Container = styled(Box)({
  marginLeft: 15,
    display: "flex",
  
});



const Wrapper = styled(Box)({
      display : "flex" ,
      "& > p > span" : {
        fontSize : 12 ,
        color : "#5E5E5E"
      }


})



const Date = styled(Box)({
    margin : "0 "
})

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  const navigation = useNavigate();
  const { state } = useLocation();
  const { email } = state;


  const sendemailtobinservice = useApi(API_URLS.moveEmailstobin);


  const deleteEmail = () => {
    sendemailtobinservice.call([email._id]);
window.history.back();
  }
  return (
    <Box
      style={
        openDrawer ? { marginLeft: 250} : { width: "100%" }
      }
    >
      <IconWrapper>
        <ArrowBack
          onClick={() => navigation(routes.emails.path)}
          color="action"
          fontSize="small"
          style={{ cursor: "pointer" }}
        />
        <Delete fontSize="small" style={{ marginLeft: 40 }} onClick ={()=> deleteEmail()} />
      </IconWrapper>

      <Subject>
        {email.subject}
        <Indicator component="span">Inbox</Indicator>
      </Subject>
      <Container>
        <img src={emptyprofilepic} color="action" alt="dp" />
        <Box style = {{width : '100%' }}>
          <Wrapper>
            <Typography>
              {email.name}
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <Box>
              {new window.Date(email.date).getDate()}&nbsp;
              {new window.Date(email.date).toLocaleString("default", {})}&nbsp;
              {new window.Date(email.date).getFullYear()}
            </Box>
          </Wrapper>
          <Typography>{email.body}</Typography>
        </Box>
      </Container>
      <Box></Box>
    </Box>
  );
};

export default ViewEmail;
