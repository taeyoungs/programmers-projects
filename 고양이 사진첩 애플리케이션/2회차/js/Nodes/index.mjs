import NodesModel from './NodesModel.mjs';
import NodesView from './NodesView.mjs';

class Nodes {
  #model;
  #view;

  constructor() {
    this.#model = new NodesModel();
    this.#view = new NodesView({
      $target: document.querySelector('.Nodes'),
    });
  }

  setState(state) {
    this.#model.setNodes(state);
    this.render();
  }

  render() {
    const nodes = this.#model.getNodes();
    this.#view.render(nodes);
  }
}

export default Nodes;
