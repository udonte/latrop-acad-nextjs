const BACKGROUNDIMG = "/assets/lms/lmsbg.svg";
const HEADING = "Personal Information";
const INITIALS = "JD";
const EDITBUTTON = {
	text: "Update Information",
	icon: "/assets/lms/editicon.svg",
	type: "button",
};
const SAVEBUTTON = {
	text: "Save Changes",
	type: "submit",
};
const PICTURE = "Add Photo";
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
		label: "Email",
		placeholder: "steff.chibo@testmail.com",
		type: "email",
		name: "email",
		tag: "",
	},
	{
		label: "Phone Number",
		placeholder: "+234 812 8271 198",
		type: "TEL",
		name: "phone_no",
		tag: "",
	},
];
const GENDER = {
	label: "Gender",
	placeholder: "Select Gender",
	name: "gender",
	options: ["Male", "Female", "Decline To Answer"],
};
const COURSES = {
	label: "Course",
	placeholder: "None",
	name: "course",
};
const COUNTRY = {
	label: "Country of Residence",
	placeholder: "Select Country of Residence",
	name: "country",
	options: [],
};
const STATE = {
	label: "State of Residence",
	placeholder: "Select State of Residence",
	name: "state",
	options: [],
};
const UPLOADPOPUP = {
	heading: "Upload Photo",
	subtext: "Upload a profile picture to your account",
	icon: "/assets/lms/upload.svg",
	close: "/assets/lms/close.svg",
	instruction:
		"Drag and drop photo here or click to upload from folder. File must be jpg or png.",
	cancel: "Cancel",
	save: "Save Photo",
};
export {
	BACKGROUNDIMG,
	HEADING,
	INITIALS,
	EDITBUTTON,
	SAVEBUTTON,
	FORM,
	GENDER,
	COURSES,
	COUNTRY,
	STATE,
	PICTURE,
	UPLOADPOPUP
};
