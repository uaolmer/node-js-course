const jwt = require('jsonwebtoken');
const usersRepo = require('../users/user.db.repository');
const { SECRET_KEY } = require('../../../constants');
const { checkHashPassword, hashPassword } = require('../../utils/hashHelper');

const signToken = async (login, password) => {
    const user = usersRepo.getByProps({login});

    if (!user) {
        return null;
    } else {
        const hashedPassword = await hashPassword(password);
        const comparisonRes = await checkHashPassword(password, hashedPassword);
        if (comparisonRes) {
            const { id, login } = user;
            const token = jwt.sign({ id, login }, SECRET_KEY);
            return token;
        } else
            return null;   
    }
};

module.exports = {
    signToken
};