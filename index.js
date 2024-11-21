const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const reset = document.querySelector(".btn-reset");

reset.addEventListener("click", () => {
  // Clear the actual grid
  container.innerHTML = "";
  createGrid(16, 960 / 16);
});

btn.addEventListener("click", () => {
  const numSquares = parseInt(prompt("How many squares that you want?"));

  //   Validate the input
  if (isNaN(numSquares) || numSquares < 1 || numSquares > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }
  // Calculate the size of each square
  const squareSize = 960 / numSquares;
  createGrid(numSquares, squareSize);
});

function createGrid(squares, squareSize) {
  // Clear the actual grid
  container.innerHTML = "";

  for (let i = 1; i <= squares * squares; i++) {
    const divChild = document.createElement("div");
    divChild.textContent = i;
    divChild.classList.add("square");
    container.appendChild(divChild);

    // Define the width and height of each square
    divChild.style.width = `${squareSize}px`;
    divChild.style.height = `${squareSize}px`;

    // Added a
    divChild.addEventListener("mouseover", () => {
      divChild.style.backgroundColor =
        divChild.style.backgroundColor === "red" ? "" : "red";
    });
  }
}

// Create initial grid by default (16 x 16);
// Clear the actual grid
container.innerHTML = "";
createGrid(16, 960 / 16);
