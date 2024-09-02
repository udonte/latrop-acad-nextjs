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
		route: "/admin/myinfo",
	},
	{
		name: "Courses",
		iconW: "/assets/lms/coursesW.svg",
		iconB: "/assets/lms/coursesB.svg",
		route: "/admin/courses",
	},
	{
		name: "Payments",
		iconW: "/assets/lms/paymentW.svg",
		iconB: "/assets/lms/paymentB.svg",
		route: "/admin/payments",
	},
	{
		name: "Calendar",
		iconW: "/assets/lms/calW.svg",
		iconB: "/assets/lms/calB.svg",
		route: "/admin/calendar",
	},
	{
		name: "Blog",
		iconW: "/assets/admin/blogW.svg",
		iconB: "/assets/admin/blogB.svg",
		route: "/admin/blog",
	},
	{
		name: "Support",
		iconW: "/assets/lms/supportW.svg",
		iconB: "/assets/lms/supportB.svg",
		route: "/admin/support",
	},
	{
		name: "Settings",
		iconW: "/assets/admin/settingsW.svg",
		iconB: "/assets/admin/settingsB.svg",
		route: "/admin/settings",
	},
];

export const TOPNAV = {
	names: [
		{
			name: "My Information",
			route: "/admin/myinfo",
		},
		{
			name: "Courses",
			route: "/admin/courses",
		},
		{
			name: "Payments",
			route: "/admin/payments",
		},
		{
			name: "Calendar",
			route: "/admin/calendar",
		},
		{
			name: "Blog",
			route: "/admin/blog",
		},
		{
			name: "Create Blog",
			route: "/admin/blog/create",
		},
		{
			name: "Edit Blog",
			route: "/admin/blog/edit",
		},
		{
			name: "Blog",
			route: "/admin/blog/[blog]",
		},
		{
			name: "Support",
			route: "/admin/support",
		},
		{
			name: "Settings",
			route: "/admin/settings",
		},
	],
	fname: "John",
	lname: "Doe",
	type: "Admin",
	email: "john.doe@testmail.com",
	arrow: "/assets/lms/arrowdown.svg",
	ddtext: "Signed in as",
	navitems: [
		{
			name: "My Information",
			icon: "/assets/lms/profileB.svg",
			route: "/admin/courses",
		},
		{
			name: "Courses",
			icon: "/assets/lms/coursesB.svg",
			route: "/admin/courses",
		},
		{
			name: "Log Out",
			icon: "/assets/lms/logout.svg",
			route: "/",
		},
	],
};
export const BLOG = "Make Blog Post"