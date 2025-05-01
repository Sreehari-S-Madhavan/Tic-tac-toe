let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X'; // X starts first
let gameActive = true; // Flag to track game status

// Elements
const cells = document.querySelectorAll('.cell');
const turnDisplay = document.getElementById('turn');

// Check for winner
const checkWinner = () => {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false; // Stop the game
      setTimeout(() => alert(`${currentPlayer} Wins!`), 100);
      return;
    }
  }

  // Check for draw
  if (!board.includes('')) {
    gameActive = false;
    setTimeout(() => alert("It's a Draw!"), 100);
  }
};

// Handle click on cell
const handleClick = (index) => {
  if (board[index] !== '' || !gameActive) return; // Ignore click if cell already filled or game is over

  board[index] = currentPlayer;
  cells[index].textContent = currentPlayer;

  // Check for winner or draw
  checkWinner();

  // Switch player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  turnDisplay.textContent = `Player ${currentPlayer}'s Turn (${currentPlayer})`;
};

// Add event listeners to all cells
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleClick(index));
});

// Reset the game
const resetGame = () => {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  turnDisplay.textContent = `Player ${currentPlayer}'s Turn (${currentPlayer})`;
  cells.forEach(cell => cell.textContent = '');
};