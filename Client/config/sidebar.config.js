


import {Photo,StarOutline , SendOutlined , InsertDriveFileOutlined , DeleteOutlined , MailOutlined } from "@mui/icons-material";
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';





export const SIDEBAR_DATA = [
{
    name:"inbox",
    title: "Inbox",
    icon: Photo
},
{
    name:"starred",
    title: "Starred",
    icon: StarOutline
},
{
    name:"snoozed",
    title: "Snoozed",
    icon: WatchLaterOutlinedIcon
},
{
    name:"sent",
    title: "Sent",
    icon: SendOutlined
},
{
    name:"drafts",
    title: "Drafts",
    icon: InsertDriveFileOutlined
},
{
    name:"bin",
    title: "Bin",
    icon: DeleteOutlined 
}
];