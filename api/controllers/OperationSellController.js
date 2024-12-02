'user strict'

const {where}= require('sequelize')
const {OperationSell,Vehicle,Client,Seller} = require('../models')
const operationsell = require('../models/operationsell')


class OperationSellController {

    static async OperationSellFindAll(req, res) {

        try {

            const sell = await OperationSell.findAll({ attributes: ['id','date','entry_value','financed_value','total_value'],
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
             })

            if (sell) {
                res.status(200).json(sell);
            } else {
                res.status(404).json('Nenhum produto cadastrado')
            }

        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }


    static async OperationSellRegister(req, res) {
        try {
            const newOperation = await OperationSell.create({
                date:req.body.date,
                clientId: req.body.clientId,
                sellerId: req.body.sellerId,
                vehicleId: req.body.vehicleId,
                entry_value: req.body.entry_value,
                financed_value: req.body.financed_value,
                total_value: req.body.total_value
            });

            if (newOperation) {
                res.status(201).json(newOperation);
            } else {
                res.status(400).json('Falha ao cadastrar a venda');
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

   

    
}

module.exports = OperationSellController;