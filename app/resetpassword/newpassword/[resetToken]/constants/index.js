const HEADING = "Reset Password";

const SUBTEXT = "Please enter your email and a link will be sent to you";

const PASSWORD = [
	{
		label: "New Password",
		placeholder: "Enter password",
		type: "password",
		name: "password",
		requirements: ` • Contains at least 8 characters
						• Contains upper case letters (A-Z)
						• Contains lower case letters (a-z)
						• Contains at least a number
						• Contains at least a special character`,
	},
	{
		label: "Confirm New Password",
		placeholder: "Re-enter Password",
		type: "password",
		name: "confirm_password",
		requirements: "Password must match previous field",
	},
];

const BUTTON = { text: "Change Password", type: "submit" };

export { HEADING, SUBTEXT, PASSWORD, BUTTON };
