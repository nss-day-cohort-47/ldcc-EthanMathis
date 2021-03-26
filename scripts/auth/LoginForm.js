export const LoginForm = () => {

	return `
	<form class="row g-3">
		<h2>Login</h2>
		<div class="col-md-6">
			<label for="name" class="form-label">User Name</label>
			<input type="text" class="form-control" id="name" name="name" placeholder="Your Name">
		</div>
		<div class="col-md-6">
			<label for="email" class="form-label">Email Address</label>
			<input type="text" class="form-control" id="email" name="email" placeholder="example@ld.com">
		</div>
		<div class="col-12">
    		<button type="button" class="btn btn-primary" id="login__submit">Sign in</button>
  		</div>
	</form>
	`
}