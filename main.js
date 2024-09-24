import { LinkedList } from "./linkedList.js";
// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
console.log(list)
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
