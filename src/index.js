
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if( matrix == undefined)
    return [];
    
  let result_arr = [];
  let len = matrix.length;

  for(let i = 0; i < len; i++){
    if (i%2 != 0){
      result_arr = result_arr.concat((matrix.shift()).reverse());
    }
    else{
      result_arr = result_arr.concat(matrix.shift());
    }
  }
  return result_arr;
}
