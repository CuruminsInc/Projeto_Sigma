'user strict'

const {where}= require('sequelize')
const {Vehicle} = require('../models')
const vehicle = require('../models/vehicle')


class VehicleController {

    static async VehicleFindOne(req, res) {

        try {

            const { id } = req.query;

            const vehicle = await Vehicle.findOne({ where: { id }, attributes: ['id','chassis_number','brand','model','manufacture_year','model_year','color','value'] })

            if (vehicle) {
                res.status(200).json(vehicle);
            } else {
                res.status(404).json('Veículo não cadastrado')
            }


        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }

    }


    static async VehicleFindAllRecent(req, res) {
        try {
            const vehicle = await Vehicle.findAll({
                order: [['createdAt', 'DESC']],
                attributes: [
                    'id',
                    'chassis_number',
                    'brand',
                    'plate',
                    'model',
                    'manufacture_year',
                    'model_year',
                    'color',
                    'value'
                ],
            });

            if (vehicle) {
                res.status(200).json(vehicle);
            } else {
                res.status(404).json('Nenhum veículo encontrado');
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

    static async VehicleRegister(req, res) {

        try {

            const activevehicle = await Vehicle.findOne({ where: { plate: req.body.plate } })

            if (activevehicle) {
                res.status(404).json({ message: "Esse veículo já existe !" })
            } else {
                await Vehicle.create({
                    chassis_number: req.body.chassis_number,
                    plate: req.body.plate,
                    brand: req.body.brand,
                    model: req.body.model,
                    manufacture_year: req.body.manufacture_year,
                    model_year: req.body.model_year,
                    color: req.body.color,
                    value: req.body.value
                    
                })
                res.status(201).json({ message: "Veículo cadastrado com sucesso" })
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

    
}

module.exports = VehicleController;