type List = {
  name: string;
  age: string;
};

type ToReadonly<Obj> = {
  readonly [key in keyof Obj]: Obj[key];
};

type a = keyof Obj;

type b = Partial<List>;

type c = Omit<List, "name">;

const user = {
  name: "张三",
  age: 20,
};

type d1 = keyof typeof user;

type d2 = keyof List;
