let express = require ('express');
const OperationBuyController = require('../controllers/OperationBuyController')
const OperationSellController = require('../controllers/OperationSellController')
const OperationOrderController = require('../controllers/OperationOrderController')
const VehicleController = require('../controllers/VehiclesController')
let router = express.Router();

router.get('/',(req,res)=>{
    res.send('Bem vindo a API de José Luiz Rodrigues dos Santos')
})


router.get('/buy/FindAll',OperationBuyController.OperationBuyFindAll)

router.get('/sell/FindAll',OperationSellController.OperationSellFindAll)

router.get('/order/FindAll',OperationOrderController.OperationOrderFindAll)

router.get('/vehicle/FindOne',VehicleController.VehicleFindOne)

module.exports= router;