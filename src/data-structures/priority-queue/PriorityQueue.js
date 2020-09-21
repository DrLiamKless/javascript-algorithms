export default class PriorityQueue {

  constructor() {
    this.queue = [];
  }

    isEmpty() {
      return this.queue.length === 0
    }

    peek() {
      if (this.isEmpty()) {
        return null
      } else 
      return this.queue[0].value
    }

    add(value, priority) {
      const element = {value, priority}
      if(this.isEmpty()) {
        this.queue.unshift(element);
        return
      } else {
        for(let i = 0; i < this.queue.length; i++) {
          if (priority < this.queue[i].priority) {
            this.queue.splice(i, 0, element)
            return
          }
        }
      } 
      this.queue.push(element)
    }

    changePriority(value ,newPriority) {
      if(this.isEmpty()) {
        return undefined
      }
      for(let i = 0; i < this.queue.length; i++) {
        if (this.queue[i].value === value) {
          this.queue[i].priority = newPriority;
          const changedElement = this.queue[i].value;
          this.queue.splice(i, 1);
          this.add(changedElement, newPriority);
          return
        } 
      }
      return undefined
    }

    poll() {
      const firstElement = this.queue[0].value;
      this.queue.shift();
      return firstElement
    }

    hasValue(value) {
      if(this.isEmpty()) {
        return false
      } else {
        for (let i = 0; i < this.queue.length; i++) {
          if (this.queue[i].  value === value) {
            return true
          }
        }
        return false
      } 
    }

}