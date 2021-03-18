const listController = require('../controllers/lists')
const router = require('express').Router()

router.get('/', listController.getAllLists)
router.post('/', listController.createList)
router.delete('/', listController.deleteLists)
/* router.get('/:id', listController.getListById)
router.put('/', listController.updateList)
*/

module.exports = router
