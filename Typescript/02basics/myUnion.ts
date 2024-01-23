let score: number | string = 33;
score = 44;
score = "55";
type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let anshuma: User | Admin = {
  name: "Anshuma",
  id: 334,
};
anshuma = { username: "ag", id: 335 };

// function getDbId(id:number | string){
//     console.log(`DB id is : ${id}`)
// }
getDbId(3);
getDbId("abC");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array
const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
//const data3:number[] | string[] =[1,2,3,"3"]
const data3: (number | string)[] = [1, 2, 3, "3"];

let seatAllotment: "aisle" | "middle" | "window ";
seatAllotment = "aisle";
//seatAllotment="crew";
export {};
