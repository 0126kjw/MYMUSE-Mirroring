import axios from '../../../node_modules/axios/index';
//using closure
const API = () => {
	//[To Front] before running server, change port number [.env] in [back]'s file from '3000' to '3001'
	const instance = axios.create({
		//baseURL: 'http://' + window.location.hostname + ':' + '3001' + '/',
		baseURL: 'http://localhost:3001/',
	});

	/**
	 * @param params array[string]
	 * @return object
	 */
	const Get = async (params) => {
		const url = params.join('/');
		try {
			const response = instance.get(url);
			return response;
		} catch (err) {
			//throw new Error("Get request failed")
			return null;
		}
	};

	/**
	 * @param params array[string]
	 * @param data string
	 * @return object
	 */
	const Post = async (params, data) => {
		const url = params.join('/');
		try {
			const response = instance.post(url, data);
			return response;
		} catch (err) {
			//throw new Error("Post request failed")
			return err;
		}
	};

	/**
	 * @param params array[string]
	 * @param data string
	 * @return object
	 */
	const Put = async (params, data) => {
		const url = params.join('/');
		try {
			const response = instance.put(url, data);
			return response;
		} catch (err) {
			//throw new Error("Put request failed")
			return err;
		}
	};

	/**
	 * @param: array[string]
	 * @return object
	 */
	const Delete = async (params) => {
		const url = params.join('/');
		try {
			const response = instance.delete(url);
			return response;
		} catch (err) {
			//throw new Error("Delete request failed")
			return err;
		}
	};

	return {
		Get,
		Post,
		Put,
		Delete,
	};
};

export default API;
