"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//interface is a lose form of class
var anshu = {
    dbId: 22,
    email: "anshu@gmail.com",
    userid: 233,
    startTrial: function () {
        console.log("Starting trial");
    },
    getCoupon: function (name) {
        return 10;
    },
};
//anshu.dbId=244   --coz readOnly
