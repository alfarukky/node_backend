import * as authService from '../services/auth.services.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.json(result);
  } catch (err) {
    res.status(err.status || 500);
    res.json({ mesage: err.message });
  }
};
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const result = await authService.register(name, email, password, role);
    res.json(result);
  } catch (err) {
    res.status(err.status || 500);
    res.json({ mesage: err.message });
  }
};
