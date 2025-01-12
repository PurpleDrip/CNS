import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "./Models/User.js";
import OneCard from "./Models/OneCard.js";
import onecard from "one-card";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is not set in environment variables.");
  process.exit(1);
}

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200);
  } catch (error) {
    res.status(401).send({ message: "Authentication failed" });
  }
});

app.post("/onecard", async (req, res) => {
  console.log("hello");
  const {
    fullName,
    aadhar,
    pan,
    passport,
    voter,
    drivingLicense,
    ration,
    birthCertificate,
    dob,
    password,
    phoneNumber,
  } = req.body;

  const obj = new onecard("guru");
  obj.signin("guru");
  obj.setAadhar(aadhar);
  obj.setPan(pan);
  obj.setPassport(passport);
  obj.setVoter(voter);
  obj.setDrivingLicense(drivingLicense);
  obj.setRation(ration);
  obj.setBirthCertificate(birthCertificate);
  obj.setDob(dob);

  const encrypted = obj.encrypt();
  const { key, iv } = obj.getKeyAndIv();

  console.log(obj.getAuditLogs());

  res.status(200).json({ encrypted, key, iv });
});

app.post("/verifydoc", async (req, res) => {
  try {
    let { doc } = req.body;
    const { encrypted, key, iv } = req.body;

    if (!doc || !encrypted || !key || !iv) {
      return res.status(400).json({
        message: "document name, encrypted, key, and iv are required",
      });
    }

    // Decrypt data
    const obj = new onecard("guru");
    obj.signin("guru");

    switch (doc.toLowerCase()) {
      case "aadhar":
        doc = "Aadhar";
        obj.verifyAadhar();
        break;
      case "pan":
        doc = "Pan";
        obj.verifyPan();
        break;
      case "passport":
        doc = "Passport";
        obj.verifyPassport();
        break;
      case "voter":
        doc = "Voter";
        obj.verifyVoter();
        break;
      case "drivinglicense":
        doc = "Driving License";
        obj.verifyDrivingLicense();
        break;
      case "ration":
        doc = "Ration";
        obj.verifyRation();
        break;
      case "birthcertificate":
        doc = "Birth Certificate";
        obj.verifyBirthCertificate();
        break;
      default:
        return res.status(400).json({ message: "Invalid document name" });
    }

    // Re-encrypt the updated data
    const newEncrypted = obj.encrypt();
    const { key: newKey, iv: newIv } = obj.getKeyAndIv();

    // Log audit information (optional)
    console.log(obj.getAuditLogs());

    res.status(200).json({
      message: `Document ${doc} verified`,
      encrypted: newEncrypted,
      key: newKey,
      iv: newIv,
    });
  } catch (error) {
    console.error("Verification error:", error.message);
    res
      .status(500)
      .json({ message: "Failed to verify document", error: error.message });
  }
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log("Listening on port:", port));
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
