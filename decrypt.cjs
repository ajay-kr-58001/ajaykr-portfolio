const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();
  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile);

  let iv;
  input.on('data', (chunk) => {
    if (!iv) {
      iv = chunk.slice(0, 16);
      chunk = chunk.slice(16);
    }
    // But this is not correct for streaming decrypt.
    // Better to read the whole file.
  });

  // Simpler: read the whole file
  const encrypted = fs.readFileSync(inputFile);
  iv = encrypted.slice(0, 16);
  const data = encrypted.slice(16);
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
  fs.writeFileSync(outputFile, decrypted);
};

decryptFile("public/models/character.enc", "public/models/character.glb", "MyCharacter12");