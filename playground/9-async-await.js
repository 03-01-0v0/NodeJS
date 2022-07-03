/** @format */

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) reject('Negative Number');
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

const doWork = async () => {
  const sum = await add(1, 99);
  const sum1 = await add(sum, 99);
  const sum2 = await add(sum1, -3);
  const sum3 = await add(sum2, 99);
  return sum3;
};

doWork()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
