import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { playersController } from "./controllers/PlayersController.js";
import { scorePoint } from "./controllers/PlayersController.js";

export const router = [
  {
    path: '',
    controller: playersController, scorePoint,
    view: /*html*/``
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]

console.log("router loaded")