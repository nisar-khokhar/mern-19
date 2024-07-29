// const promise1 = new Promise((res, rej) => {
//   const a = 5;

//   if (a % 2 == 0) res("even");
//   rej("odd");
// });

// promise1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err, "error here");
//   });

// const promiseTime = new Promise((res, rej) => {
//   setTimeout(() => res(new Date()), 1000);
// });
// const promiseTime1 = new Promise((res, rej) => {
//   setTimeout(() => res(new Date()), 2000);
// });
// const promiseTime2 = new Promise((res, rej) => {
//   setTimeout(() => res(new Date()), 3000);
// });

// const main = async () => {
//   await promiseTime.then((res) => {
//     console.log(res);
//   });
//   await promiseTime1.then((res) => {
//     console.log(res);
//   });
//   await promiseTime2.then((res) => {
//     console.log(res);
//   });
// };
// main();

//infinite loop after 1 sec
const main1 = async () => {
  const promiseTime = new Promise((res, rej) => {
    setTimeout(() => res(new Date().toUTCString()), 1000);
  });
  await promiseTime.then((res) => {
    console.log(res);
  });
  main1();
};
main1();
