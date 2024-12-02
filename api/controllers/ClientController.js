'user strict'

const { where } = require('sequelize')
const { Client } = require('../models')


class ClientController {

    static async ClientFindOne(req, res) {

        try {

            const { id } = req.query;

            const client = await Client.findOne({
                where: { id }, attributes: [
                    'id',
                    'cpf',
                    'name',
                    'income',
                    'cell_phone',
                    'home_phone',
                    'state',
                    'city',
                    'neighborhood']
            })

            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json('Cliente não cadastrado')
            }

        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }


    static async ClientRegister(req, res) {

        try {

            const activeclient = await Client.findOne({ where: { cpf: req.body.cpf } })

            if (activeclient) {
                res.status(404).json({ message: "Esse cliente já existe !" })
            } else {
                await Client.create({
                    cpf: req.body.cpf,
                    name: req.body.name,
                    neighborhood: req.body.neighborhood,
                    city: req.body.city,
                    state: req.body.state,
                    home_phone: req.body.home_phone,
                    cell_phone: req.body.cell_phone,
                    income: req.body.income
                    
                })
                res.status(201).json({ message: "Cliente cadastrado com sucesso" })
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }


    static async ClientFindAllRecent(req, res) {
        try {
            const client = await Client.findAll({
                order: [['createdAt', 'DESC']],
                attributes: [
                    'id',
                    'cpf',
                    'name',
                    'income',
                    'cell_phone',
                    'home_phone',
                    'state',
                    'city',
                    'neighborhood',
                ],
            });

            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json('Nenhum cliente encontrado');
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }


    static async ClientFindAllAlphabetical(req, res) {
        try {
            const clients = await Client.findAll({
                order: [['name', 'ASC']],
                attributes: [
                    'id',
                    'cpf',
                    'name',
                    'income',
                    'cell_phone',
                    'home_phone',
                    'state',
                    'city',
                    'neighborhood',
                ],
            });

            if (clients && clients.length > 0) {
                res.status(200).json(clients);
            } else {
                res.status(404).json('Nenhum cliente encontrado');
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }




}

module.exports = ClientController;