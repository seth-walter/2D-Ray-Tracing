class Square {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.side = side;
        this.boundaries = [];
        this.boundaries.push(new Boundary(x, y, x, y + side));
        this.boundaries.push(new Boundary(x + side, y, x + side, y + side));
        this.boundaries.push(new Boundary(x, y, x + side, y));
        this.boundaries.push(new Boundary(x, y + side, x + side, y + side));
    }

    show() {
        stroke(255);
        for (let i = 0; i < this.boundaries.length; i++) {
            this.boundaries[i].show();
        }
        fill(255);
        square(this.x, this.y, this.side);
    }
}