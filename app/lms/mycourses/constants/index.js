const EMPTY_TEXT = {
	title: "No courses yet",
	subtitle:
		"You have not enrolled in any courses yet. Click on the enroll button to explore courses.",
	buttonLabel: "Explore Courses",
};
const TABS = ["Enrolled Courses", "Completed Courses"];
const TASKBUTTON = "Submit Task";
const ENROLLBUTTON = "Enroll Now";
const ENROLLEDCOURSE = {
	img: "/assets/lms/projmgtCard.jpeg",
	name: "Project Management",
	instructor: "Instructor: Meredith Grey",
};
const COMPLETEDCOURSE = {
	img: "/assets/lms/proddgnCard.jpeg",
	name: "Product Design (UI/UX)",
	status: "Completed",
};
const ENROLLEDCOUSETABS = ["Course Details", "Tasks"];
const MODULEICON = "/assets/lms/moduleIcon.svg";
const COMPLETEDICON = "/assets/lms/check.svg";
const ARROW = "/assets/lms/arrowdown.svg";
const LOCKED = "/assets/lms/locked.svg";
const QUESTICON = "/assets/lms/tick.svg";
const INPROGRESSBUTTON = "Continue";
const COURSEDETAILS = [
	{
		module: "Module 1: Introduction to Project Management",
		breakdown: [
			"Quest 1.1: Definition and Importance of Project Management.",
			"Quest 1.2: Key Roles and Responsibilities.",
			"Quest 1.3: Overview of Project Management Methodologies (Waterfall, Agile, Hybrid).",
		],
		status: "Completed",
	},
	{
		module: "Module 2: Project Initiation",
		breakdown: [
			"Quest 2.1: Defining Project Objectives and Scope.",
			"Quest 2.2: Conducting Stakeholder Analysis.",
			"Quest 2.3: Developing the Project Charter.",
		],
		status: "Inprogress",
	},
	{
		module: "Module 3: Project Execution",
		breakdown: [
			"Quest 3.1: Creating a Work Breakdown Structure (WBS).",
			"Quest 3.2: Developing Project Schedules and Timelines.",
			"Quest 3.3: Resource Allocation and Budgeting.",
		],
		status: "Locked",
	},
	{
		module: "Module 4: Project Closure",
		breakdown: [
			"Creating a Work Breakdown Structure (WBS).",
			"Developing Project Schedules and Timelines.",
			"Resource Allocation and Budgeting.",
		],
		status: "Locked",
	},
	{
		module: "Module 5: Advanced Project Management Techniques.",
		breakdown: [
			"Quest 5.1: Finalizing Deliverables and Documentation.",
			"Quest 5.2: Conducting Project Reviews and Lessons Learned.",
			"Celebrating Success and Handing Over Deliverables.",
		],
		status: "Locked",
	},
	{
		module: "Module 6: Project Portfolio Management",
		breakdown: [
			"Quest 6.1: Agile Project Management Practices + Frameworks.",
			"Quest 6.2: Earned Value Management (EVM).",
			"Quest 6.3: Critical Path Method (CPM) Analysis.",
		],
		status: "Locked",
	},
	{
		module: "Module 7: Leadership and Communication in Project Management",
		breakdown: [
			"Quest 7.1: Prioritizing Projects and Resource Allocation.",
			"Quest 7.2: Balancing Strategic Goals and Operational Needs.",
			"Quest 7.3: Managing Dependencies Across Multiple Projects.",
		],
		status: "Locked",
	},
	{
		module: "Module 8: Stakeholder Management",
		breakdown: [
			"Quest 8.1: Effective Communication Strategies.",
			"Quest 8.2: Conflict Resolution and Negotiation Techniques.",
			"Quest 8.3: Leading High Performing Project Teams.",
			"Quest 8.4: Bruce Tuckman's Group Model (Forming, Storming, Norming, Performing, Adjourning/Mourning).",
		],
		status: "Locked",
	},
	{
		module: "Module 9: Project Management Tools and Software",
		breakdown: [
			"Quest 9.1: Identifying and Analyzing Stakeholders.",
			"Quest 9.2: Engaging and Influencing Stakeholders.",
			"Quest 9.3: Managing Stakeholder Expectations.",
		],
		status: "Locked",
	},
	{
		module: "Module 10: Capstone Project",
		breakdown: [
			"Quest 10.1: Overview of Project Management Software (e.g., Microsoft Project, Asana, Trello, Jira, Click up).",
			"Quest 10.2: Using Collaboration Tools for Remote Project Teams (Slack [Searchable Log of All Communication and Knowledge], Notion).",
			"Quest 10.3: Integration and Automation of Project Management Processes.",
		],
		status: "Locked",
	},
];
const VIDEO = "Module Video";
const VIDEOICON = "/assets/lms/videoicon.svg";
const SUBMITTASK = {
	heading: "Submit Task",
	subtext: "Fill in the information and upload your tasks here.",
	dropdown: {
		label: "Course Module",
		placeholder: "Select Module",
		name: "module",
		options: [
			"Module 1",
			"Module 2",
			"Module 3",
			"Module 4",
			"Module 5",
			"Module 6",
			"Module 7",
			"Module 8",
			"Module 9",
			"Module 10",
		],
	},
	task: {
		heading: "Upload Task",
		instruction:
			"Drag and drop file here or click to upload from folder. File must be pdf, ppt, doc, docx or word.",
	},
	delete: "/assets/lms/delete.svg",
	pdf: "/assets/lms/pdficon.svg",
	alternative: {
		heading: "-OR-",
		input: {
			label: "Share Link",
			type: "text",
			name: "link",
			placeholder: "Enter link to file here",
		},
	},
	cancel: "Cancel",
	submit: { name: "Submit Task", type: "submit" },
};
const TASKS = {
	thead: [
		"Course",
		"Task Module",
		"Date Submitted",
		"Status",
		"Grade Obtained",
		"Grade",
	],
	tbody: [
		{
			course: "Project Management",
			module: "Module 1",
			submitted: "02 - 08 - 2024",
			status: "Submitted",
			grade: "10%",
		},
		{
			course: "Project Management",
			module: "Module 2",
			submitted: "-",
			status: "Incomplete",
			grade: "-",
		},
		{
			course: "Project Management",
			module: "Module 3",
			submitted: "-",
			status: "Incomplete",
			grade: "-",
		},
		{
			course: "Project Management",
			module: "Module 4",
			submitted: "-",
			status: "Incomplete",
			grade: "-",
		},
		{
			course: "Project Management",
			module: "Module 5",
			submitted: "-",
			status: "Incomplete",
			grade: "-",
		},
		{
			course: "Project Management",
			module: "Module 6",
			submitted: "-",
			status: "Incomplete",
			grade: "-",
		},
		{
			course: "Project Management",
			module: "Module 7",
			submitted: "-",
			status: "Incomplete",
			grade: "-",
		},
		{
			course: "Project Management",
			module: "Module 8",
			submitted: "-",
			status: "Incomplete",
			grade: "-",
		},
		{
			course: "Project Management",
			module: "Module 9",
			submitted: "-",
			status: "Incomplete",
			grade: "-",
		},
		{
			course: "Project Management",
			module: "Module 10",
			submitted: "-",
			status: "Incomplete",
			grade: "-",
		},
	],
};

const COMPLETED = {
	heading: "Bonus Module: Career Grooming Essentials",
	extras: [
		{
			icon: "/assets/lms/cv.svg",
			text: "CV/resume How To",
		},
		{
			icon: "/assets/lms/job.svg",
			text: "Job Application & Post Interview Guide",
		},
		{
			icon: "/assets/lms/interview.svg",
			text: "Interview Prep",
		},
		{
			icon: "/assets/lms/linkedin.svg",
			text: "LinkedIn Optimization",
		},
	],
	arrow: "/assets/lms/rightarrow.svg",
};

const COMPLETEDPOPUP = {
	backicon: "/assets/lms/backarrow.svg",
	closeicon: "/assets/lms/close.svg",
	check: "/assets/lms/wrigglycheck.svg",
	course: "Product Design (UI/UX)",
	text: "Congratulations! You have completed the product design course.",
	button1: "Share Achievement",
	button2: "Download Certificate",
};

const SHAREPOPUP = {
	backicon: "/assets/lms/backarrow.svg",
	closeicon: "/assets/lms/close.svg",
	shareicon: "/assets/lms/share.svg",
	heading: "Share Your Achievement!",
	text: [
		"Share your achievements: #gurugeeksacademy #gurugeeks on all social platforms.",
		"Tag @gurugeeks on instagram.",
		"Share on linkedin and Twitter.",
	],
	icons: [
		{
			icon: "/assets/lms/linkedinlogo.svg",
			link: "https://www.linkedin.com/company/gurugeeks-royalty-limited/",
		},
		{
			icon: "/assets/lms/insta.svg",
			link: "https://www.instagram.com/gurugeeksacademy/",
		},
		{
			icon: "/assets/lms/x.svg",
			link: "https://x.com/gurugacademy",
		},
	],
};

const INCOMPLETEPOPUP = {
	backicon: "/assets/lms/backarrow.svg",
	closeicon: "/assets/lms/close.svg",
	info: "/assets/lms/info.svg",
	course: "Project Management",
	text1: "You're almost there!",
	text2: "You are yet to complete this course. Finish this course to enroll in another one",
	button: "Continue Learning",
};

export {
	EMPTY_TEXT,
	TABS,
	TASKBUTTON,
	ENROLLBUTTON,
	ENROLLEDCOURSE,
	COMPLETEDCOURSE,
	ENROLLEDCOUSETABS,
	COURSEDETAILS,
	SUBMITTASK,
	MODULEICON,
	COMPLETEDICON,
	ARROW,
	LOCKED,
	QUESTICON,
	VIDEO,
	VIDEOICON,
	INPROGRESSBUTTON,
	TASKS,
	COMPLETED,
	COMPLETEDPOPUP,
	SHAREPOPUP,
	INCOMPLETEPOPUP,
};
