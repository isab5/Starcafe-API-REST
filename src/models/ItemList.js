class ItemList {
    constructor() {
        this.menu = [];
    }
    addItem(item) {
        this.menu.push(item);
    }
    getMenu() {
        return this.menu;
    }
}

module.exports = ItemList;