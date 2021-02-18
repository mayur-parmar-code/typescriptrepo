export class listTemplate {
    constructor(container) {
        this.container = container;
    }
    render(items, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = items.format();
        li.append(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.prepend(li);
        }
    }
}
