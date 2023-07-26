const generateRandomPass = (length) => {
  const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const numericChar = "0123456789";
  const specialChar = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const allChar = uppercaseChar + lowercaseChar + numericChar + specialChar;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChar.length);
    password += allChar[randomIndex];
  }

  return password;
};

const randomPassword = generateRandomPass(8);
console.log(randomPassword);
