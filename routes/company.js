const express =  require('express')
const router = express.Router();
const CompanyController = require('../controllers/CompanyController')

router.get('/',CompanyController.index)
router.post('/show/:companyID', CompanyController.show);
router.post('/create',CompanyController.create)
router.post('/update/:companyID', CompanyController.update);
router.post('/delete/:companyID', CompanyController.deleteComp);

module.exports = router;