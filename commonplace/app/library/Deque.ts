class Deque<T> {
  deque: T[]
  constructor() {
      this.deque = [];
  }
  
  addFront(element: T) {
    this.deque.unshift(element);
  }

  addBack(element: T) {
    this.deque.push(element);
  }

  isEmpty() {
    return this.deque.length === 0;
  }

  removeFront() {
    if (!this.isEmpty()) {
        return this.deque.shift();
    }
    return null;
  }

  removeBack() {
    if (!this.isEmpty()) {
        return this.deque.pop();
    }
    return null;
  }

  getFront(){
    if(!this.isEmpty()){
        return this.deque[0];
    }
    return null;
  }

  getBack(){
    if(!this.isEmpty()){
        return this.deque[this.size()-1]
    }
    return null;
  }

  size() {
    return this.deque.length;
  }
}