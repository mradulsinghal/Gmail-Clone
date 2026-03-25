import {
  AppBar,
  Toolbar,
  styled,
  Box,
  IconButton,
  InputBase,
  Avatar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { gmaillogo } from "../constants/constant";
import TuneIcon from "@mui/icons-material/Tune";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const StyledAppbar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 100,
  borderRadius: 10,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionsWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",

  "& > svg": {
    marginLeft: 20,
  },
});

const Header = ({ toggleoff }) => {
  return (
    <>
      <StyledAppbar position="fixed">
        <Toolbar>
          <MenuIcon color="action" onClick = {toggleoff} cursor = "pointer"/>
          <img
            src={gmaillogo}
            alt="logo"
            style={{ width: 110, marginLeft: 15, background: "#F5F5F5" }}
          />

          <SearchWrapper>
            <SearchIcon color="action" />
            <InputBase placeholder="Search email" />
            <TuneIcon color="action" />
          </SearchWrapper>

          <OptionsWrapper>
            <HelpOutlineIcon color="action" />
            <SettingsIcon color="action" />
            <AppsRoundedIcon color="action" />
            <AccountCircleRoundedIcon color="action" />
          </OptionsWrapper>
        </Toolbar>
      </StyledAppbar>
    </>
  );
};
export default Header;
