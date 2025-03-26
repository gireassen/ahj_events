import goblinImg from "../img/goblin.png";

export default class Goblin {
  static {
    this.size = 4;
    this.width = 120;
  }

  static random() {
    return Math.floor(Math.random() * this.size ** 2);
  }

  static addStyle() {
    return {
      "grid-template-columns": `repeat( ${this.size}, ${this.width}px)`,
      "grid-auto-rows": `${this.width}px`,
    };
  }

  static createField() {
    const div = document.createElement("div");
    div.id = "wrapper";

    Object.assign(div.style, this.addStyle());

    const imgEl = document.createElement("img");
    imgEl.id = "goblin";
    imgEl.src = `${goblinImg}`;

    for (let i = 0; i < this.size ** 2; i++) {
      const innerDiv = document.createElement("div");
      innerDiv.className = "cell";
      div.appendChild(innerDiv);
    }

    document.body.appendChild(div);
    document
      .querySelector("#wrapper")
      .children[this.random()].appendChild(imgEl);
  }

  static refreshGrid() {
    let position = 0;

    do {
      position = this.random();
    } while (this.position === position);

    this.position = position;

    const imgEl = document.getElementById("goblin");
    imgEl.hidden = false;
    document
      .querySelector("#wrapper")
      .children[this.position].appendChild(imgEl);
  }
}
