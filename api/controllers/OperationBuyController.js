'user strict'

const { OperationBuy, Vehicle, Client, Seller } = require('../models');

class OperationBuyController {
    static async OperationBuyFindAll(req, res) {
        try {
            const buy = await OperationBuy.findAll({
                attributes: ['id', 'date', 'value'],
                include: [
                    {
                        model: Vehicle,
                        as: 'vehicle',
                        attributes: ['id', 'chassis_number', 'brand', 'model', 'manufacture_year', 'model_year', 'color', 'value'],
                    },
                    {
                        model: Client,
                        as: 'client',
                        attributes: ['name'],
                    },

                    {
                        model: Seller,
                        as: 'seller',
                        attributes: ['username'],
                    },
                ],
            });

            if (buy && buy.length > 0) {
                res.status(200).json(buy);
            } else {
                res.status(404).json('Nenhuma compra cadastrada');
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }


    static async OperationBuyRegister(req, res) {
        try {
            const newOperation = await OperationBuy.create({
                date:req.body.date,
                clientId: req.body.clientId,
                sellerId: req.body.sellerId,
                vehicleId: req.body.vehicleId,
                value: req.body.value
            });

            if (newOperation) {
                res.status(201).json(newOperation);
            } else {
                res.status(400).json('Falha ao cadastrar a compra');
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }
}

module.exports = OperationBuyController;
