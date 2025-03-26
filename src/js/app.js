// TODO: write code here

import Goblin from "./Goblin";

import GameState from "./GameState";

Goblin.createField();

setInterval(() => {
  if (!GameState.paused) {
    Goblin.refreshGrid();
    GameState.chanceUpdate();
    GameState.chances--;
  }
}, 1000);

document.addEventListener("click", clicklHandeler);

function clicklHandeler(e) {
  if (e.target.tagName === "IMG") {
    GameState.hit();
  } else {
    GameState.miss();
  }
}
