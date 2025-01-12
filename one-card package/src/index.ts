import * as crypto from "crypto";

class OneCard {
  private readonly algorithm: string = "aes-256-cbc";
  private readonly key: Buffer;
  private readonly iv: Buffer;
  private role: "admin" | "user" = "user"; // Default role
  private auditLogs: string[] = []; // Track operations
  private data: {
    aadhar: string;
    pan: string;
    passport: string;
    voter: string;
    drivingLicense: string;
    ration: string;
    birthCertificate: string;
    dob: string;
    isAadharVerified: boolean;
    isPanVerified: boolean;
    isPassportVerified: boolean;
    isVoterVerified: boolean;
    isDrivingLicenseVerified: boolean;
    isRationVerified: boolean;
    isBirthCertificateVerified: boolean;
  };

  constructor(password: string) {
    if (!password) {
      throw new Error("Password is required to create the OneCard object.");
    }

    // Derive key and IV from the password
    const salt = crypto.randomBytes(16); // Random salt
    const derivedKey = crypto.pbkdf2Sync(password, salt, 100000, 48, "sha256");

    this.key = derivedKey.slice(0, 32); // First 32 bytes for AES-256 key
    this.iv = derivedKey.slice(32); // Remaining 16 bytes for IV

    this.data = {
      aadhar: "NVA",
      pan: "NVA",
      passport: "NVA",
      voter: "NVA",
      drivingLicense: "NVA",
      ration: "NVA",
      birthCertificate: "NVA",
      dob: "NVA",
      isAadharVerified: false,
      isPanVerified: false,
      isPassportVerified: false,
      isVoterVerified: false,
      isDrivingLicenseVerified: false,
      isRationVerified: false,
      isBirthCertificateVerified: false,
    };
  }

  // Sign in method
  public signin(password: string): void {
    if (!(password === "guru")) {
      throw new Error("Incorrect password");
    }
    this.role = "admin";
    this.logAction("Signin successful, role updated to admin");
  }

  // Verify password consistency
  private verifyPassword(password: string): boolean {
    const salt = crypto.randomBytes(16); // Use the same salt from constructor
    const derivedKey = crypto.pbkdf2Sync(password, salt, 100000, 48, "sha256");
    const key = derivedKey.slice(0, 32);
    const iv = derivedKey.slice(32);

    return key.equals(this.key) && iv.equals(this.iv);
  }

  // Setters for documents (restricted to admin)
  public setAadhar(aadhar: string): void {
    this.restrictedAction(() => {
      this.data.aadhar = aadhar;
    }, "Aadhar set");
  }

  public setPan(pan: string): void {
    this.restrictedAction(() => {
      this.data.pan = pan;
    }, "PAN set");
  }

  public setPassport(passport: string): void {
    this.restrictedAction(() => {
      this.data.passport = passport;
    }, "Passport set");
  }

  public setVoter(voter: string): void {
    this.restrictedAction(() => {
      this.data.voter = voter;
    }, "Voter ID set");
  }

  public setDrivingLicense(drivingLicense: string): void {
    this.restrictedAction(() => {
      this.data.drivingLicense = drivingLicense;
    }, "Driving License set");
  }

  public setRation(ration: string): void {
    this.restrictedAction(() => {
      this.data.ration = ration;
    }, "Ration card set");
  }

  public setBirthCertificate(birthCertificate: string): void {
    this.restrictedAction(() => {
      this.data.birthCertificate = birthCertificate;
    }, "Birth Certificate set");
  }

  public setDob(dob: string): void {
    this.restrictedAction(() => {
      this.data.dob = dob;
    }, "DOB set");
  }

  // Verification methods (restricted to admin)
  public verifyAadhar(): void {
    this.restrictedAction(() => {
      this.data.isAadharVerified = true;
    }, "Aadhar verified");
  }

  public verifyPan(): void {
    this.restrictedAction(() => {
      this.data.isPanVerified = true;
    }, "PAN verified");
  }

  public verifyPassport(): void {
    this.restrictedAction(() => {
      this.data.isPassportVerified = true;
    }, "Passport verified");
  }

  public verifyVoter(): void {
    this.restrictedAction(() => {
      this.data.isVoterVerified = true;
    }, "Voter ID verified");
  }

  public verifyDrivingLicense(): void {
    this.restrictedAction(() => {
      this.data.isDrivingLicenseVerified = true;
    }, "Driving License verified");
  }

  public verifyRation(): void {
    this.restrictedAction(() => {
      this.data.isRationVerified = true;
    }, "Ration Card verified");
  }

  public verifyBirthCertificate(): void {
    this.restrictedAction(() => {
      this.data.isBirthCertificateVerified = true;
    }, "Birth Certificate verified");
  }

  // Encryption and decryption
  public encrypt(): string {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let encrypted = cipher.update(JSON.stringify(this.data), "utf8", "hex");
    encrypted += cipher.final("hex");
    this.logAction("Data encrypted");
    return encrypted;
  }

  public decrypt(encryptedData: string, key: string, iv: string): object {
    const newkey = Buffer.from(key, "hex");
    const newiv = Buffer.from(iv, "hex");
    const decipher = crypto.createDecipheriv(this.algorithm, newkey, newiv);
    let decrypted = decipher.update(encryptedData, "hex", "utf8");
    decrypted += decipher.final("utf8");

    const fullData = JSON.parse(decrypted);
    const filteredData = {
      hasAadhar: fullData.aadhar !== "NVA",
      isAadharVerified: fullData.isAadharVerified,
      hasPan: fullData.pan !== "NVA",
      isPanVerified: fullData.isPanVerified,
      hasPassport: fullData.passport !== "NVA",
      isPassportVerified: fullData.isPassportVerified,
      hasVoter: fullData.voter !== "NVA",
      isVoterVerified: fullData.isVoterVerified,
      hasDrivingLicense: fullData.drivingLicense !== "NVA",
      isDrivingLicenseVerified: fullData.isDrivingLicenseVerified,
      hasRation: fullData.ration !== "NVA",
      isRationVerified: fullData.isRationVerified,
      hasBirthCertificate: fullData.birthCertificate !== "NVA",
      isBirthCertificateVerified: fullData.isBirthCertificateVerified,
      dob: fullData.dob,
    };

    this.logAction("Data decrypted with sensitive fields filtered");
    return filteredData;
  }

  // Retrieve Key and IV for verification
  public getKeyAndIv(): { key: string; iv: string } {
    return {
      key: this.key.toString("hex"),
      iv: this.iv.toString("hex"),
    };
  }

  // Restrict actions to admin
  private restrictedAction(action: () => void, description: string): void {
    if (this.role !== "admin") {
      throw new Error("Unauthorized action. Admin role required.");
    }
    action();
    this.logAction(description);
  }

  // Audit logs
  private logAction(action: string): void {
    this.auditLogs.push(`[${new Date().toISOString()}] ${action}`);
  }

  public getAuditLogs(): string[] {
    return [...this.auditLogs];
  }
}

const ne = new OneCard("guru");
ne.signin("guru");
const data = ne.decrypt(
  "f250593f0fca549719e395430cfc602c7fb040ad37432daf61f0e98101c20e059a6f5594d880257e6dcfe7bacb00062ace8b4c83c92c2177955dd089c10bbc2de7af62394157bc29263f8d0ac677075ddd3ed5ec2349cdb9ee9d71ad2adda1fff3749bbb0313075df6111d03ea360e273bf6cc80a98632f227e549ebd23720843497359dfbb3e7435e02819c314dfcccdc13383b6e572b827a09e71f97101f484f8523816d7e960e9c26e6fd7a3777ca7dc507a3b4cd0df788917bb15ae08f037aa400d24cf4ec199b70e09df3b1e09dd22aaa79189ce33239674fc6031dca94",
  "cc7ad2fbf1bdedd7d7f7b0e55dde5e1710dbafefdc2a618a191e97ec02c68729",
  "8c2908ff1c1fb0093e921d7ca6ede736"
);
console.log(data);

export default OneCard;
