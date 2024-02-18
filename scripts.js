// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'

winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
squares = document.getElementsByTagName("td")
let countX
let countO

const checkForWin = () => {
  squares = document.getElementsByTagName("td")
  for (i=0; i < winConditions.length; i++) {
    countX = 0
    countO = 0
    for (j=0; j < 3; j++) {
      let currentSquare = winConditions[i][j]
      if (squares[currentSquare].innerHTML == "X") {
        countX++
      }
      else if (squares[currentSquare].innerHTML == "O") {
        countO++
      }
    }
    if (countX === 3) {
      setTimeout(() => {
        window.alert(`Player X won!`)
      }, 500);
    }
    if (countO === 3) {
      setTimeout(() => {
        window.alert(`Player O won!`)
      }, 500);
    }
  }
}

// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {
  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}

// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  document.getElementById(id).innerHTML = currentMarker
  checkForWin()
  changeMarker()
}

// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  for (let i = 0; i < squares.length; i++) {
    // will log out the id of each square as it loops over them.
    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }
  currentMarker = "X"
}