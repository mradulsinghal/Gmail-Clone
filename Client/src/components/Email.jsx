import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CheckBox, Star, StarBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";

const Wrapper = styled(Box)({
  padding: "0 0 0 10px  ",
  background: "#f2f6fc",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "& > div": {
    display: "flex",
    width: "100%",
    "& > p": {
      fontSize: 14,
    },
  },
});

const Indicator = styled(Typography)({
  background: "#ddd",
  fontSize: "12px !important",
  color: "#222",
  padding: "0 4px",
  borderRadius: 4,
  marginRight: 6,
});

const Date = styled(Typography)({
  marginLeft: "auto",
  marginRight: 20,
  fontSize: 12,
  color: "5F6368",
});

const Email = ({ email, selectedemails ,setRefreshemails ,setSelectedemails}) => {
  const navigate = useNavigate();
  const starredemailservice = useApi(API_URLS.togglestarredemail);

  const togglestarredmails = () => {
    starredemailservice.call({ id: email._id , value : !email.starred});
    setRefreshemails(prevState => !prevState);
  };


  const onvalueChange = () => {
    if(selectedemails.includes(email._id)){
      setSelectedemails(prevState => prevState.filter(id => id !== email._id))
    }else{
      setSelectedemails(prevState => [...prevState , email._id])
    }
  }

  return (
    <Wrapper>
      <CheckBox size="small" checked={selectedemails.includes(email._id)} 
      onChange = {()=> onvalueChange()}
      />
      {
        email.starred ? 
        <Star fontSize="small" style={{marginLeft : 10 , color : "#FFF200"}} onClick = {()=> togglestarredmails()}/>
        : 
        <StarBorder
          fontSize="small"
          style={{ marginRight: 10 }}
          onClick={() => togglestarredmails()}
        />
}
      
      <Box
        onClick={() => navigate(routes.view.path, { state: { email: email } })}
      >
        <Typography style={{ width: 200, overflow: "hidden" }}>
          {email.name}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {email.subject}
          {email.body && "-"}
          {email.body}
        </Typography>
        <Date>
          {new window.Date(email.Date).getDate()}
          {new window.Date(email.Date).toLocaleString("default", {
            month: "long",
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default Email;
