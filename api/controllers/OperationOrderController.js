'user strict'

const {where}= require('sequelize')
const {OperationOrder, Seller, Client, Manufacturer} = require('../models')
const operationorder = require('../models/operationorder')


class OperationOrderController {

    static async OperationOrderFindAll(req, res) {

        try {

            const order = await OperationOrder.findAll({ attributes: ['id','date','model','year','color','accessories','value'],
                include: [
                    {
                        model: Manufacturer,
                        as: 'manufacturer',
                        attributes: ['id', 'cnpj', 'company_name', 'brand', 'contact', 'business_phone','cell_phone'],
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

            if (order) {
                res.status(200).json(order);
            } else {
                res.status(404).json('Nenhum produto cadastrado')
            }

        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

   

    
}

module.exports = OperationOrderController;