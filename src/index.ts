import MySingleton, {MySingleton2} from './01-Singleton';

const singleton1 = new MySingleton();
const singleton2 = new MySingleton();
singleton2.name= '123123';


console.log(singleton1.name)
console.log(MySingleton2.getInstance().name)