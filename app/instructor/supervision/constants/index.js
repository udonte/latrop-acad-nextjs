const TABS = ["Student Tasks", "Student Attendance", "Student Messages"];
const TASKS = {
	thead: ["Student Name", "Course", "Email", "Task", "Date Submitted"],
	tbody: [
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Jaymes Astrid",
			course: "Project Management",
			email: "jaymesastride1223@testmail.com",
			task: "Module 1",
			submitted: "02 - 08 - 2024",
		},
		{
			name: "Boluwatife Oluwadaisi",
			course: "Project Management",
			email: "tifedaisiiadil@testmail.com",
			task: "Module 2",
			submitted: "02 - 08 - 2024",
		},
	],
};
const SEARCH = {
	search: "/assets/lms/enroll_courses/search.svg",
	searchW: "/assets/lms/enroll_courses/searchW.svg",
	searchB: "/assets/lms/enroll_courses/searchB.svg",
	close: "/assets/lms/enroll_courses/x.svg",
	filter: "/assets/lms/enroll_courses/filter.svg",
	placeholder: "Search",
};
const GRADEMODAL = {
	heading: "Upload Course Video",
	subtext: "Fill out the forms and upload video",
	task: "Student Task",
	file: "John Doe Module 2 Task.pdf",
	link: "https://drive.google.com/drive/tasks/8IvHeGJbcCyXOf...",
	linkbutton: "Go To Link",
	linklabel: "Shared Link",
	grade: "Grade Task",
	dropdown: {
		label: "Grade Task",
		placeholder: "Select Grade",
		name: "grade",
		options: [
			"10%",
			"20%",
			"30%",
			"40%",
			"50%",
			"60%",
			"70%",
			"80%",
			"90%",
			"100%",
		],
	},
	cancel: "Cancel",
	submit: { name: "Upload Grade", type: "submit" },
	name: "Student Name",
	email: "Student Email",
	course: "Course",
	module: "Module",
	download: "/assets/instructor/download.svg",
};
const ATTENDANCE = [
	{
		module: "Module 1: Introduction to Project Management",
		breakdown: [
			"Quest 1.1: Definition and Importance of Project Management.",
			"Quest 1.2: Key Roles and Responsibilities.",
			"Quest 1.3: Overview of Project Management Methodologies (Waterfall, Agile, Hybrid).",
		],
		date: "08-08-2024",
		record: {
			thead: ["Student Name", "Course", "Time", "Email", "Attendance"],
			tbody: [
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
			],
		},
	},
	{
		module: "Module 2: Project Initiation",
		breakdown: [
			"Quest 2.1: Defining Project Objectives and Scope.",
			"Quest 2.2: Conducting Stakeholder Analysis.",
			"Quest 2.3: Developing the Project Charter.",
		],

		date: "08-08-2024",
		record: {
			thead: ["Student Name", "Course", "Time", "Email", "Attendance"],
			tbody: [
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "NoNo",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
			],
		},
	},
	{
		module: "Module 3: Project Execution",
		breakdown: [
			"Quest 3.1: Creating a Work Breakdown Structure (WBS).",
			"Quest 3.2: Developing Project Schedules and Timelines.",
			"Quest 3.3: Resource Allocation and Budgeting.",
		],

		date: "08-08-2024",
		record: {
			thead: ["Student Name", "Course", "Time", "Email", "Attendance"],
			tbody: [
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "NoNo",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
			],
		},
	},
	{
		module: "Module 4: Project Closure",
		breakdown: [
			"Creating a Work Breakdown Structure (WBS).",
			"Developing Project Schedules and Timelines.",
			"Resource Allocation and Budgeting.",
		],

		date: "08-08-2024",
		record: {
			thead: ["Student Name", "Course", "Time", "Email", "Attendance"],
			tbody: [
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "NoNo",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
			],
		},
	},
	{
		module: "Module 5: Advanced Project Management Techniques.",
		breakdown: [
			"Quest 5.1: Finalizing Deliverables and Documentation.",
			"Quest 5.2: Conducting Project Reviews and Lessons Learned.",
			"Celebrating Success and Handing Over Deliverables.",
		],

		date: "08-08-2024",
		record: {
			thead: ["Student Name", "Course", "Time", "Email", "Attendance"],
			tbody: [
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "NoNo",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
			],
		},
	},
	{
		module: "Module 6: Project Portfolio Management",
		breakdown: [
			"Quest 6.1: Agile Project Management Practices + Frameworks.",
			"Quest 6.2: Earned Value Management (EVM).",
			"Quest 6.3: Critical Path Method (CPM) Analysis.",
		],

		date: "08-08-2024",
		record: {
			thead: ["Student Name", "Course", "Time", "Email", "Attendance"],
			tbody: [
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "NoNo",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
			],
		},
	},
	{
		module: "Module 7: Leadership and Communication in Project Management",
		breakdown: [
			"Quest 7.1: Prioritizing Projects and Resource Allocation.",
			"Quest 7.2: Balancing Strategic Goals and Operational Needs.",
			"Quest 7.3: Managing Dependencies Across Multiple Projects.",
		],

		date: "08-08-2024",
		record: {
			thead: ["Student Name", "Course", "Time", "Email", "Attendance"],
			tbody: [
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "NoNo",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
			],
		},
	},
	{
		module: "Module 8: Stakeholder Management",
		breakdown: [
			"Quest 8.1: Effective Communication Strategies.",
			"Quest 8.2: Conflict Resolution and Negotiation Techniques.",
			"Quest 8.3: Leading High Performing Project Teams.",
			"Quest 8.4: Bruce Tuckman's Group Model (Forming, Storming, Norming, Performing, Adjourning/Mourning).",
		],

		date: "08-08-2024",
		record: {
			thead: ["Student Name", "Course", "Time", "Email", "Attendance"],
			tbody: [
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "NoNo",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
			],
		},
	},
	{
		module: "Module 9: Project Management Tools and Software",
		breakdown: [
			"Quest 9.1: Identifying and Analyzing Stakeholders.",
			"Quest 9.2: Engaging and Influencing Stakeholders.",
			"Quest 9.3: Managing Stakeholder Expectations.",
		],

		date: "08-08-2024",
		record: {
			thead: ["Student Name", "Course", "Time", "Email", "Attendance"],
			tbody: [
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "NoNo",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
			],
		},
	},
	{
		module: "Module 10: Capstone Project",
		breakdown: [
			"Quest 10.1: Overview of Project Management Software (e.g., Microsoft Project, Asana, Trello, Jira, Click up).",
			"Quest 10.2: Using Collaboration Tools for Remote Project Teams (Slack [Searchable Log of All Communication and Knowledge], Notion).",
			"Quest 10.3: Integration and Automation of Project Management Processes.",
		],

		date: "08-08-2024",
		record: {
			thead: ["Student Name", "Course", "Time", "Email", "Attendance"],
			tbody: [
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "NoNo",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "Yes",
				},
				{
					name: "Jaymes Astrid",
					course: "Project Management",
					time: "2:15pm",
					email: "jaymesastride1223@testmail.com",
					attendance: "No",
				},
			],
		},
	},
];
export { TABS, TASKS, SEARCH, GRADEMODAL, ATTENDANCE };
export const MESSAGES = [
	{
		id: 1,
		name: "Ugochukwu Obioma",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent.",
		replyMessage: "Reply Message",
		viewReply: null,
		
	},
	{
		id: 2,
		name: "William Butcher",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent. Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent.",
		replyMessage: "Reply Message",
		viewReply: null,
		
	},
	{
		id: 3,
		name: "Ugochukwu Obioma",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent.",
		replyMessage: null,
		viewReply: "View Reply"
	},
	{
		id: 1,
		name: "Ugochukwu Obioma",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent.",
		replyMessage: "Reply Message",
		viewReply: null,
		
	},
	{
		id: 2,
		name: "Ugochukwu Obioma",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent. Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent.",
		replyMessage: "Reply Message",
		viewReply: null,
		
	},
	{
		id: 3,
		name: "Ugochukwu Obioma",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent.",
		replyMessage: null,
		viewReply: "View Reply"
	},
	{
		id: 1,
		name: "Ugochukwu Obioma",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent.",
		replyMessage: "Reply Message",
		viewReply: null,
		
	},
	{
		id: 2,
		name: "Ugochukwu Obioma",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent. Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent",
		replyMessage: "Reply Message",
		viewReply: null,
		
	},
	{
		id: 3,
		name: "Ugochukwu Obioma",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent.",
		replyMessage: null,
		viewReply: "View Reply",
		
	},
	{
		id: 1,
		name: "Ugochukwu Obioma",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent.",
		replyMessage: "Reply Message",
		viewReply: null,
		
	},
	{
		id: 2,
		name: "Ugochukwu Obioma",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent. Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent",
		replyMessage: "Reply Message",
		viewReply: null,
		
	},
	{
		id: 3,
		name: "Ugochukwu Obioma",
		email: "ugochukwuobioma01@testmail.com",
		date: "2:15 PM | 08 - 08 - 2024",
		message:
			"Lorem ipsum dolor sit amet consectetur. Faucibus cras tristique lacus pharetra volutpat vulputate quis porttitor cursus. Vel nulla cras dictum enim tortor tortor egestas dignissim. Leo donec tortor magna laoreet euismod mattis. Donec nunc interdum ornare praesent.",
		replyMessage: null,
		viewReply: "View Reply",
		
	},
];



export const REPLY_MODAL_TEXT = {
	title: "Reply Message",
	sendToLabel: "Send to:",
	emailPlaceholder: "Student email here",
	titleLabel: "Title",
	titlePlaceholder: "Message Title",
	messageLabel: "Message",
	messagePlaceholder: "Enter Message here",
	cancelButton: "Cancel",
	submitButton: "Reply Message",
};

export const VIEW_MODAL_TEXT = {
    title: "Your Reply",
    semititle: "Student Info",
    studentInfo: {
      nameLabel: "Student Name",
      emailLabel: "Student Email",
      messageLabel: "Message",
      name: "Boluwatife Oluwadaisi",
      email: "tifedaisiiladiil@testmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur. Lacus tempus tortor a viverra. Laoreet nisi mauris iaculis quis nibh integer pulvinar id praesent. Turpis diam viverra eget elementum pharetra risus. Lacus quis penatibus in erat vel non dignissim.",
    },
    yourReplyLabel: "Your Reply",
    yourReply:
      "Lorem ipsum dolor sit amet consectetur. Lacus tempus tortor a viverra. Laoreet nisi mauris iaculis quis nibh integer pulvinar id praesent. Turpis diam viverra eget elementum pharetra risus. Lacus quis penatibus in erat vel non dignissim.",
  };
  


export const REPLY_TEXT = {
    modalTitle: "Your Reply",
    studentInfoTitle: "Student Info",
    studentNameLabel: "Student Name",
    studentEmailLabel: "Student Email",
    messageLabel: "Message",
    yourReplyTitle: "Your Reply",
  };
  
