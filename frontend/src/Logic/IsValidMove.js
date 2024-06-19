// Function to check if a basic move is valid
export default function isValidMove(from, to, squares, isWhite){
  const piece = squares[from];
  const isKing = piece === 'WK' || piece === 'BK';
  const direction = isWhite ? -1 : 1;
  const diff = to - from;
  const rowDiff = Math.abs(Math.floor(to / 8) - Math.floor(from / 8));
  
  // Check basic move for regular pieces
  if (!isKing && rowDiff === 1 && (diff === 7 * direction || diff === 9 * direction) && !squares[to]) {
    return true;
  }
  
  // Check basic move for king pieces
  if (isKing && rowDiff === 1 && (Math.abs(diff) === 7 || Math.abs(diff) === 9) && !squares[to]) {
    return true;
  }

  return false;
}