var { auth, db } = require('../admin');

module.exports = async (req, res, next) => {
	var token;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
		token = req.headers.authorization.split('Bearer ')[1];
	} else {
		return res.status(403).json({ error: 'Unauthorized' });
	}
	try {
		const decodedToken = await auth.verifyIdToken(token)
		req.user = decodedToken;
		next()
	} catch (err) {
		res.status(403).json(err);
	}
};