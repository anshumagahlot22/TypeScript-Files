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

// function createCourse(): { name: string; price: number } {
//   return { name: "reactJs", price: 399 };
// }

//type aliases
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };
// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }
// createUser({ name: "", email: "", isActive: true });
//Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
//Almost all features of an interface are available in type,
//the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

//READONLY ANS OPTIONAL IN TS
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditcardDetails?: number; //? means this a optional to pass
};
let myUser: User = {
  _id: "1234",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "h@gmail.com";
//myUser._id = "asa";

export {};
