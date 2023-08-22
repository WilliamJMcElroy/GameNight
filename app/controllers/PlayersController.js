import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

export class playersController {
    constructor() {
        console.log('player controller loaded', AppState.players)
        this.drawPlayers()
    }


    drawPlayers() {
        let content = ''
        AppState.players.forEach(player => {
            content += player.cardTemplate
        })
        document.getElementById('players').innerHTML = content
        console.log('draw success')
    }
}
export class scorePoint {
    constructor() {
        console.log("clicked", Player.name)
    }
}