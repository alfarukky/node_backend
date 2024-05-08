import * as userService from '../services/user.service.js';
const create = async (req, res) => {
  const dto = req.body;
  const user = await userService.create(dto);
  res.json({ message: 'User created', user });
};

const findById = async (req, res) => {
  const { userId } = req.params;
  const user = await userService.findById(userId);
  res.json({ message: 'Success', user });
};

export { create, findById };
