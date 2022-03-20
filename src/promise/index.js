//promesas
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("OK!");
    } else {
      reject("Whoops!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whoopps!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Arrays of results: ", response);
  })
  .catch((error) => {
    console.error(error);
  });
