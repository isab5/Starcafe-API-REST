const Item = require("../models/Item");
const ItemList = require("../models/ItemList");

const list = new ItemList();

list.addItem(new Item ("Café", "R$5,00", "Bebida"));
list.addItem(new Item ("Chá", "R$3,50", "Bebida"));
list.addItem(new Item ("Pão de queijo", "R$6,00", "Salgado assado"));
list.addItem(new Item ("Água sem gás", "R$2,00", "Bebida"));
list.addItem(new Item ("Água com gás", "R$2,50", "Bebida"));
list.addItem(new Item ("Cappuccino", "R$7,00", "Bebida"));
list.addItem(new Item ("Lanche natural", "R$8,00", "Lanche"));
list.addItem(new Item ("Bolo inteiro", "R$25,75", "Doce"));
list.addItem(new Item ("Fatia de bolo", "R$9,90", "Doce"));
list.addItem(new Item ("Empada", "R$10,00", "Salgado Assado"));
list.addItem(new Item ("Coxinha", "R$8,00", "Salgado Frito"));
list.addItem(new Item ("Pão na chapa", "R$5,90", "Lanche"));
list.addItem(new Item ("Misto Quente", "R$10,00", "Lanche"));
list.addItem(new Item ("Café com Leite", "R$6,00", "Bebida"));
list.addItem(new Item ("Chocolate Quente", "R$10,00", "Bebida"));
list.addItem(new Item ("Suco de Laranja", "R$7,00", "Bebida"));
list.addItem(new Item ("Brigadeiro", "R$4,50", "Doce"));
list.addItem(new Item ("Brownie", "R$5,50", "Doce"));

const router = {
    getMenu: (req, res) => {
        try {
            const itens = list.getMenu();
            res.status(200).json(itens);
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar menu!", error});
        }
    }
}

module.exports = router;