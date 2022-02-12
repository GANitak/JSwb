const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signUpModels')

router.post('/signup', (req, res) => {
	const signUpUser = new signUpTemplateCopy({
		fullName:request.body.fullName,
		username:request.body.username,
		email:request.body.email,
		password:request.body.password,
	})
	signUpUser.save()
	.then(data => {
		res.json.(data)
	})
	.catch(error => {
		res.json.(error)
	})
})

module.exports = router