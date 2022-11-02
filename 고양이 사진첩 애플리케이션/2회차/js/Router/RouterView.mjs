class RouterView {
  constructor({ $target }) {
    this.$target = $target;
  }

  createRouteElement(route) {
    const $route = document.createElement('div');
    $route.textContent = route.getRoute();

    return $route;
  }

  render(routes) {
    const $routes = routes.map((route) => this.createRouteElement(route));

    this.$target.replaceChildren();
    this.$target.append(...$routes);
  }
}

export default RouterView;
