class User {
  protected _coursecount = 1;
  readonly city: string = "jaipur";
  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {}
  private deleteToken() {
    console.log("Token Deleted");
  }
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
  get courseCount(): number {
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
  isFamily: boolean = true;
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
