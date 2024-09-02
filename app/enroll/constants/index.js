const HEADING = "Enroll Now!";

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
	name: "phone_no",
};
const GENDER = {
	label: "Gender",
	placeholder: "Select Gender",
	name: "gender",
	options: ["Male", "Female", "Decline To Answer"],
};

const COURSES = {
	label: "Courses",
	placeholder: "Select Courses",
	name: "course",
	options: [
		"Frontend Basic Course",
		"Frontend Expert Course (React.js)",
		"Frontend Expert Course (Next.js)",
		"Backend Engineering (Python)",
		"Backend Engineering (Node.js)",
		"Backend Engineering (PHP)",
	],
};
const REFERRAL = {
	label: "Referral Link",
	placeholder: "Link",
	type: "text",
	name: "referral_link",
	tag: "Optional",
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
						• Contains at least a number`,
	},
	{
		label: "Confirm Password",
		placeholder: "Re-enter Password",
		type: "password",
		name: "confirm_password",
		requirements: "Password must match previous field",
	},
];

const BUTTON = { text: "Enroll Now", type: "submit" };

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
	"Lorem ipsum dolor sit amet consectetur. Mauris sed nec amet vehicula eu lacus. Amet tempor diam non vitae adipiscing turpis. Posuere nunc sed elementum morbi in consectetur semper quis. Commodo at odio aenean eu urna arcu. Diam aliquet tristique id orci turpis cursus sit mauris morbi. Ultricies enim egestas cursus nisl aliquam vitae nisl. Maecenas ornare et diam tincidunt sed ultrices ultrices ultricies. Rutrum orci pulvinar velit bibendum egestas sit ultrices lacus mauris. Praesent dolor at non imperdiet elit. Ac enim mauris amet quam varius luctus velit nec. Tempus aliquam commodo aliquet malesuada egestas dui ridiculus. Turpis feugiat suspendisse dignissim sit cras. Enim euismod quis elit mi amet. Faucibus tortor fringilla quis feugiat cursus.",
	"Lorem ipsum dolor sit amet consectetur. Mauris sed nec amet vehicula eu lacus. Amet tempor diam non vitae adipiscing turpis. Posuere nunc sed elementum morbi in consectetur semper quis. Commodo at odio aenean eu urna arcu. Diam aliquet tristique id orci turpis cursus sit mauris morbi. Ultricies enim egestas cursus nisl aliquam vitae nisl. Maecenas ornare et diam tincidunt sed ultrices ultrices ultricies. Rutrum orci pulvinar velit bibendum egestas sit ultrices lacus mauris. Praesent dolor at non imperdiet elit. Ac enim mauris amet quam varius luctus velit nec. Tempus aliquam commodo aliquet malesuada egestas dui ridiculus. Turpis feugiat suspendisse dignissim sit cras. Enim euismod quis elit mi amet. Faucibus tortor fringilla quis feugiat cursus.",
	"Lorem ipsum dolor sit amet consectetur. Mauris sed nec amet vehicula eu lacus. Amet tempor diam non vitae adipiscing turpis. Posuere nunc sed elementum morbi in consectetur semper quis. Commodo at odio aenean eu urna arcu. Diam aliquet tristique id orci turpis cursus sit mauris morbi. Ultricies enim egestas cursus nisl aliquam vitae nisl. Maecenas ornare et diam tincidunt sed ultrices ultrices ultricies. Rutrum orci pulvinar velit bibendum egestas sit ultrices lacus mauris. Praesent dolor at non imperdiet elit. Ac enim mauris amet quam varius luctus velit nec. Tempus aliquam commodo aliquet malesuada egestas dui ridiculus. Turpis feugiat suspendisse dignissim sit cras. Enim euismod quis elit mi amet. Faucibus tortor fringilla quis feugiat cursus.",
	"Lorem ipsum dolor sit amet consectetur. Mauris sed nec amet vehicula eu lacus. Amet tempor diam non vitae adipiscing turpis. Posuere nunc sed elementum morbi in consectetur semper quis. Commodo at odio aenean eu urna arcu. Diam aliquet tristique id orci turpis cursus sit mauris morbi. Ultricies enim egestas cursus nisl aliquam vitae nisl. Maecenas ornare et diam tincidunt sed ultrices ultrices ultricies. Rutrum orci pulvinar velit bibendum egestas sit ultrices lacus mauris. Praesent dolor at non imperdiet elit. Ac enim mauris amet quam varius luctus velit nec. Tempus aliquam commodo aliquet malesuada egestas dui ridiculus. Turpis feugiat suspendisse dignissim sit cras. Enim euismod quis elit mi amet. Faucibus tortor fringilla quis feugiat cursus.",
	"Lorem ipsum dolor sit amet consectetur. Mauris sed nec amet vehicula eu lacus. Amet tempor diam non vitae adipiscing turpis. Posuere nunc sed elementum morbi in consectetur semper quis. Commodo at odio aenean eu urna arcu. Diam aliquet tristique id orci turpis cursus sit mauris morbi. Ultricies enim egestas cursus nisl aliquam vitae nisl. Maecenas ornare et diam tincidunt sed ultrices ultrices ultricies. Rutrum orci pulvinar velit bibendum egestas sit ultrices lacus mauris. Praesent dolor at non imperdiet elit. Ac enim mauris amet quam varius luctus velit nec. Tempus aliquam commodo aliquet malesuada egestas dui ridiculus. Turpis feugiat suspendisse dignissim sit cras. Enim euismod quis elit mi amet. Faucibus tortor fringilla quis feugiat cursus.",
	"Lorem ipsum dolor sit amet consectetur. Mauris sed nec amet vehicula eu lacus. Amet tempor diam non vitae adipiscing turpis. Posuere nunc sed elementum morbi in consectetur semper quis. Commodo at odio aenean eu urna arcu. Diam aliquet tristique id orci turpis cursus sit mauris morbi. Ultricies enim egestas cursus nisl aliquam vitae nisl. Maecenas ornare et diam tincidunt sed ultrices ultrices ultricies. Rutrum orci pulvinar velit bibendum egestas sit ultrices lacus mauris. Praesent dolor at non imperdiet elit. Ac enim mauris amet quam varius luctus velit nec. Tempus aliquam commodo aliquet malesuada egestas dui ridiculus. Turpis feugiat suspendisse dignissim sit cras. Enim euismod quis elit mi amet. Faucibus tortor fringilla quis feugiat cursus.",
];

export {
	HEADING,
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
	COURSES,
	REFERRAL,
};
