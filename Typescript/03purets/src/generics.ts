//being able to create a component that can work over a variety of types rather than a single one.
const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}
function identityTwo(val: any): any {
  return val;
}
function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree("3");
function identityFour<T>(val: T): T {
  return val;
}
identityFour(true);

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "h", type: 124 });

//generic function
function getSearchProducts<T>(products: T[]): T {
  return products[3];
}
//generic arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
  return products[3];
};
