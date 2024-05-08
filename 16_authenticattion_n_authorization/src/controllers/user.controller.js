import * as useService from '../services/user.services.js';
export const getAllUsers = async (req, res) => {
  try {
    const users = await useService.getAllUsers();
    res.json({ message: 'Get all users', data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
