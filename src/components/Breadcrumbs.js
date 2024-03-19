import * as React from "react";
import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Link from "@mui/material/Link";

import ListItemButton from "@mui/material/ListItemButton";
// import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import "../App.css";

import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from "react-router-dom";

const breadcrumbNameMap = {
  "/PDF": "PDF",
  "/DWG": "DWG",
  "/JPG": "JPG",
  "/GIF": "GIF",
  "/PLS_CADD": "PLS CADD",
  "/STADD": "STADD",
  "/MAT3D": "MAT3D",
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItemButton component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItemButton>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="inherit" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

export default function RouterBreadcrumbs() {
  return (
    <MemoryRouter initialEntries={["/PDF"]} initialIndex={0}>
      <div>
        <Routes>
          <Route path="*" element={<Page />} />
        </Routes>
        <div component="nav" aria-label="mailbox folders">
          <List className="card-container">
            <ListItemLink className="card-items" to="/PDF" />
            <ListItemLink className="card-items" to="/DWG" />
            <ListItemLink className="card-items" to="/JPG" />
            <ListItemLink className="card-items" to="/GIF" />
            <ListItemLink className="card-items" to="/PLS_CADD" />
            <ListItemLink className="card-items" to="/STADD" />
            <ListItemLink className="card-items" to="/MAT3D" />
          </List>
        </div>
      </div>
    </MemoryRouter>
  );
}
