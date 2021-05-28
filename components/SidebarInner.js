import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useState } from "react";
import Link from "next/link";

const SidebarInner = () => {
  const [shipmentOpen, setShipmentOpen] = useState(false);
  const [settlementOpen, setSettlementOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const handleShipmentClick = () => {
    setShipmentOpen(!shipmentOpen);
  };
  const handleSettlementClick = () => {
    setSettlementOpen(!settlementOpen);
  };
  const handleSupportClick = () => {
    setSupportOpen(!supportOpen);
  };
  const handleAccountClick = () => {
    setAccountOpen(!accountOpen);
  };

  return (
    <>
      <div className="m-[1rem]">
        <Link href="/create-shipment">
          <button className="blueNavBtn ">
            <ControlPointIcon className="mr-2" /> Create Shipment
          </button>
        </Link>
      </div>
      <List component="nav">
        <Link href="/dashboard">
          <ListItem button className="">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <ListItem button onClick={handleShipmentClick}>
          <ListItemIcon>
            <AddToPhotosIcon />
          </ListItemIcon>
          <ListItemText primary="Shipments" />
          {shipmentOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={shipmentOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/deliveries">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Deliveries" />
              </ListItem>
            </Link>
            <Link href="/pickup">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Pickups" />
              </ListItem>
            </Link>
            <Link href="/tracking">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Multi-track" />
              </ListItem>
            </Link>
            <Link href="/upload-booking">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Bulk Import" />
              </ListItem>
            </Link>
            <Link href="/return-requests">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Return Requests" />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <ListItem button onClick={handleSettlementClick}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Settlement" />
          {settlementOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={settlementOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/statements">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Statements" />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <ListItem button onClick={handleSupportClick}>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
          {supportOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={supportOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/developer-center">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Developer Center" />
              </ListItem>
            </Link>
            <Link href="/faqs">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Knowledge Base" />
              </ListItem>
            </Link>
            <Link href="/guides">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Video Guides" />
              </ListItem>
            </Link>
            <Link href="/release-notes">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Release Notes" />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <ListItem button onClick={handleAccountClick}>
          <ListItemIcon>
            <AddToPhotosIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
          {accountOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={accountOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/profile">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Profile" />
              </ListItem>
            </Link>
            <Link href="/services">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Services" />
              </ListItem>
            </Link>
            {/* <Link href="/manage-users">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Manage Users" />
              </ListItem>
            </Link> */}
            <Link href="/pickup-locations">
              <ListItem button>
                <ListItemText primary="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x26AC;&nbsp;&nbsp;&nbsp;&nbsp; Pickup Locations" />
              </ListItem>
            </Link>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default SidebarInner;
