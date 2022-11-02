import { IMAGE_PATH, NODE_TYPE } from '../constants.mjs';

class NodesView {
  constructor({ $target }) {
    this.$target = $target;
  }

  createNode(node) {
    const $node = document.createElement('div');
    $node.classList.add('Node');

    const $img = document.createElement('img');
    $img.src = node.type === NODE_TYPE.FILE ? IMAGE_PATH.FILE : IMAGE_PATH.DIRECTORY;
    const $name = document.createElement('div');
    $name.textContent = node.name;

    $node.append($img, $name);

    return $node;
  }

  createPrevButton() {
    const $node = document.createElement('div');
    $node.classList.add('Node');

    const $img = document.createElement('img');
    $img.src = IMAGE_PATH.PREV;

    $node.append($img);

    return $node;
  }

  render(nodes) {
    const $nodes = nodes.map((node) => this.createNode(node));
    const $prev = this.createPrevButton();

    this.$target.replaceChildren();
    this.$target.append($prev, ...$nodes);
  }
}

export default NodesView;
