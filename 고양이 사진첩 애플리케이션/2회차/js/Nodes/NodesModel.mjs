import Node from '../Node/index.mjs';

class NodesModel {
  #nodes;

  constructor() {
    this.#nodes = [];
  }

  setNodes(nodes) {
    const newNodes = nodes.map((node) => new Node(node));

    this.#nodes = newNodes;
  }

  getNodes() {
    return this.#nodes;
  }
}

export default NodesModel;
