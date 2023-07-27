function init(turn) {
  // Remove .activeCells class and attributes from all black cells
  for (const cell of document.querySelectorAll('.bg-dk-brn')) {
    cell.removeAttribute('onclick');
    cell.firstElementChild?.removeAttribute('onclick');
    cell.classList.remove('activeCells');
  }
  // Apply move function to all pieces based on turn ('white' or 'black')
  for (const piece of document.querySelectorAll(`.${turn}`)) {
    if (!piece.classList.contains('active')) {
      piece.setAttribute('onclick', 'handleMove(this)')
    }
  }
}

function handleMove(target) {
  const cell = target.parentElement,
    position = cell.dataset.cell,
    possibleMoves = target.classList.contains('king') 
      ? [[getPrevChar(position.slice(0,1)), position.slice(1)-1].join(''), 
        [getPrevChar(position.slice(0,1)), Number(position.slice(1))+1].join(''),
        [getNextChar(position.slice(0,1)), position.slice(1)-1].join(''),
        [getNextChar(position.slice(0,1)), Number(position.slice(1))+1].join('')].filter(el => Number(el.slice(1)) < 9 && Number(el.slice(1)) > 0)
      : [[turn == 'white' 
      ? getPrevChar(position.slice(0,1)) 
      : getNextChar(position.slice(0,1)), position.slice(1)-1].join(''), [turn == 'white' 
      ? getPrevChar(position.slice(0,1)) 
      : getNextChar(position.slice(0,1)), Number(position.slice(1))+1].join('')].filter(el => Number(el.slice(1)) < 9 && Number(el.slice(1)) > 0);

  // Remove onclick attributes from un-clicked pieces
  for (const inactivePiece of [...document.querySelectorAll(`.${turn}`)].filter(el => el !== target)) {
    inactivePiece.removeAttribute('onclick');
  }
  // Remove .active class to clicked piece then revert all .canBeEaten & .activeCells to black then restart SAME TURN.
  if (target.classList.contains('active')) {
    target.classList.remove("active");
    for (const aCell of [...document.querySelectorAll(".canBeEaten")]) {
      aCell.classList.remove("canBeEaten");
      aCell.classList.add("bg-dk-brn");
    }
    for (const aCell of [...document.querySelectorAll(".activeCells")]) {
      aCell.removeAttribute("onclick");
      aCell.classList.remove("activeCells");
      aCell.classList.add("bg-dk-brn");
    }
    init(turn);
  } else {
    // Add .active class to clicked piece and highlight it's cell
    target.classList.add("active");
    cell.classList.remove("bg-dk-brn");
    cell.classList.add("activeCells");
    // Highlight cell and apply function to each possible move based on the piece clicked & space available
    for (const move of possibleMoves) {
      const pCell = document.querySelector(`[data-cell~="${move}"]`);
      if (pCell?.innerHTML == "" || pCell?.innerHTML == '\n          \n        ') {
        pCell.classList.remove("bg-dk-brn");
        pCell.classList.add("activeCells");
        pCell.setAttribute("onclick", "movePieceToCell(this)");
      }
      // Check for valid cell/piece-jumping & apply class and function appropriately
      else if (!pCell?.firstElementChild.classList.contains(`${turn}`)) {
        const pJumpCell = target.classList.contains("king") 
          ? document.querySelector(`[data-cell~="${[position.slice(0, 1) > move.slice(0, 1) ? getPrevChar(move.slice(0, 1)) : getNextChar(move.slice(0, 1)), position.slice(1) < move.slice(1) ? Number(move.slice(1)) + 1 : move.slice(1) - 1].join('')}"]`) 
          : document.querySelector(`[data-cell~="${[turn == "white" ? getPrevChar(move.slice(0, 1)) : getNextChar(move.slice(0, 1)), move.slice(1) < position.slice(1) ? move.slice(1) - 1: Number(move.slice(1)) + 1].join("")}"]`);
        if (pJumpCell?.innerHTML == "" || pJumpCell?.innerHTML == '\n          \n        ') {
          pJumpCell.classList.remove("bg-dk-brn");
          pJumpCell.classList.add("activeCells");
          pJumpCell.setAttribute("onclick", "movePieceToCell(this)");
          document.querySelector(`[data-cell~="${move}"]`).classList.remove('bg-dk-brn');
          document.querySelector(`[data-cell~="${move}"]`).classList.add('canBeEaten');
        }
      }
    }
  }
}

function movePieceToCell(target) {
  const ogPosition = document.querySelector('.active').parentElement.dataset.cell, 
    newPosition = target.dataset.cell,
    pEatCell = document.querySelector(`[data-cell~="${[ogPosition.slice(0, 1) > newPosition.slice(0, 1) ? getPrevChar(ogPosition.slice(0, 1)) : getNextChar(ogPosition.slice(0, 1)), ogPosition.slice(1) > newPosition.slice(1) ? ogPosition.slice(1)-1 : Number(ogPosition.slice(1)) + 1].join('')}"]`);
  // Move active piece to the clicked cell if empty, remove functions & revert cells to black
  if (target.innerHTML == "" || target.innerHTML == '\n          \n        ') {
    document.querySelector(".active").removeAttribute("click");
    target.appendChild(document.querySelector(".active"));
    // King mechanic
    const whiteKingArr = ["A1", "A3", "A5", "A7"],
    blackKingArr = ["H2", "H4", "H6", "H8"];
      if (document.querySelector(".active").classList.contains(`${turn}`) && whiteKingArr.includes(newPosition)) {
        target.firstElementChild.classList.add("king");
      }
      if (document.querySelector(".active").classList.contains(`${turn}`) && blackKingArr.includes(newPosition)) {
        target.firstElementChild.classList.add("king");
      }
    document.querySelector(".active").classList.remove("active");
    for (const aCell of [...document.querySelectorAll(".activeCells")]) {
      aCell.removeAttribute("onclick");
      aCell.classList.add("bg-dk-brn");
      aCell.classList.remove("activeCells");
    }
    document.querySelector(".active")?.removeAttribute("onclick");
  }
  // Eating mechanic
  if (pEatCell.classList.contains('canBeEaten')) {
    pEatCell.removeChild(pEatCell.firstElementChild);
  }
  for (const aCell of [...document.querySelectorAll(".canBeEaten")]) {
    aCell.classList.add("bg-dk-brn");
    aCell.classList.remove("canBeEaten");
  }
  init(turn == "white" ? (turn = "black") : (turn = "white"));
}

function getNextChar(char) {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

function getPrevChar(char) {
  return String.fromCharCode(char.charCodeAt(0) - 1);
}

init(turn = 'white');