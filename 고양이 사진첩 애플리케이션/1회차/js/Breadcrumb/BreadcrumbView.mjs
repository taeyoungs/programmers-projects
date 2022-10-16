class BreadcrumbView {
  constructor({ $target, breadcumb }) {
    this.$target = $target;
    this.paths = breadcumb;
  }

  createPathElement(path) {
    const $path = document.createElement('div');
    $path.textContent = path;
    return $path;
  }

  createPathElements() {
    const $paths = this.paths.map((path) => this.createPathElement(path));

    return $paths;
  }

  render() {
    const $paths = this.createPathElements();

    this.$target.replaceChildren();
    this.$target.append(...$paths);
  }
}

export default BreadcrumbView;
