import axios from "axios";

// PRODUCTS
export async function getAllProducts() {
	try {
		const response = await axios.get(
			"https://k4backend.osuka.dev/products"
		);
		return response.data;
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
		const response = await axios.delete(
			`https://k4backend.osuka.dev/products/${id}`
		);
		return response.data;
	} catch (err) {
		console.error(err);
	}
}

export async function updateProduct(product) {
	try {
		const response = await axios.put(
			`https://k4backend.osuka.dev/products/${product.id}`,
			product
		);
		return response.data;
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
	// FIX URL
	try {
		const response = await axios.get(
			`https://k4backend.osuka.dev/carts/user/${id}`
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
		return response.data;
	} catch (err) {
		console.error(err);
	}
}

export async function getSingleUser(id) {
	try {
		const response = await axios.get(
			`https://k4backend.osuka.dev/users/${id}`
		);
		return response.data;
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
		return response.data;
	} catch (err) {
		console.error(err);
	}
}

export async function updateUser(id, userData) {
	try {
		const response = await axios.put(
			`https://k4backend.osuka.dev/users/${id}`,
			userData
		);
		return response.data;
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
		return response.data;
	} catch (err) {
		console.error(err);
	}
}
