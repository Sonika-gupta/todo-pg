const { listController: controller } = require('../controllers')
const router = require('express').Router()

router.get('/', controller.getAllLists)
router.post('/', controller.createList)
router.delete('/', controller.deleteLists)
router.put('/', controller.updateList)
router.get('/:id', controller.getListById)
router.delete('/clear', controller.clearCompleted)

module.exports = router
