var result = document.querySelector("#result");
let items = ["item1", "item2", "item3"];

function show() {
  setTimeout(() => {
    let item = items.map((item) => `<li>${item}</li>`).join("");
    result.innerHTML = item;
  }, 400);
}

function add(item) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      items.push(item);
      res();
    }, 800);
  });
}

add("item 4").then(show);

// function logData(data) {
//   console.log(data);
// }
// function add(item, callback) {
//   setTimeout(() => {
//     items.push(item);
//     callback();
//     // callback(item);
//   }, 800);
// }

// add("item 4", show);
// // add("item 4", logData);

function test1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("test 1");
      res();
    }, 1000);
  });
}

function test2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("test 2");
      res();
    }, 500);
  });
}

function test3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("test 3");
    }, 200);
    res();
  });
}

test1().then(test2).then(test3);

// test2().then(test1);
