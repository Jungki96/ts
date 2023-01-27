type Age = number;
type Name = string;
type Player = {
  readonly name: Name;
  age?: Age;
};
const playerMaker = (name: string): Player => ({ name });
const nico = playerMaker("nico");
nico.age = 12;

// Overloading
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

//PolymorPhism
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);

// Generic

type SuperPrints = <T>(a: T[]) => T;

const superPrints: SuperPrints = (a) => a[0];

const a = superPrints([1, 2, 3, 4]);
const b = superPrints([true, false, true]);
const c = superPrints(["a", "b", "c"]);
