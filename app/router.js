import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { playersController } from "./controllers/PlayersController.js";

export const router = [
  {
    path: '',
    controller: playersController,
    view: /*html*/``
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]

console.log("router loaded")