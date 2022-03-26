import axios from "axios";

// PRODUCTS
export async function getAllProducts() {
	try {
		const response = await axios.get(
			"https://k4backend.osuka.dev/products"
		);
		console.log("getAllProducts: ", response.data);
	} catch (error) {
		console.error(error);
	}
}

export async function getSingleProduct(id) {
	try {
		const response = await axios.get(
			`https://k4backend.osuka.dev/products/${id}`
		);
		console.log("getSingleProduct: ", response.data);
	} catch (error) {
		console.error(error);
	}
}

export async function deleteProduct(id) {
	try {
		await axios.delete(`https://k4backend.osuka.dev/products/${id}`);
		console.log("Product deleted!");
	} catch (err) {
		console.error(err);
	}
}

export async function updateProduct(id, productData) {
	try {
		const response = await axios.put(
			`https://k4backend.osuka.dev/products/${id}`,
			productData
		);
		console.log("updateProduct: ", response.data);
	} catch (err) {
		console.error(err);
	}
}

// CARTS
export async function getAllCarts() {
	try {
		const response = await axios.get("https://k4backend.osuka.dev/carts");
		return response.data;
	} catch (err) {
		console.error(err);
	}
}

export async function getUserCart(id) {
	try {
		const response = await axios.get(
			`https://k4backend.osuka.dev/carts/${id}`
		);
		console.log("getUserCart: ", response.data);
	} catch (err) {
		console.error(err);
	}
}

// USERS
export async function getAllUsers() {
	try {
		const response = await axios.get("https://k4backend.osuka.dev/users");
		console.log("getAllUsers: ", response.data);
	} catch (err) {
		console.error(err);
	}
}

export async function getSingleUser(id) {
	try {
		const response = await axios.get(
			`https://k4backend.osuka.dev/users/${id}`
		);
		console.log("getSingleUser: ", response.data);
	} catch (err) {
		console.error(err);
	}
}

export async function addNewUser(userData) {
	try {
		const response = await axios.post(
			"https://k4backend.osuka.dev/users",
			userData
		);
		console.log("addNewUser: ", response.data);
	} catch (err) {
		console.error(err);
	}
}

// LOGIN
export async function login(credentials) {
	try {
		const response = await axios.post(
			"https://k4backend.osuka.dev/auth/login",
			credentials
		);
		console.log("login: ", response.data);
	} catch (err) {
		console.error(err);
	}
}
