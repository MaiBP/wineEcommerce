import axios from "axios";

const signup = (email, password) => {
  return axios
    .post("https://vinoteca-henry.herokuapp.com/auth/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((err) => {
      if (err.response.data.verifyError) {
        return alert("Porfavor verifica tu cuenta");
      }
    });
};

const register = (name, password, email, role) => {
  return axios
    .post("https://vinoteca-henry.herokuapp.com/users/", {
      name,
      email,
      password,
      role,
    })
    .then((response) => {
      if (response.data.token) {
        // localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data;
    });
};

const verifyAccount = (token) => {
  return axios
    .get(`https://vinoteca-henry.herokuapp.com/auth/verify/${token}`)
    .then(() => {
      localStorage.setItem("user", JSON.stringify(token));
    })
    .catch((err) => {
      console.log(err);
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("ShoppingCar");
  localStorage.removeItem("favorites");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  register,
  logout,
  getCurrentUser,
  verifyAccount,
};

export default authService;
