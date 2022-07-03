/** @format */

require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/tasks');

User.findByIdAndUpdate('62c07963aae01c5729f07f56', { age: 1 }).then((user) => {
  console.log(user);
  return User.countDocuments({ age: 1 });
});

Task.findByIdAndDelete('62c117da66ab7c6155db698e')
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('62c07963aae01c5729f07f56', 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('62c07963aae01c5729f07f56')
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
