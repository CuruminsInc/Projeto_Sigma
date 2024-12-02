let express = require ('express');
const OperationBuyController = require('../controllers/OperationBuyController')
const OperationSellController = require('../controllers/OperationSellController')
const OperationOrderController = require('../controllers/OperationOrderController')
const VehicleController = require('../controllers/VehiclesController')
const ClientController = require('../controllers/ClientController')
const SellerController = require('../controllers/SellerController')

let router = express.Router();

router.get('/',(req,res)=>{
    res.send('Bem vindo a API de José Luiz Rodrigues dos Santos')
})


router.get('/buy/FindAll',OperationBuyController.OperationBuyFindAll)

router.post('/buy/Register',OperationBuyController.OperationBuyRegister)

router.get('/sell/FindAll',OperationSellController.OperationSellFindAll)

router.post('/sell/Register',OperationSellController.OperationSellRegister)

router.get('/order/FindAll',OperationOrderController.OperationOrderFindAll)

router.post('/order/Register',OperationOrderController.OperationOrderRegister)

router.get('/vehicle/FindOne',VehicleController.VehicleFindOne)

router.get('/vehicle/FindAll',VehicleController.VehicleFindAllRecent)

router.post('/vehicle/Register',VehicleController.VehicleRegister)

router.get('/client/FindOne',ClientController.ClientFindOne)

router.get('/client/FindAll',ClientController.ClientFindAllAlphabetical)

router.get('/client/FindAllRecent',ClientController.ClientFindAllRecent)

router.post('/client/Register',ClientController.ClientRegister)

router.get('/seller/FindOne',SellerController.SellerFindOne)

router.post('/seller/Register',SellerController.SellerRegister)

module.exports= router;