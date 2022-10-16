import { BASE_URL, TYPES, FILE_BASE_PATH } from '../constants.mjs';

class AlbumView {
  constructor({ $target, appendBreadcrumb }) {
    this.$target = $target;
    this.$target.addEventListener('click', (event) =>
      this.handleClickNode(event, appendBreadcrumb)
    );
  }

  createElement(props) {
    const { id, name, type, filePath, parent } = props;

    if (type === TYPES.DIRECTORY) {
      const $node = document.createElement('div');
      $node.classList.add('Node');

      const $directoryImage = document.createElement('img');
      $directoryImage.src = './assets/directory.png';

      const $name = document.createElement('div');
      $name.textContent = name;

      $node.dataset.type = TYPES.DIRECTORY;
      $node.dataset.id = id;

      $node.append($directoryImage, $name);
      return $node;
    }

    if (type === TYPES.FILE) {
      const $node = document.createElement('div');
      $node.classList.add('Node');

      const $fileImage = document.createElement('img');
      $fileImage.src = './assets/file.png';

      const $name = document.createElement('div');
      $name.textContent = name;

      $node.append($fileImage, $name);
      return $node;
    }
  }

  async createElements(id) {
    const $loading = document.querySelector('.Loading');
    const url = id ? BASE_URL + id : BASE_URL;

    try {
      $loading.classList.remove('hidden');
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      return result.map((data) => this.createElement(data));
    } catch (error) {
      this.$target.innerHTML =
        '<h2>에러가 발생했습니다. 잠시 후 다시 시도해주세요.</h2';
      throw error;
    } finally {
      $loading.classList.add('hidden');
    }
  }

  handleClickNode(event, appendBreadcrumb) {
    const { target } = event;
    const {
      dataset: { type, id },
    } = target;

    if (type === TYPES.DIRECTORY) {
      appendBreadcrumb(id);

      this.render(id);
      return;
    }

    if (type === TYPES.FILE) {
      console.log('FILE !');
    }
  }

  async render(id) {
    const $elements = await this.createElements(id);

    this.$target.replaceChildren();
    this.$target.append(...$elements);
  }
}

export default AlbumView;
