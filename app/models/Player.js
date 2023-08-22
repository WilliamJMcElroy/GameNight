import { scorePoint } from "../controllers/PlayersController.js";

export class Player {
    constructor(name) {
        this.name = name;
        // The score is defaulted to start at 0
        this.score = 0;
        console.log("models loaded", name)
    }


    get cardTemplate() {
        return `
    <div class="card">
        <div class="card-body">
            ${this.name} - ${this.score}
        </div>
        <button class="btn" onclick="${scorePoint}" >Score Point</button>
    </div>`
    }
}