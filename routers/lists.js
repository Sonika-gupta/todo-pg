const listController = require('../controllers/lists')
const router = require('express').Router()

router.get('/', listController.getAllLists)
/* router.get('/:id', listController.getListById)
router.post('/', listController.createList)
router.put('/', listController.updateList)
router.delete('/', listController.deleteLists) */

module.exports = router
