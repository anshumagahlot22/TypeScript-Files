//a scenario of new user with some properties
//trial for this user for some services and give him some discount and
interface User {
  readonly dbId: number;
  email: string;
  userid: number;
  googleId?: string;
  //startTrial:()=>string
  startTrial();
  getCoupon(couponName: string): number;
}

//you can Add new fields to an existing interface
interface User {
  gitHubToken: string;
}

//inheritance in interfaces
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

//interface is a lose form of class
const anshu: Admin = {
  dbId: 22,
  email: "anshu@gmail.com",
  userid: 233,
  gitHubToken: "anshu.github",
  role: "admin",
  startTrial: () => {
    console.log("Starting trial");
  },
  getCoupon: (name: "welcome") => {
    return 10;
  },
};
export {};
//anshu.dbId=244   --coz readOnly
