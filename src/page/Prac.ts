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

//Generic Recap

type SuperPrint3 = <T, M>(a: T[], b: M) => T;

const superPrint3: SuperPrint3 = (a) => a[0];

const a3 = superPrint3([1, 2, 3, 4], "1");
const b3 = superPrint3([true, false, true], 2);
const c3 = superPrint3(["a", "b", "c"], 2);
const d3 = superPrint3([1, 2, "hello", true, false], ["ant"]);

// Generic 예제
type Players<T> = {
  name: string;
  extraInfo: T;
};

type NicoExtra = { favFood: string };
type NicoPlayer = Players<NicoExtra>;

const nicos: NicoPlayer = {
  name: "nicos",
  extraInfo: {
    favFood: "kind",
  },
};

const lynn: Players<null> = {
  name: "lynn",
  extraInfo: null,
};
//
// Classes

abstract class User {
  constructor(
    private firstName: string, // 필드내에서만 사용가능
    protected lastName: string, // extend 한 객체까지 가능
    public nickname: string // 모든대에서 사용가능
  ) {}
  abstract getNickName(ar: string): void;
  //private
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
//protected
class Player4 extends User {
  getNickName() {
    console.log(this.lastName);
  }
}
const nico4 = new Player4("nico", "las", "니꼬");
//public
nico4.nickname;
