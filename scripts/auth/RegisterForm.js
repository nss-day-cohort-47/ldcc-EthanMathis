export const RegisterForm = () => {

	return `
	<form class="row g-3">
		<h2>Register</h2>
		<div class="col-md-6">
			<label for="registerName" class="form-label">User Name</label>
			<input type="text" class="form-control" id="registerName" name="registerName" placeholder="Your Name">
		</div>
		<div class="col-md-6">
			<label for="registerEmail" class="form-label">Email Address</label>
			<input type="text" class="form-control" id="registerEmail" name="registerEmail" placeholder="example@ld.com">
		</div>
		<div class="col-12">
    		<button type="button" class="btn btn-primary" id="register__submit">Register</button>
  		</div>
	</form>
	`
}
