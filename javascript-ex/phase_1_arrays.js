Array.prototype.uniq = function() {
  let result = new Array ();
  // let result = []
  for (let i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function() {
  let result = [];
  for(let i = 0; i < this.length-1; i++){
    for(let j = i + 1; j < this.length; j++){
      if(this[i]+ this[j]===0){
        result.push([i,j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  let result = [];
  for (let i = 0; i < this[1].length; i++){
    let trans = [];
    for (let j = 0; j < this.length; j++){
      trans.push(this[j][i]);
    }
    result.push(trans);
  }
  return result;
};
