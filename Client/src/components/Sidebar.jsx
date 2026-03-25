import { Drawer, styled } from "@mui/material";
import { SideBarContent } from "./SidebarContent";

const StyledDrawer = styled(Drawer)({
  width: 240,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
  },
});
export const SideBar = ({ openDrawer }) => {
  return (
    <StyledDrawer
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      ModalProps={{ keepMounted: true }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: 250,
          background: "#F5F5F5",
          borderRight: "none",
          height: "calc(100vh-64px)",
        },
      }}
    >
      <SideBarContent />
    </StyledDrawer>
  );
};
