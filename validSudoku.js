// 1.
function isValidSudoku(board) {

	let columnNums;
	let subBox1 = [], subBox2 = [], subBox3 = [], subBox4 = [], subBox5 = [], subBox6 = [], subBox7 = [], subBox8 = [], subBox9 = [];

	for(let i = 0; i < board.length; i++) {
		columnNums = [];

		for (let j = 0; j < board[0].length; j++) {
            
			// row check
			if (board[i][j] !== '.' && board[i].indexOf(board[i][j]) !== j) return false;
            
			// column check
			if (columnNums.some((e) => {
				return e === board[j][i]
			})) return false;
			else if (board[j][i] !== '.') columnNums.push(board[j][i]);

            
			// subBox check for every 3 lines
			if (i < 3 && j < 3 && board[i][j] !== '.') {
				if (subBox1) {					
					if (subBox1.some((e) => {
						return e === board[i][j]
					})) return false;
					else subBox1.push(board[i][j]);
				}
			}

			if (i < 3 && j >= 3 && j < 6 && board[i][j] !== '.') {
				if (subBox2.some((e) => {
					return e === board[i][j]
				})) return false;
				else subBox2.push(board[i][j]);
			}

			if (i < 3 && j >= 6 && j < 9 && board[i][j] !== '.') {
				if (subBox3.some((e) => {
					return e === board[i][j]
				})) return false;
				else subBox3.push(board[i][j]);
			}

			if (i >= 3 && i < 6 && j < 3 && board[i][j] !== '.') {
				if (subBox4.some((e) => {
					return e === board[i][j]
				})) return false;
				else subBox4.push(board[i][j]);
			}			

			if (i >= 3 && i < 6 && j >= 3 && j < 6 && board[i][j] !== '.') {
				if (subBox5.some((e) => {
					return e === board[i][j]
				})) return false;
				else subBox5.push(board[i][j]);
			}

			if (i >= 3 && i < 6 && j > 6 && j < 9 && board[i][j] !== '.') {
				if (subBox6.some((e) => {
					return e === board[i][j]
				})) return false;
				else subBox6.push(board[i][j]);
			}

			if (i >= 6 && i < 9 && j < 3 && board[i][j] !== '.') {
				if (subBox7.some((e) => {
					return e === board[i][j]
				})) return false;
				else subBox7.push(board[i][j]);
			}			

			if (i >= 6 && i < 9 & j >= 3 && j < 6 && board[i][j] !== '.') {
				if (subBox8.some((e) => {
					return e === board[i][j]
				})) return false;
				else subBox8.push(board[i][j]);
			}

			if (i >= 6 && i < 9 && j >= 6 && j < 9 && board[i][j] !== '.') {
				if (subBox9.some((e) => {
					return e === board[i][j]
				})) return false;
				else subBox9.push(board[i][j]);
			}			
		}
	}
    
    return true;
}

// 2.
// var isValidSudoku = function(board) {
//   let row = 9;
//   let column = 9;

//   // row check;
//   for (let i = 0 ; i < column ; i++) {
//       var rowSet = new Set();
//       for (let j = 0 ; j < row ; j++) {
//           if (board[i][j] != "." && !rowSet.has(board[i][j])) rowSet.add(board[i][j]);
//           else if (rowSet.has(board[i][j])) return false;
//       }
//   }

//   // column check;
//   for (let j = 0 ; j < column ; j++) {
//       var columnSet = new Set();
//       for (let i = 0 ; i < row ; i++) {
//           if (board[i][j] != "." && !columnSet.has(board[i][j])) columnSet.add(board[i][j]);
//           else if (columnSet.has(board[i][j])) return false;
//       }
//   }

//   // 3x3 check;
//   for (let a = 0 ; a < column ; a += 3) {
//       for (let b = 0 ; b < row ; b += 3) {
//           var squareSet = new Set();
//           for (let i = 0 ; i < 3 ; i++) {
//               for (let j = 0 ; j < 3 ; j++) {
//                   if (board[a+i][b+j] != "." && !squareSet.has(board[a+i][b+j])) squareSet.add(board[a+i][b+j]);
//                   else if (squareSet.has(board[a+i][b+j])) return false;
//               }
//           }
//       }
//   }

//   return true;
// };