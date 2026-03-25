import { SIDEBAR_DATA } from "../../config/sidebar.config";

import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, styled, List, ListItem } from "@mui/material";
import { ComposeMail } from "./ComposeMail";
import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  minWidth: 140,
  textTransform: "none",
});

const Container = styled(Box)({
  padding: 8,
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
});

export const SideBarContent = () => {
  const [closedialogue, setClosedialogue] = useState(false);
  const { type } = useParams();

  const closeemaildrawer = () => {
    setClosedialogue(true);
  };

  return (
    <Container>
      <ComposeButton onClick={() => closeemaildrawer()}>
        <CreateOutlined /> Compose
      </ComposeButton>
      <List>
      {SIDEBAR_DATA.map((data) => (
  <NavLink
    key={data.name}
    to={`/emails/${data.name}`}
    style={{ textDecoration: "none", color: "black" }}
  >
    <ListItem
      style={
        type === data.name
          ? {
              backgroundColor: "#d3e3fd",
              borderRadius: "0 16px 16px 0",
            }
          : {}
      }
    >
      <data.icon fontSize="small" />
      {data.title}
    </ListItem>
  </NavLink>
))}
      </List>

      <ComposeMail
        closedialogue={closedialogue}
        setClosedialogue={setClosedialogue}
      />
    </Container>
  );
};
