let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#reset-game");
let turnO = true; //playerO,  playerX
let newGamebtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () =>{
  turnO = true;
  enablebox();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => [
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  }),
]);

const disableBox = () => {
  for(let box of boxes){
    box.disabled = true;
  }
};

const enablebox = () =>
{
for(let box of boxes)
{
  box.disabled = false;
  box.innerText = "";
}
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};

const checkwinner = () => {
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        
        showWinner(pos1val);
      }
    }
  }
};

newGamebtn.addEventListener("click",resetGame);
rstBtn.addEventListener("click",resetGame);