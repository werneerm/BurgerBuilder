import axios from "axios";

const instance = axios.create({
	baseURL:
		"https://react-myburger-15a94-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
