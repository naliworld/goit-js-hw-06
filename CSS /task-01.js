const listClass = document.querySelectorAll(".item");

console.log(`Number of categories: ${listClass.length}`);

listClass.forEach((el) =>
  console.log(
    `Category: ${el.firstElementChild.textContent}`,
    `\nElements: ${el.lastElementChild.children.length}`,
    ),
);

