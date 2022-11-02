class Node {
  #id;
  #name;
  #type;
  #filePath;
  #parent;

  constructor({ id, name, type, filePath, parent }) {
    this.#id = id;
    this.#name = name;
    this.#type = type;
    this.#filePath = filePath;
    this.#parent = parent;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get filePath() {
    return this.#filePath;
  }

  get parent() {
    return this.#parent;
  }
}

export default Node;
