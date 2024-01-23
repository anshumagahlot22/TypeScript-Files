// const user:(string | number)[]=["hc",1]

let tUser: [string, number, boolean];
tUser = ["hc", 34, true];
//tUser=[true,124,"hc"] --order matters

let rgb: [number, number, number] = [255, 231, 112];

type User = [number, string];
const newUser: User = [112, "example@google.com"];
newUser[1] = "hc.com";

// newUser.push(true);
export {};
