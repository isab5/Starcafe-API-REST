const Order = require("../models/Order");
const OrderList = require("../models/OrderList");

const list = new OrderList();

list.addOrder(new Order("Pedro", "Café, Pão na Chapa e Brownie", "Preparando"));
list.addOrder(new Order("Breno", "Chá e Lanche Natural", "Em espera"));
list.addOrder(new Order("Ana Beatriz", "Água com gás e coxinha", "Pronto"));

const router = {
    addOrder: (req, res) => {
        try {
            const { name, item, status } = req.body;
            if (!name || !item || !status) {
                throw new Error("Preencha todos os campos!");
            }
            const order = new Order (name, item, status);
            res.status(200).json({ message: "Pedido feito com sucesso!", order});
        } catch (error) {
            res.status(400).json({ message: "Erro ao adicionar o pedido", error});
        }
    }
}