
let car1 = new Object();
car1.color = "red";
car1.maxSpeed = 200;
car1.driver = new Object();
car1.driver.name = "Опар Юлія";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;

let car2 = {
    color: "blue",
    maxSpeed: 180,
    driver: {
        name: "Опар Юлія",
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2
};

car1.drive = function() {
    console.log("I am not driving at night");
};
console.log("--- Виклик методу drive для car1 ---");
car1.drive();

car2.drive = function() {
    console.log("I can drive anytime");
};
console.log("--- Виклик методу drive для car2 ---");
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned"); 
        } else {
            console.log(`Driver ${this.driver.name} ${this.driver.nightDriving ? "drives at night" : "does not drive at night"} and has ${this.driver.experience} years of experience`); 
        }
    };
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

let truck1 = new Truck("white", 5000, 80, "Volvo", "FH16");
truck1.AssignDriver("Опар Юлія", true, 10); 

let truck2 = new Truck("black", 4000, 90, "MAN", "TGX");
truck2.AssignDriver("Опар Юлія", false, 5); 

console.log("--- Виклик методу trip для Truck об'єктів ---");
truck1.trip();
truck2.trip();



class Square {
    constructor(a) {
        this.a = a;
    }
    static help() {
        console.log("Квадрат - це правильний чотирикутник, у якого всі сторони і кути рівні.");
    }
    length() {
        console.log("Сума довжин сторін (периметр): " + (4 * this.a));
    }
    square() {
        console.log("Площа: " + (this.a * this.a)); 
    }
    info() {
        console.log(`--- Інформація про фігуру: Квадрат ---`); 
        console.log(`Довжини сторін: всі по ${this.a}`); 
        console.log(`Кути: всі по 90 градусів`); 
        this.length(); 
        this.square(); 
    }
}


class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
    static help() {
        console.log("Прямокутник - це чотирикутник, у якого всі кути прямі, а протилежні сторони паралельні та рівні.");
    }
    length() {
        console.log("Сума довжин сторін (периметр): " + (2 * this.a + 2 * this.b));
    }
    square() {
        console.log("Площа: " + (this.a * this.b));
    }
    info() {
        console.log(`--- Інформація про фігуру: Прямокутник ---`);
        console.log(`Довжини сторін: a = ${this.a}, b = ${this.b}`);
        console.log(`Кути: всі по 90 градусів`);
        this.length();
        this.square();
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(); 
        this.a = a; 
        this.alpha = alpha; 
        this.beta = beta; 
    }
    static help() {
        console.log("Ромб - це паралелограм, у якого всі сторони рівні, а протилежні кути рівні.");
    }
    length() {
        console.log("Сума довжин сторін (периметр): " + (4 * this.a));
    }
    square() {
        let rad = this.alpha * (Math.PI / 180); 
        console.log("Площа: " + (this.a * this.a * Math.sin(rad)).toFixed(2));
    }
    info() {
        console.log(`--- Інформація про фігуру: Ромб ---`);
        console.log(`Довжини сторін: всі по ${this.a}`);
        console.log(`Кути: тупий = ${this.alpha}, гострий = ${this.beta}`);
        this.length();
        this.square();
    }

    get a() { return this._a; }
    set a(value) { this._a = value; }
    
    get alpha() { return this._alpha; }
    set alpha(value) { this._alpha = value; }
    
    get beta() { return this._beta; }
    set beta(value) { this._beta = value; }
}


class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }
    static help() {
        console.log("Паралелограм - це чотирикутник, у якого протилежні сторони попарно паралельні та рівні.");
    }
    length() {
        console.log("Сума довжин сторін (периметр): " + (2 * this.a + 2 * this.b));
    }
    square() {
        let rad = this.alpha * (Math.PI / 180);
        console.log("Площа: " + (this.a * this.b * Math.sin(rad)).toFixed(2));
    }
    info() {
        console.log(`--- Інформація про фігуру: Паралелограм ---`);
        console.log(`Довжини сторін: a = ${this.a}, b = ${this.b}`);
        console.log(`Кути: тупий = ${this.alpha}, гострий = ${this.beta}`);
        this.length();
        this.square();
    }
}

console.log("--- Виклик методів help ---");
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

console.log("\n--- Виклик методів info для об'єктів ---");
let mySquare = new Square(5);
mySquare.info();

let myRectangle = new Rectangle(4, 6);
myRectangle.info();

let myRhombus = new Rhombus(5, 120, 60);
myRhombus.info();

let myParallelogram = new Parallelogram(4, 6, 120, 60);
myParallelogram.info();


function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c }; 
}

console.log("\n--- Робота функції Triangular ---");
console.log(Triangular());
console.log(Triangular(6, 8, 10));
console.log(Triangular(10, 20, 30));

function PiMultiplier(num) {
    return function() {
        return Math.PI * num;
    };
}

let multiplyBy2 = PiMultiplier(2);
let multiplyBy2_3 = PiMultiplier(2 / 3); 
let divideBy2 = PiMultiplier(0.5); 

console.log("\n--- Робота функції PiMultiplier ---");
console.log("Math.PI * 2 =", multiplyBy2());
console.log("Math.PI * 2/3 =", multiplyBy2_3());
console.log("Math.PI / 2 =", divideBy2());

function Painter(color) {
    return function(obj) {
        if (obj && obj.type) {
            console.log(`Color: ${color}, Type: ${obj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

let obj1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
let obj2 = { type: "Truck", "avg speed": 90, "load capacity": 2400 };
let obj3 = { maxSpeed: 180, color: "purple", isCar: true };

console.log("\n--- Робота функцій Painter ---");
PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3); 
