import axios from 'axios';

const axiosInstance = () => {
	return axios.create({
		baseURL: 'https://jsonplaceholder.typicode.com/',
	});
};

export const api = {
	getPosts() {
		return axiosInstance().get('/posts');
	},
};
