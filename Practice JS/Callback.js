//callback :

//Passing a function into a another functions arguments is called callback function

function greet(name, callback) {
  console.log(`hello ${name}`);
  callback();
}

function saygoodbye() {
  console.log("Goodbye");
}

greet("Vijay", saygoodbye);

//callback hell :
//situation in js where callbacks are nested within the other callbacks and where the code is
//difficult to read.

//old pattern to handle asynchronus functions.
//we can use promises and async and await to avoid callback hell

function task1(callback) {
  setTimeout(() => {
    console.log("im function 1");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("im function 2");
    callback();
  }, 2000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("im function 3");
    callback();
  }, 2000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("im function 4");
    callback();
  }, 2000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("all task completed");
      });
    });
  });
});
