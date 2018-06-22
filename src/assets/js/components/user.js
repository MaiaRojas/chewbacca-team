"use strict";
//Carga todos los usuarios al local storage

$( window ).load(()=> {
  let validUsers = getItemFromStorage('users');
  if (validUsers == null) {
    validUsers = [];
    validUsers.push({ email: "maia.rt.46@gmail.com", password: "12345"});
    addItemToStorage("users",validUsers);
  };
});
