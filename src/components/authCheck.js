export function authCheck(name, pass) {
  let users = [
    { name: "Alex", password: "1234", isAdmin: false },
    { name: "admin", password: "password", isAdmin: true },
  ];

  let nameResult = users.filter((el) => el.name === name);

  let logIn =
    nameResult.length > 0
      ? nameResult.find((el) => el.password === pass)
        ? true
        : false
      : false;
  return logIn ? nameResult : logIn;
}
