/** @format */

const name = 'Andrew';
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: 'Philadelphia',
};
console.log(user);

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4,
};

const { label, stock, rating = 5 } = product;
console.log(product);
console.log(label, stock);
console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);
