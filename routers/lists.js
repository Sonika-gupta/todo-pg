const listController = require('../controllers/lists')
const router = require('express').Router()

router.get('/', listController.getAllLists)
router.post('/', listController.createList)
router.delete('/', listController.deleteLists)
router.put('/', listController.updateList)
router.get('/:id', listController.getListById)

module.exports = router
