const taskController = require('../controllers/tasks')
const router = require('express').Router()

router.get('/:listId', taskController.getAllTasks)
router.get('/:listId/title', taskController.getTasksTitles)
router.post('/', taskController.createTask)
/* router.get('/:id', taskController.getTaskById)
router.put('/', taskController.updateTask)
router.delete('/', taskController.deleteTasks) */

module.exports = router
