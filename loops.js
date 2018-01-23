function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if (i < 25){
    array.push(`I am ${i} strange loops.`);
  } else {
    return array
    }
  }
}

function whileLoop (num){
  while (num > 0) {
    if (num > 0) {
      console.log(num--);
    } else {
      return 'done';
    }
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop (array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
}
