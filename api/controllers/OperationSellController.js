'user strict'

const {where}= require('sequelize')
const {OperationSell,Vehicle,Client,Seller} = require('../models')
const operationsell = require('../models/operationsell')


class OperationSellController {

    /*static async ProdutoFindOne(req, res) {

        try {

            const { email, password } = req.query;

            const user = await Produto.findOne({ where: { email, password }, attributes: ['username','email'] })

            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json('Usuário não cadastrado')
            }


        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }


    }*/

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

   

    
}

module.exports = OperationSellController;