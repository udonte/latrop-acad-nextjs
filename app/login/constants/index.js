const HEADING = "Log In";

const SIGNUP = {
	text: "Sign Up",
	link: "/signup",
};

const SUBTEXT = "Enter your details to continue your learning path";

const FORM = [
	{
		label: "Email",
		placeholder: "Your email",
		type: "email",
		name: "email"
	},
	{
		label: "Password",
		placeholder: "Your password",
		type: "password",
		name: "password"
	},
];

const BUTTON = { text: "Log In", type: "submit" };

const RESETPASSWORD = {
	text: "Forgot your password? ",
	span: "Reset Password",
	link: "/resetpassword",
};

export { HEADING, SIGNUP, SUBTEXT, FORM, BUTTON, RESETPASSWORD };
