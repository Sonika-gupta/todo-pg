const { taskController: controller } = require('../controllers')
const router = require('express').Router()

router.get('/:listId', controller.getAllTasks)
router.get('/:listId/title', controller.getTasksTitles)
router.post('/', controller.createTask)
router.delete('/', controller.deleteTask)
router.put('/', controller.updateTask)
/* router.get('/:id', controller.getTaskById)
*/

module.exports = router
