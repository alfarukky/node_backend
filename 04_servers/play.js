const stove = require('./stove');
function pot(handle1, handle2) {
  // console.log(handle1.name);
  // console.log(handle2.name);
  console.log(`The ${handle1.name} is on the ${handle2.name}`);
}

stove(pot);
