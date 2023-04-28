export default class MySingleton {
  static instance: MySingleton;
  public name = 'milkmidi'
  constructor() {
    if (!MySingleton.instance) {
      MySingleton.instance = this;
    }
    return MySingleton.instance;
  }
}

// 這樣寫有可能會被 new MySingleton2()，因為 JS 不支援 private constructor，但 ts 可以，解掉，開心
export class MySingleton2 {
  static instance: MySingleton2;
  public name = 'milkmidi2'
  static getInstance() {
    if (!MySingleton2.instance) {
      MySingleton2.instance = new MySingleton2();
    }
    return MySingleton2.instance;
  }
  private constructor() {
  }
}



const singleton1 = new MySingleton();
const singleton2 = new MySingleton();
singleton2.name= '123123';


console.log(singleton1.name)
console.log(MySingleton2.getInstance().name)