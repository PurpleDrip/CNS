import OneCard from "../src/index"; // Adjust the path based on your project structure

describe("OneCard Class", () => {
  let oneCard: OneCard;

  beforeEach(() => {
    oneCard = new OneCard("secure_password");
  });

  it("should require a password to create an object", () => {
    expect(() => new OneCard("")).toThrow(
      "Password is required to create the OneCard object."
    );
  });

  it("should generate key and iv if not provided", () => {
    const { key, iv } = oneCard.getKeyAndIv();
    expect(key).toHaveLength(64); // 32 bytes in hex = 64 characters
    expect(iv).toHaveLength(32); // 16 bytes in hex = 32 characters
  });

  it("should allow signin with the correct password", () => {
    expect(() => oneCard.signin("secure_password")).not.toThrow();
  });

  it("should deny signin with an incorrect password", () => {
    expect(() => oneCard.signin("wrong_password")).toThrow(
      "Incorrect password"
    );
  });

  it("should not allow setting sensitive data without signing in", () => {
    expect(() => oneCard.setAadhar("1234-5678-9012")).toThrow(
      "Unauthorized action. Admin role required."
    );
  });

  it("should allow setting sensitive data after signing in as admin", () => {
    oneCard.signin("secure_password");
    expect(() => oneCard.setAadhar("1234-5678-9012")).not.toThrow();
  });

  it("should encrypt and decrypt data correctly", () => {
    oneCard.signin("secure_password");
    oneCard.setAadhar("1234-5678-9012");
    oneCard.setPan("ABCDE1234F");
    oneCard.setDob("1990-01-01");

    const encryptedData = oneCard.encrypt();
    expect(typeof encryptedData).toBe("string");

    const decryptedData = oneCard.decrypt(encryptedData);
    expect(decryptedData).toEqual({
      hasAadhar: true,
      isAadharVerified: false,
      hasPan: true,
      isPanVerified: false,
      dob: "1990-01-01",
    });
  });

  it("should allow retrieval of key and iv", () => {
    const { key, iv } = oneCard.getKeyAndIv();
    expect(key).toHaveLength(64); // 32 bytes in hex = 64 characters
    expect(iv).toHaveLength(32); // 16 bytes in hex = 32 characters
  });

  it("should maintain audit logs", () => {
    oneCard.signin("secure_password");
    oneCard.setAadhar("1234-5678-9012");
    oneCard.setPan("ABCDE1234F");

    const logs = oneCard.getAuditLogs();
    expect(logs).toHaveLength(3); // Signin + 2 setter actions
    expect(logs[0]).toContain("Signin successful");
    expect(logs[1]).toContain("Aadhar set");
    expect(logs[2]).toContain("PAN set");
  });
});
