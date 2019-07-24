module.exports = dept => {
	return function(req, res, next) {
		if (req.decodedToken.depts && req.decodedToken.depts.includes(dept)) {
			next();
		} else {
			res.status(403).json({ you: 'HAVE NO POWER HERE!' });
		}
	};
};
