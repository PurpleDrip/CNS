````markdown
# OneCard - Government Document Verification with Zero-Knowledge Proof

[OneCard](https://www.npmjs.com/package/one-card) is a Node.js package that allows the verification of multiple government-issued documents and generates a unique hashified code that can be used for validation on other platforms using Zero-Knowledge Proof (ZKP). The hashified code contains details such as the user's age and the verified documents, ensuring privacy by not disclosing any sensitive data.

## Features

- **Document Verification**: Verify the following government-issued documents:

  - Aadhaar
  - PAN
  - Passport
  - Voter ID
  - Driving License
  - Ration Card
  - Birth Certificate

- **Admin-Only Verification**: Only admins can verify documents using a password.

- **Zero-Knowledge Proof (ZKP)**: Generates a unique hashified code that can be shared with third parties for validation of the user’s age and verified documents, without disclosing the actual documents.

- **Encryption**: Uses AES-256-CBC encryption to generate a hashified code. The code can be decrypted to retrieve the verified data.

## Installation

To install the package from NPM, use the following command:

```bash
npm install one-card
```
````

## Usage

### Import OneCard

To get started, import the `OneCard` class into your project:

```javascript
const OneCard = require("one-card");
```

### Initialize OneCard

Create a new `OneCard` instance with the required documents and date of birth (DOB):

```javascript
const card = new OneCard({
  aadhar: "AadhaarNumber",
  pan: "PANNumber",
  passport: "PassportNumber",
  voter: "VoterID",
  drivingLicense: "DrivingLicenseNumber",
  ration: "RationCardNumber",
  birthCertificate: "BirthCertificateNumber",
  dob: "DateOfBirth",
});
```

### Admin Login

Admins can authenticate by providing the correct password from the environment file:

```javascript
card.signin("your-admin-password");
```

### Verify Documents

Once logged in as an admin, you can verify documents using the following methods:

```javascript
card.verifyAadhar(); // Verify Aadhaar
card.verifyPan(); // Verify PAN
card.verifyPassport(); // Verify Passport
card.verifyVoter(); // Verify Voter ID
card.verifyDrivingLicense(); // Verify Driving License
card.verifyRation(); // Verify Ration Card
card.verifyBirthCertificate(); // Verify Birth Certificate
```

### Get User's Age

You can get the user's age by calling the `getAge()` method:

```javascript
const age = card.getAge();
console.log("User's Age:", age);
```

### Generate Hashified Code

After verifying documents, generate a hashified code that contains the age and document verification status:

```javascript
const uniqueCode = card.hashify();
console.log("Unique Hashified Code:", uniqueCode);
```

### Decrypt the Hashified Code

You can decrypt the hashified code to retrieve the original verified data:

```javascript
const decryptedData = card.decrypt(uniqueCode);
console.log("Decrypted Data:", decryptedData);
```

### Check Document Verification Status

You can check whether specific documents are verified using the respective methods:

```javascript
const isAadharVerified = card.isAadharVerified();
const isPanVerified = card.isPanVerified();
// Check other documents similarly...
```

## Zero-Knowledge Proof (ZKP)

The generated hashified code can be shared with third parties to prove that a user’s documents have been verified and to validate their age. The unique code ensures privacy by revealing only the necessary information without exposing sensitive document details.
