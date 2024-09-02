const HEADING = "Sign Up";

const LOGIN = {
	text: "Log In",
	link: "/login",
};

const SUBTEXT = "Enter your details to continue your learning path";

const FORM = [
	{
		label: "First Name",
		placeholder: "John",
		type: "text",
		name: "first_name",
		tag: "",
	},
	{
		label: "Last Name",
		placeholder: "Doe",
		type: "text",
		name: "last_name",
		tag: "",
	},
	{
		label: "Preferred Name",
		placeholder: "Doe",
		type: "text",
		name: "preferred_name",
		tag: "Optional",
	},
	{
		label: "Email Address",
		placeholder: "Your email",
		type: "email",
		name: "email",
		tag: "",
	},
];

const PHONE = {
	label: "Phone Number",
	placeholder: "Phone Number",
	type: "TEL",
	name: "phone_number",
};
const GENDER = {
	label: "Gender",
	placeholder: "Select Gender",
	name: "gender",
	options: ["Male", "Female", "Decline To Answer"],
};

const COUNTRY = {
	label: "Country",
	placeholder: "Select Country",
	name: "country",
	options: [],
};

const STATE = {
	label: "State/City Of Residence",
	placeholder: "Select State",
	name: "state",
	options: [],
};

const PASSWORD = [
	{
		label: "Password",
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
		label: "Confirm Password",
		placeholder: "Re-enter Password",
		type: "password",
		name: "confirm_password",
		requirements: "Password must match previous field",
	},
];

const BUTTON = { text: "Sign Up", type: "submit" };

const CHECKBOX = {
	type: "checkbox",
	text1: "By clicking continue, I agree to ",
	termsofuse: "Terms of Use ",
	text2: "and acknowledge that I have read the ",
	privacypolicy: "Privacy Policy",
	period: ".",
};

const ARROW = "/assets/dropdownarrow.svg";

const PRIVACYPOLICY = [
	{
		informationUsage: {
		  title: "Information Usage",
		  content: [
			"We use the information we collect for various purposes, including:",
			"To provide and maintain the Service",
			"To troubleshoot and improve the Service",
			"To personalize your experience",
			"To send you important information about the Service, including updates, security alerts, and support messages",
			"To comply with legal obligations",
		  ],
		},
		disclosure: {
		  title: "Disclosure of Your Information",
		  content: [
			"We may disclose your information to third parties in the following circumstances:",
			"Service Providers: We may share your information with third-party service providers who help us operate and maintain the Service.",
			"Legal Requirements: We may disclose your information if required by law or to comply with a legal process.",
			"Business Transfers: We may disclose your information in connection with a merger, acquisition, or other business transaction.",
		  ],
		},
		dataSecurity: {
		  title: "Data Security",
		  content: [
			"We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage method is completely secure, so we cannot guarantee the absolute security of your information.",
			"If you use any of our services, you are responsible for maintaining the confidentiality of your account at your end and passwords and for restricting access to your computer, and unauthorized access to your PHI; and you agree to accept responsibility for all activities that occur under your account or password.",
		  ],
		},
		yourRights: {
		  title: "Your Rights",
		  content: [
			"Depending on your location, you may have certain rights regarding your information. These rights may include the right to access, rectify, erase, or restrict the processing of your information. You may also have the right to object to the processing of your information and the right to data portability.",
		  ],
		},
		policyUpdates: {
		  title: "Policy Updates",
		  content: [
			"We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.",
		  ],
		},
		contactUs: {
		  title: "Contact Us",
		  content: [
			"If you have any questions about this Privacy Policy, please contact us:",
			"By email: peoplecentric@gurugeeksroyalty.biz",
			"By visiting this page on our website: gurugeeksroyalty.com",
		  ],
		},
	  },
];

export {
	HEADING,
	LOGIN,
	SUBTEXT,
	FORM,
	BUTTON,
	PHONE,
	GENDER,
	COUNTRY,
	STATE,
	PASSWORD,
	CHECKBOX,
	ARROW,
	PRIVACYPOLICY,
};
