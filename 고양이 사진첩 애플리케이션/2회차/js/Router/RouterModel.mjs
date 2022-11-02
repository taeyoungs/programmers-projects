import { INITAL_PATH } from '../constants.mjs';
import Route from '../Route/index.mjs';

class RouterModel {
  #routes;

  constructor() {
    this.#routes = [new Route(INITAL_PATH)];
  }

  set(route) {
    const idx = this.#routes.indexOf(route);

    if (idx !== -1) {
      this.#routes = this.#routes.slice(0, idx + 1);
      return;
    }

    this.#routes = [...this.#routes, new Route(route)];
  }

  all() {
    return this.#routes;
  }
}

export default RouterModel;
