// Array of items with .number class using spread method
const items = [...document.querySelectorAll(".number")];
// console.log(items);

const updateCount = (el) => {
  // parse the data set values to integers
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000); // faster increment
  //   allow value to be updated
  let initialValue = 0;

  //   TODO: Increase the count - each time callback function is called increment the count for each element
  const increseCount = setInterval(() => {
    initialValue += increment;
    // Stop count once the values specified in dataset are reached
    if (initialValue >= value) {
      el.textContent = `${value}+`;
      clearInterval(increseCount);
      return; // stop immediately after condition is met
    }

    // Set the textContent of each array element = to the initial value
    el.textContent = `${initialValue}`;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});
