"use strict";
class User {
    email;
    name;
    userId;
    _coursecount = 1;
    city = "jaipur";
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._coursecount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._coursecount = courseNum;
    }
}
class SubUser extends User {
    isFamily = true;
    changeCourseCount() {
        this._coursecount = 4;
    }
}
const anshu = new User("anshu@gmail.com", "anshuma", 112);
console.log(anshu);
let a = anshu.courseCount;
console.log(a);
anshu.courseCount = 7;
let b = anshu.courseCount;
console.log(b);
