import express from "express";
const router = express.Router();
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

dotenv.config();

// server used to send send emails
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));



app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(express.static(join(__dirname,'./dist')));
console.log(__dirname, '/dist')

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.get("/get", (req, res) => {
  res.send("hola");
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
