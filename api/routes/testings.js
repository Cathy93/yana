const express = require('express')

const router = express.Router()

const testings = [
    {
        title: 'yana test1'
    },
    {
        title: 'yana test2'
    },
    {
        title: 'yana test3'
    },
    {
        title: 'yana test4'
    },
    {
        title: 'yana test5'
    }
]

router.get('/testings', (req, res) => {
    res.json(testings)
})

module.exports = router
// export default router
