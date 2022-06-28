/** @format */

setTimeout(() => {
  console.log('hello nodejs');
}, 2000);
const names = ['SonDinh', 'TuanAnh', 'Hai'];
const shortNames = names.filter((item) => {
  return item.length <= 5;
});
const getcode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longtitude: 0,
    };
    callback(data);
  }, 2000);
};

getcode('hello', (data) => {
  console.log(data);
});

const add = (a, b, sum) => {
  setTimeout(() => {
    sum(a + b);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
