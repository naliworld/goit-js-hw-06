const listClassEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${listClassEl.length}`);

listClassEl.forEach((el) =>
  console.log(
    `Category: ${el.firstElementChild.textContent}`,
    `\nElements: ${el.lastElementChild.children.length}`,
    ),
);

