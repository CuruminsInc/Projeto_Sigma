'user strict'

const { where } = require('sequelize')
const { Seller } = require('../models')


class SellerController {

    static async SellerFindOne(req, res) {

        try {

            const { id,password } = req.query;

            const seller = await Seller.findOne({
                where: { id,password }, attributes: ['username']
            })

            if (seller) {
                res.status(200).json(seller);
            } else {
                res.status(404).json('Vendendor não cadastrado')
            }

        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }


    static async SellerRegister(req, res) {

        try {

            const activeseller = await Seller.findOne({ where: { username: req.body.username } })

            if (activeseller) {
                res.status(404).json({ message: "Esse vendedor já existe !" })
            } else {
                await Seller.create({
                    username: req.body.username,
                    password: req.body.password,
                })
                res.status(201).json({ message: "Vendedor cadastrado com sucesso" })
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }


}

module.exports = SellerController;