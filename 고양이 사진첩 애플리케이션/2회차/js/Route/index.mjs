class Route {
  #route;

  constructor(route) {
    this.#route = route;
  }

  getRoute() {
    return this.#route;
  }
}

export default Route;
