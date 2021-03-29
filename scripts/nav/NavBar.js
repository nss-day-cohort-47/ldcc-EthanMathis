import { getLoggedInUser, getAllToppings, useAllToppings } from "../data/apiManager.js"


export const toppingsDropdown = (allToppings) => {
	const dropdown = document.getElementById("toppingsDropdown")
	let options = allToppings.map(singleTopping => {
		return `<option value="${singleTopping.id}">${singleTopping.name}</option>`
	}) 
	dropdown.innerHTML += options
}

export const renderToppings = () => {
	getAllToppings()
	.then(() => {
		const allTheToppings = useAllToppings()
		toppingsDropdown(allTheToppings)
	}) 
}

export const NavBar = () => {
	

	//only show navItems and addTypeButton if user is logged in
	const navItems = getLoggedInUser().id ? `
	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
	<ul class="navbar-nav me-auto mb-2 mb-lg-0">
		<li class="nav-item ms-1">
			<button class="btn btn-info" type="button" id="allSnacks">All Snacks</button>
		</li>
		<li class="nav-item ms-1">
			<select id="toppingsDropdown" class="form-select form-select btn-info" aria-label="Select A Topping">
				<option selected>Select A Topping</option>
				
			</select>
		</li>
		<li class="nav-item ms-1">
			<button class="btn btn-info" type="button" id="logout">Logout</button>
		</li>
	</ul>
	</div>` : ""

	const addTypeButton = getLoggedInUser().id ? `
	<nav class="navbar navbar-light"">
		<div class="container-fluid">
			<button class="btn btn-outline-primary" type="button">Add A Type</button>
		
		</div>
	</nav>` : ""

	return `
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  		<div class="container-fluid">
		  <span class="navbar-brand mb-0 h1">LDCC
		  	<span class="navbar-text">Little Debbie Collector Club</span>
		  </span>
		${navItems}
  		</div>
	</nav>
	${addTypeButton}
	`
}