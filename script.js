function increment() {
  count++;
  kittenCount.textContent = count;
}

function decrement() {
  count--;
  kittenCount.textContent = count;
}

function logEntry() {
  entryCount.textContent += `${count}, `;
  count = 0;
  kittenCount.textContent = count;
}

function reset() {
  count = 0;
  kittenCount.textContent = count;
  entryCount.textContent = "";
}

let kittenCount = document.getElementById("kitten-el");
let entryCount = document.getElementById("entries-el");
let count = 0;
