Array.prototype.bubbleSort = function() {
  let n = this.length;
    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n-i-1; j++)
        if (this[j] > this[j+1]) {
          let temp = this[j];
          this[j] = this[j+1];
          this[j+1] = temp;
        }
    }
    return this;
};


console.log([3,4,6,7,2,3].bubbleSort());
