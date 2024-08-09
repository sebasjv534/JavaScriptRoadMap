function doSomething(n) {
  if(n === 0) {
    console.log('Task completed');
    return;
  }
  console.log('I am doing something');
    doSomething(n - 1);
}

doSomething(3); //I am doing something 3 times, then Task completed