const { v4: uuid4 } = require("uuid"); 

class Order {
    constructor(name, item, status) {
        this.id = uuid4();
        this.name = name;
        this.item = item;
        this.status = status;
    }
}

module.exports = Order;