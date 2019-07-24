const express = require('express');
const server = express();

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');

server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
	res.send("It's working!");
});

module.exports = server;

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
