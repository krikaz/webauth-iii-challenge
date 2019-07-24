const router = require('express').Router();

const restricted = require('../auth/restricted-middleware');
const checkDept = require('../auth/check-dept-middleware');
const Users = require('./users-model.js');

router.get('/', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => res.send(err));
});

module.exports = router;
