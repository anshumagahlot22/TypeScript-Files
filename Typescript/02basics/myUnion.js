"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var anshuma = {
    name: "Anshuma",
    id: 334,
};
anshuma = { username: "ag", id: 335 };
// function getDbId(id:number | string){
//     console.log(`DB id is : ${id}`)
// }
getDbId(3);
getDbId("abC");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
