const userInfo = {
  name: "Fulano",
  middleName: "da Silva",
  lastName: "Ciclano",
  childName: "de Souza",
  active: false,
  skills: ["Mobile", "Web", "Testing"],
};

// Spread operator
const updateUserInfo = {
  ...userInfo,
  skills: [...userInfo.skills, "Backend"],
  active: true,
};

console.log(updateUserInfo);
