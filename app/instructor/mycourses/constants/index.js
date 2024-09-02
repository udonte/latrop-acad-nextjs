const DETAILHEADING = "Course Details"
const COURSES = [
	{
		img: "/assets/lms/projmgtCard.jpeg",
		name: "Project Management",
		coursedetail: [
			{
				module: "Module 1: Introduction to Project Management",
				breakdown: [
					"Quest 1.1: Definition and Importance of Project Management.",
					"Quest 1.2: Key Roles and Responsibilities.",
					"Quest 1.3: Overview of Project Management Methodologies (Waterfall, Agile, Hybrid).",
				],
			},
			{
				module: "Module 2: Project Initiation",
				breakdown: [
					"Quest 2.1: Defining Project Objectives and Scope.",
					"Quest 2.2: Conducting Stakeholder Analysis.",
					"Quest 2.3: Developing the Project Charter.",
				],
			},
			{
				module: "Module 3: Project Execution",
				breakdown: [
					"Quest 3.1: Creating a Work Breakdown Structure (WBS).",
					"Quest 3.2: Developing Project Schedules and Timelines.",
					"Quest 3.3: Resource Allocation and Budgeting.",
				],
			},
			{
				module: "Module 4: Project Closure",
				breakdown: [
					"Creating a Work Breakdown Structure (WBS).",
					"Developing Project Schedules and Timelines.",
					"Resource Allocation and Budgeting.",
				],
			},
			{
				module: "Module 5: Advanced Project Management Techniques.",
				breakdown: [
					"Quest 5.1: Finalizing Deliverables and Documentation.",
					"Quest 5.2: Conducting Project Reviews and Lessons Learned.",
					"Celebrating Success and Handing Over Deliverables.",
				],
			},
			{
				module: "Module 6: Project Portfolio Management",
				breakdown: [
					"Quest 6.1: Agile Project Management Practices + Frameworks.",
					"Quest 6.2: Earned Value Management (EVM).",
					"Quest 6.3: Critical Path Method (CPM) Analysis.",
				],
			},
			{
				module: "Module 7: Leadership and Communication in Project Management",
				breakdown: [
					"Quest 7.1: Prioritizing Projects and Resource Allocation.",
					"Quest 7.2: Balancing Strategic Goals and Operational Needs.",
					"Quest 7.3: Managing Dependencies Across Multiple Projects.",
				],
			},
			{
				module: "Module 8: Stakeholder Management",
				breakdown: [
					"Quest 8.1: Effective Communication Strategies.",
					"Quest 8.2: Conflict Resolution and Negotiation Techniques.",
					"Quest 8.3: Leading High Performing Project Teams.",
					"Quest 8.4: Bruce Tuckman's Group Model (Forming, Storming, Norming, Performing, Adjourning/Mourning).",
				],
			},
			{
				module: "Module 9: Project Management Tools and Software",
				breakdown: [
					"Quest 9.1: Identifying and Analyzing Stakeholders.",
					"Quest 9.2: Engaging and Influencing Stakeholders.",
					"Quest 9.3: Managing Stakeholder Expectations.",
				],
			},
			{
				module: "Module 10: Capstone Project",
				breakdown: [
					"Quest 10.1: Overview of Project Management Software (e.g., Microsoft Project, Asana, Trello, Jira, Click up).",
					"Quest 10.2: Using Collaboration Tools for Remote Project Teams (Slack [Searchable Log of All Communication and Knowledge], Notion).",
					"Quest 10.3: Integration and Automation of Project Management Processes.",
				],
			},
		],
	},
	{
		img: "/assets/lms/projmgtCard.jpeg",
		name: "Data Science",
		coursedetail: [
			{
				module: "Module 1: Introduction to Data Science",
				breakdown: [
					"Quest 1.1: Definition and Importance of Project Management.",
					"Quest 1.2: Key Roles and Responsibilities.",
					"Quest 1.3: Overview of Project Management Methodologies (Waterfall, Agile, Hybrid).",
				],
			},
			{
				module: "Module 2: Project Initiation",
				breakdown: [
					"Quest 2.1: Defining Project Objectives and Scope.",
					"Quest 2.2: Conducting Stakeholder Analysis.",
					"Quest 2.3: Developing the Project Charter.",
				],
			},
			{
				module: "Module 3: Project Execution",
				breakdown: [
					"Quest 3.1: Creating a Work Breakdown Structure (WBS).",
					"Quest 3.2: Developing Project Schedules and Timelines.",
					"Quest 3.3: Resource Allocation and Budgeting.",
				],
			},
			{
				module: "Module 4: Project Closure",
				breakdown: [
					"Creating a Work Breakdown Structure (WBS).",
					"Developing Project Schedules and Timelines.",
					"Resource Allocation and Budgeting.",
				],
			},
			{
				module: "Module 5: Advanced Project Management Techniques.",
				breakdown: [
					"Quest 5.1: Finalizing Deliverables and Documentation.",
					"Quest 5.2: Conducting Project Reviews and Lessons Learned.",
					"Celebrating Success and Handing Over Deliverables.",
				],
			},
			{
				module: "Module 6: Project Portfolio Management",
				breakdown: [
					"Quest 6.1: Agile Project Management Practices + Frameworks.",
					"Quest 6.2: Earned Value Management (EVM).",
					"Quest 6.3: Critical Path Method (CPM) Analysis.",
				],
			},
			{
				module: "Module 7: Leadership and Communication in Project Management",
				breakdown: [
					"Quest 7.1: Prioritizing Projects and Resource Allocation.",
					"Quest 7.2: Balancing Strategic Goals and Operational Needs.",
					"Quest 7.3: Managing Dependencies Across Multiple Projects.",
				],
			},
			{
				module: "Module 8: Stakeholder Management",
				breakdown: [
					"Quest 8.1: Effective Communication Strategies.",
					"Quest 8.2: Conflict Resolution and Negotiation Techniques.",
					"Quest 8.3: Leading High Performing Project Teams.",
					"Quest 8.4: Bruce Tuckman's Group Model (Forming, Storming, Norming, Performing, Adjourning/Mourning).",
				],
			},
			{
				module: "Module 9: Project Management Tools and Software",
				breakdown: [
					"Quest 9.1: Identifying and Analyzing Stakeholders.",
					"Quest 9.2: Engaging and Influencing Stakeholders.",
					"Quest 9.3: Managing Stakeholder Expectations.",
				],
			},
			{
				module: "Module 10: Capstone Project",
				breakdown: [
					"Quest 10.1: Overview of Project Management Software (e.g., Microsoft Project, Asana, Trello, Jira, Click up).",
					"Quest 10.2: Using Collaboration Tools for Remote Project Teams (Slack [Searchable Log of All Communication and Knowledge], Notion).",
					"Quest 10.3: Integration and Automation of Project Management Processes.",
				],
			},
		],
	},
];
const UPLOADBUTTON = "Upload Video";

const MODULEICON = "/assets/lms/moduleIcon.svg";
const ARROW = "/assets/lms/arrowdown.svg";
const QUESTICON = "/assets/lms/tick.svg";

const VIDEO = "Module Video";
const VIDEOICON = "/assets/lms/videoicon.svg";
const SUBMITTASK = {
	heading: "Upload Course Video",
	subtext: "Fill out the forms and upload video",
	input: {
		label: "Title",
		type: "text",
		name: "link",
		placeholder: "Module 5 video",
	},
	dropdown: {
		label: "Module",
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
		heading: "Video",
		instruction:
			"Drag and drop photo here or click to upload from folder. File must be mp4, mvk or mov.",
	},
	cancel: "Cancel",
	submit: { name: "Upload Video", type: "submit" },
};

export {
	DETAILHEADING,
	COURSES,
	UPLOADBUTTON,
	SUBMITTASK,
	MODULEICON,
	ARROW,
	QUESTICON,
	VIDEO,
	VIDEOICON,
};
