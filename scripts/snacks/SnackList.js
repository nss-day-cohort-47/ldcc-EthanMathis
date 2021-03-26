import { SnackCard } from "./SnackCard.js";

export const SnackList = (allSnacks) => {
	let snackListHTML = `
		<div class="album py-5 bg-light">
			<div class="container">
				<h3 class="center">The Collection</h3>
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">`;
				//Loop over the array of posts and for each one, invoke the SnackCard component which returns HTML representation
				for (const snackObject of allSnacks) {
					snackListHTML += SnackCard(snackObject)
				}
				snackListHTML += `</div></div></div>`
		return snackListHTML;
}