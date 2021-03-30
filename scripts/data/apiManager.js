const apiURL = "http://localhost:8088";

//// user functions
let loggedInUser = {}

export const getLoggedInUser = () => {
	return { ...loggedInUser };
}

export const logoutUser = () => {
	loggedInUser = {}
}

export const setLoggedInUser = (userObj) => {
	loggedInUser = userObj;
}

export const loginUser = (userObj) => {
	return fetch(`${apiURL}/users?name=${userObj.name}&email=${userObj.email}`)
		.then(response => response.json())
		.then(parsedUser => {
			//is there a user?
			if (parsedUser.length > 0) {
				setLoggedInUser(parsedUser[0]);
				return getLoggedInUser();
			} else {
				//no user
				return false;
			}
		})
}

export const registerUser = (userObj) => {
	return fetch(`${apiURL}/users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(userObj)
	})
		.then(response => response.json())
		.then(parsedUser => {
			setLoggedInUser(parsedUser);
			return getLoggedInUser();
		})
}


///// snack functions

let snackCollection = [];

export const useSnackCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //the spread operator makes quick work
  const snackCollectionCopy = [...snackCollection]
  return snackCollectionCopy;
}

export const getSnacks = () => {
	return fetch(`${apiURL}/snacks`)
		.then(response => response.json())
		.then(parsedResponse => {
			snackCollection = parsedResponse
			return parsedResponse;
		})
}

export const getSingleSnack = (snackId) => {
	return fetch(`${apiURL}/snacks/${snackId}?_expand=type&_expand=inFlavor&_expand=season&_expand=shape&`)
	.then(response => response.json())
	.then(parsedResponse => {
		return getSingleTopping(snackId).then((toppings) => {
			parsedResponse.toppings = toppings.map(snackTopping => snackTopping.topping);
			console.log("snackObject", parsedResponse)
			return parsedResponse
		})
	})
}

export const getSingleTopping = (snackId) => {
	return fetch (`${apiURL}/snackToppings?snackId=${snackId}&_expand=topping`)
	.then(response => response.json())
}

export const getSnackToppings = (toppingId) => {
	return fetch (`${apiURL}/snackToppings?toppingId=${toppingId}&_expand=snack`)
	.then(response => response.json())
	.then(parsedResponse => {
		return parsedResponse
	})
}



let allToppings = []

export const useAllToppings = () => {
	const toppingsCopy = [...allToppings]
	return toppingsCopy
}

export const getAllToppings = () => {
	return fetch(`${apiURL}/toppings`)
	.then(response => response.json())
	.then((parsedResponse) => {
		allToppings = parsedResponse;
		return parsedResponse
	})
}


export const postType = (typeObj) => {
	return fetch(`${apiURL}/types`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(typeObj)
	})
		.then(response => response.json())
}
