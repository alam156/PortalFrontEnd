import axios from "axios";
import Cookies from "js-cookie";

const LogoutPage = () => {
    axios.defaults.headers.common['Authorization'] = '';
    Cookies.remove('token');
    window.location.href = '/login';
};

export default LogoutPage;