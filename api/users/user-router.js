const router = require('express').Router();
const Users = require('./user-model');



router.get('/', (req, res, next) => {
    Users.getAll()
        .then(users => {
            res.json(users)
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Users.getById(req.params.id)
        .then(users => {
            res.json(users)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const {name} = req.body
    Users.create({name})
        .then(user => {
            res.json({message: `Welcome ${user.name}`})
        })
        .catch(next)

})





module.exports = router;




































