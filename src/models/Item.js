const { v4: uuid4 } = require("uuid"); 

class Item {
    constructor(name, price, type) {
        this.id = uuid4();
        this.name = name;
        this.price = price;
        this.type = type;
    }
}

module.exports = Item;