import { BASE_API_URL } from './constants.mjs';
import Nodes from './Nodes/index.mjs';
import Router from './Router/index.mjs';

class App {
  constructor() {
    this.router = new Router();
    this.nodes = new Nodes();
  }

  render() {
    this.router.render();
  }

  async init() {
    const list = await fetch(BASE_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());

    this.nodes.setState(list);

    this.render();
  }
}

const app = new App();
app.init();
