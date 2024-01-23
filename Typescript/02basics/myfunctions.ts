function addTwo(num: number): number {
  //num.toUpperCase();
  return num + 2;
  //return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
let myValue = addTwo(5);
getUpper("anshuma");
signUpUser("anshuma", "anshumavgahlot10@gmail.com", true);
loginUser("anshuma", "ansh.com");

//signUpUser(1,2,3);
//getUpper(4);
//addTwo("7");

//ways to return union types
// function getValue(myVal:number){
//     if(myVal >5){
//         return true;
//     }
//     return "200 OK";
// }
// export {};

const getHello = (s: string): string => {
  return "";
};

//const heros=["thor","spiderman","ironman"];
const heros = [1, 2, 3];
heros.map((hero): string => {
  return `hero is ${hero}`;
  //return 1;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
  //never type represents values which are never observed
  //means function throws an exception or terminates execution
}

export {};
