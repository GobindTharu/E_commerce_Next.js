import jwt from 'jsonwebtoken';

import UserTable from "../user/user.model";

export const isAdmin = async (req, res, next) => {
  // extract token from req.headers
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized.' });
  }

  // extract payload from token by decryption
  let payload = null;

  try {
    const secretKey = 'qwerty12345';

    payload = jwt.verify(token, secretKey);
  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized.' });
  }

  // find user using email from payload
  const user = await UserTable.findOne({ email: payload.email });

  if (!user) {
    return res.status(401).send({ message: 'Unauthorized.' });
  }

  if (user.role !== 'admin') {
    return res.status(401).send({ message: 'Unauthorized.' });
  }

  req.loggedInUserId = user._id;

  next();
};
