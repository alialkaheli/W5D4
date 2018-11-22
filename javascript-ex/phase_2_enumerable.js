Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++){
    arr.push(callback(this[i]));
  }
  return arr;
};

Array.prototype.myReduce = function (callback, initial = 0) {
    this.myEach(function(el) {
      // console.log(el,initial, callback(initial,el));
      initial = callback(initial,el);
    });



    // num += initial;
    return initial;
};

// const cb = function(acc, el) {
//   return acc + el;
// };
//
// let a =[1, 2, 3].myReduce(cb);
//
// let b =[1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25);
// console.log(a);
// console.log(b);
