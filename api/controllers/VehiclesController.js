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

    
}

module.exports = VehicleController;