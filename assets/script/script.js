document.addEventListener("DOMContentLoaded", function () {
  const counterValue = document.getElementById("counter-value");
  const incrementButton = document.querySelector(".increment-button");
  const decrementButton = document.querySelector(".decrement-button");
  const resetButton = document.getElementById("reset-button");

  let count = 0;

  // Function to update the counter value and display it
  function updateCounter() {
    counterValue.textContent = count;
  }

  // Add event listener for increment button
  incrementButton.addEventListener("click", function () {
    count++;
    updateCounter();
  });

  // Add event listener for decrement button
  decrementButton.addEventListener("click", function () {
    if (count > 0) {
      count--;
      updateCounter();
    }
  });

  resetButton.addEventListener("click", () => {
    count = 0; // Reset the counter to 0
    updateCounter();
  });
});
