import express from "express";
import {
  savesendemails,
  getemails,
  savedraftemails,
  moveEmailstoBin,
  togglestarredEmails,
  deleteemails
} from "../controller/email-controller.js";

const routes = express.Router();

routes.post("/send-save", savesendemails);
routes.get("/emails/:type", getemails);
routes.get("/save-draft", savedraftemails);
routes.post("/bin", moveEmailstoBin);
routes.post("/starred", togglestarredEmails);
routes.delete("/delete" , deleteemails)
export default routes;
