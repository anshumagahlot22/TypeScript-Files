"use strict";
// const User = {
//   name: "Anshuma",
//   email: "anshumavgahlot10@gmail.com",
//   isActive: true,
// };
// function createUser({ name: string, isPaid: boolean }) {}
// createUser({ name: "anshu", isPaid: false });
// //createUser({name:"anshu",isPaid:false,email:"anshu.com"});
// let newUser = { name: "anshu", isPaid: false, email: "anshu.com" };
// createUser(newUser); -- bad behaviour of objects in TS
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false,
};
myUser.email = "h@gmail.com";
