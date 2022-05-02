import axios from "axios";

const API_URI = "/api/users/";

// Register Service
const register = async (userData) => {
  const response = await axios.post(API_URI, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login Service
const login = async (userData) => {
  const response = await axios.post(API_URI + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout Service
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
