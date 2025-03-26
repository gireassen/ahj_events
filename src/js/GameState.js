export default class GameState {
  static {
    this.paused = false;
    this.hits = 0;
    this.misses = 0;
    this.chances = 5;
  }

  static hit() {
    this.hits++;
    this.chances = 5;
    document.getElementById("hits").textContent = `You hit ${this.hits} times`;
    document.getElementById("goblin").hidden = true;
  }

  static miss() {
    this.misses++;
    document.getElementById("misses").textContent =
      `You missed ${this.misses} times`;
  }

  static chanceUpdate() {
    if (this.chances != 0) {
      document.getElementById("chances").textContent =
        `You have ${this.chances} chance(s)`;
    } else {
      this.paused = true;
      alert("Игра окончена");
      this.chances = 6;
      this.paused = false;
    }
  }
}
