import RouterModel from './RouterModel.mjs';
import RouterView from './RouterView.mjs';

class Router {
  #model;
  #view;

  constructor() {
    this.#model = new RouterModel();
    this.#view = new RouterView({
      $target: document.querySelector('.Breadcrumb'),
    });
  }

  navigate(route) {
    this.#model.set(route);
    this.render();
  }

  render() {
    const routes = this.#model.all();
    this.#view.render(routes);
  }
}

export default Router;
