import BreadcrumbView from './Breadcumb/BreadcrumbView.mjs';
import AlbumView from './Album/AlbumView.mjs';
import { ROOT_PATH } from './constants.mjs';

class App {
  constructor() {
    this.breadcrumb = [ROOT_PATH];

    this.intialize();
  }

  appendBreadcrumb(path) {
    this.setState([...this.breadcrumb, path]);
  }

  setState(newBreadcrumb) {
    this.breadcrumb = newBreadcrumb;

    this.render();
  }

  async intialize() {
    await this.render();
  }

  async render() {
    const $nav = document.querySelector('nav.Breadcrumb');
    this.breadcrumbView = new BreadcrumbView({
      $target: $nav,
      breadcumb: this.breadcrumb,
    });
    this.breadcrumbView.render();

    const $nodes = document.querySelector('.Nodes');
    this.albumView = new AlbumView({
      $target: $nodes,
      appendBreadcrumb: this.appendBreadcrumb.bind(this),
    });
    await this.albumView.render();
  }
}

new App();
