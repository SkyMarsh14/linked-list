class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {

    constructor(){
        this.head=null;
    }
  append(value) {
    while (list) {
      if (!list.next) {
        const node = new Node(value);
        list.next = node;
        if(!this.head){
            this.head=node;
        }
      }
      list = list.next;
    }
  }
  prepend(value){
    const node=new Node(value,this.head);
    this.head=node;
  }
}
