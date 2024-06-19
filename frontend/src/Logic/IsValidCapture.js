// Function to check if a capture move is valid
export default function isValidCapture (from, to, squares, isWhite){
  const piece = squares[from];
  const isKing = piece === 'WK' || piece === 'BK';
  const direction = isWhite ? -1 : 1;
  const diff = to - from;
  const rowDiff = Math.abs(Math.floor(to / 8) - Math.floor(from / 8));
  
  // Check capture move for regular pieces
  if (!isKing && rowDiff === 2 && (diff === 14 * direction || diff === 18 * direction)) {
    const middle = from + diff / 2;
    if (squares[middle] && squares[middle] !== (isWhite ? 'W' : 'B') && !squares[to]) {
      return middle; // Return the index of the captured piece
    }
  }

  // Check capture move for king pieces
  if (isKing && rowDiff === 2 && (Math.abs(diff) === 14 || Math.abs(diff) === 18)) {
    const middle = from + diff / 2;
    if (squares[middle] && squares[middle] !== (isWhite ? 'W' : 'B') && !squares[to]) {
      return middle; // Return the index of the captured piece
    }
  }

  return null;
}