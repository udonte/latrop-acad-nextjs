export const LOGO = "/assets/logo.svg";

export const NAME = {
	a: "Gurug",
	span: "ee",
	b: "ks Academy",
};

export const SIDENAV = [
	{
		name: "My Information",
		iconW: "/assets/lms/profileW.svg",
		iconB: "/assets/lms/profileB.svg",
		route: "/instructor/myinfo",
	},
	{
		name: "My Courses",
		iconW: "/assets/lms/coursesW.svg",
		iconB: "/assets/lms/coursesB.svg",
		route: "/instructor/mycourses",
	},
	{
		name: "Supervision",
		iconW: "/assets/instructor/supervisionW.svg",
		iconB: "/assets/instructor/supervisionB.svg",
		route: "/instructor/supervision",
	},
	{
		name: "Calendar",
		iconW: "/assets/lms/calW.svg",
		iconB: "/assets/lms/calB.svg",
		route: "/instructor/calendar",
	},
	{
		name: "Support",
		iconW: "/assets/lms/supportW.svg",
		iconB: "/assets/lms/supportB.svg",
		route: "/instructor/support",
	},
];

export const TOPNAV = {
	names: [
		{
			name: "My Information",
			route: "/instructor/myinfo",
		},
		{
			name: "My Courses",
			route: "/instructor/mycourses",
		},
		{
			name: "Student Supervision",
			route: "/instructor/supervision",
		},
		{
			name: "Calendar",
			route: "/instructor/calendar",
		},
		{
			name: "Support",
			route: "/instructor/support",
		},
	],
	fname: "John",
	lname: "Doe",
	type: "Instuctor",
	email: "john.doe@testmail.com",
	arrow: "/assets/lms/arrowdown.svg",
	ddtext: "Signed in as",
	navitems: [
		{
			name: "My Courses",
			icon: "/assets/lms/coursesB.svg",
			route: "/instructor/mycourses",
		},
		{
			name: "Supervision",
			icon: "/assets/instructor/supervisionB.svg",
			route: "/instructor/supervision",
		},
		{
			name: "Log Out",
			icon: "/assets/lms/logout.svg",
			route: "/",
		},
	],
};
