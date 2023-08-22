
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
        <button class="btn" onclick="app.playersController.scorePoint('${this.name}')" >Score Point</button>
    </div>`
    }
}