const TABS = ["All Courses", "Engineering", "Product", "Data", "Business"];
const CHECK = "/assets/learning_path/checkmark.svg";
const ENGINEERING = [
	{
		img: "/assets/lms/enroll_courses/img1.jpeg",
		name: "Frontend Engineering",
		route: "frontend",
		details: {
			heading: "Frontend Engineering",
			check: "/assets/learning_path/checkmark.svg",
			subtext:
				"Our Frontend engineering course equips you with the essential skills, whether you're a coding newcomer or a developer seeking to level up. Master the fundamentals and gain the practical knowledge to bring your web ideas to life.",
			outline: {
				heading: "What You Will Learn",
				subtext: "Here is the course outline for frontend engineering",
				list: [],
				listwithdd: [
					{
						name: "Frontend Basic Course",
						list: [
							"Introduction to Frontend Development",
							"HTML Fundamentals",
							"CSS Fundamentals",
							"JavaScript Fundamentals",
							"Introduction To React.js",
							"Introduction To Vue.js",
							"Introduction To Angular.js",
						],
					},
					{
						name: "Frontend Expert Course (React)",
						list: [
							"Introduction to React",
							"React Hooks and Routing",
							"Authentication in React Applications",
							"API Consumption in React",
							"State Management in React",
							"Advanced JSX Techniques",
							"Introduction to TypeScript",
						],
					},
					{
						name: "Frontend Expert Course (Next.js)",
						list: [
							"Introduction to Next.js",
							"Advanced Components",
							"Next Router",
							"Next CLI",
							"Advanced Topics",
							"State Management in Next",
							"API Consumption in Next.js",
						],
					},
				],
			},
			process: {
				heading: "Course Details",
				subtext:
					"Find out the process, requirements and fees for this course.",
				payment: {
					heading: "Payment Options:",
					list: [
						"Full upfront payment option",
						`Installment payment with a 3-month tenure; 1st month 40% subsequent months 30%.`,
					],
				},
				duration: {
					heading: "Course Duration:",
					text: "6 months",
					list: [
						"2 months of immersive theoretical learning",
						"2 months of practical coursework",
						"2 months of multi-unit project collaboration",
					],
				},
				comitment: {
					heading: "Time Commitment:",
					text: " Monday, Wednesday, Thursdays & Saturdays. 3x per/week.",
				},
				location: {
					heading: "Location:",
					text: "Online/ Virtual",
				},
				eligibility: {
					heading: "Eligibility:",
					list: [
						"The training is open to Undergraduates, Graduates and Individuals seeking to build a career in the Tech space, SIWES.",
						"Have access to a workstation/computer and a reliable network.",
					],
				},
			},
		},
		pricecard: {
			full: {
				heading: "Full Upfront Cost",
				price: "N 150,000",
				period: "One Time Payment",
			},
			monthly: {
				heading: "3-Month Tenure Cost",
				month: [
					{
						price: "N 60,000",
						period: "First Month",
					},
					{
						price: "N 45,000",
						period: "Second Month",
					},
					{
						price: "N 45,000",
						period: "Third Month",
					},
				],
			},
		},
		courses: {
			label: "Courses Name",
			placeholder: "Select Courses",
			name: "course",
			options: [
				"Frontend Basic Course",
				"Frontend Expert Course (React.js)",
				"Frontend Expert Course (Next.js)",
				,
			],
		},
	},

	{
		img: "/assets/lms/enroll_courses/backend.jpeg",
		name: "Backend Engineering",
		route: "backend",
		details: {
			heading: "Backend Engineering",
			check: "/assets/learning_path/checkmark.svg",
			subtext:
				"Our backend engineering course goes beyond theory. Through engaging projects, you'll gain practical experience in building the backend systems that power the digital world. Whether you're a coding newcomer or looking to refine your skills, this course empowers you to become the architect behind the scenes.",
			outline: {
				heading: "What You Will Learn",
				subtext: "Here is the course outline for backend engineering",
				list: [
					"Introduction to SQL Database",
					"Introduction to NoSQL Database",
				],
				listwithdd: [
					{
						name: "Backend with Python",
						list: [
							"Introduction to Backend Development",
							"Introduction to Python",
							"Program Structure in Python",
							"Object-Oriented Programming (OOP) in Python",
							"Python Style and Best Practices ",
							"Python Core Concepts",
							"String Interpolation and Formatting in Python",
							"Arrays and Indexers in Python",
						],
					},
					{
						name: "Backend with Node.JS",
						list: [
							"Introduction to Backend Development",
							"Introduction to Node.JS",
							"Program Structure in Node.JS",
							"Object-Oriented Programming (OOP) in Node.JS",
							"Node.JS Style and Best Practices",
							"Node.JS Core Concepts",
							"String Interpolation and Formatting in Node.JS",
							"Arrays and Indexers in Node.JS",
						],
					},
					{
						name: "Backend with PHP",
						list: [
							"Introduction to Backend Development",
							"Introduction to PHP",
							"Program Structure in PHP",
							"Object-Oriented Programming (OOP) in PHP",
							"PHP Style and Best Practices",
							"String Interpolation and Formatting in PHP",
							"Arrays and Indexers in Python",
						],
					},
				],
			},
			process: {
				heading: "Course Details",
				subtext:
					"Find out the process, requirements and fees for this course.",
				payment: {
					heading: "Payment Options:",
					list: [
						"Full upfront payment option",
						`Installment payment with a 3-month tenure; 1st month 40% subsequent months 30%.`,
					],
				},
				duration: {
					heading: "Course Duration:",
					text: "6 months",
					list: [
						"2 months of immersive theoretical learning",
						"2 months of practical coursework",
						"2 months of multi-unit project collaboration",
					],
				},
				comitment: {
					heading: "Time Commitment:",
					text: " Monday, Wednesday, Thursdays & Saturdays. 3x per/week.",
				},
				location: {
					heading: "Location:",
					text: "Online/ Virtual",
				},
				eligibility: {
					heading: "Eligibility:",
					list: [
						"The training is open to Undergraduates, Graduates and Individuals seeking to build a career in the Tech space, SIWES.",
						"Have access to a workstation/computer and a reliable network.",
					],
				},
			},
		},
		pricecard: {
			full: {
				heading: "Full Upfront Cost",
				price: "N 150,000",
				period: "One Time Payment",
			},
			monthly: {
				heading: "3-Month Tenure Cost",
				month: [
					{
						price: "N 60,000",
						period: "First Month",
					},
					{
						price: "N 45,000",
						period: "Second Month",
					},
					{
						price: "N 45,000",
						period: "Third Month",
					},
				],
			},
		},
		courses: {
			label: "Courses Name",
			placeholder: "Select Courses",
			name: "course",
			options: [
				"Frontend Basic Course",
				"Frontend Expert Course (React.js)",
				"Frontend Expert Course (Next.js)",
				,
			],
		},
	},

	{
		img: "/assets/lms/enroll_courses/img3.jpeg",
		name: "Cloud Computing/Dev Ops",
		route: "cloudcomputing",
		details: {
			heading: "Cloud Computing (DevOps)",
			check: "/assets/learning_path/checkmark.svg",
			subtext:
				"Our cloud computing course equips you with core concepts of cloud computing which includes its deployment models (IaaS, PaaS, SaaS), service models, and benefits. If you're a complete beginner or an IT professional looking to expand your skillset, this course provides a comprehensive and practical learning experience.",
			outline: {
				heading: "What You Will Learn",
				subtext:
					"Here is the course outline for Cloud Computing (Dev Ops)",
				list: [
					"Introduction to Cloud Computing",
					"Setting up a Cloud Environment",
					"Cloud Identity and Access Management (IAM)",
					"Introduction to Networking in the Cloud",
					"Introduction to Cloud Storage",
					"Elastic Compute Cloud",
					"Database",
					"ELB, ASG and Leveraging Global Infrastructure",
					"Serverless Computing/Containerization",
					"Monitoring & Reporting",
					"Cloud Migration and Strategy",
					"Billing & Cost Management",
					"Infrastructure as Code (IaC)",
					"Cloud Security Best Practices",
					"Advanced Cloud Services",
					"Capstone Project",
				],
				listwithdd: [],
			},
			process: {
				heading: "Course Details",
				subtext:
					"Find out the process, requirements and fees for this course.",
				payment: {
					heading: "Payment Options:",
					list: [
						"Full upfront payment option",
						`Installment payment with a 3-month tenure; 1st month 40% subsequent months 30%.`,
					],
				},
				duration: {
					heading: "Course Duration:",
					text: "6 months",
					list: [
						"2 months of immersive theoretical learning",
						"2 months of practical coursework",
						"2 months of multi-unit project collaboration",
					],
				},
				comitment: {
					heading: "Time Commitment:",
					text: " Monday, Wednesday, Thursdays & Saturdays. 3x per/week.",
				},
				location: {
					heading: "Location:",
					text: "Online/ Virtual",
				},
				eligibility: {
					heading: "Eligibility:",
					list: [
						"The training is open to Undergraduates, Graduates and Individuals seeking to build a career in the Tech space, SIWES.",
						"Have access to a workstation/computer and a reliable network.",
					],
				},
			},
		},
		pricecard: {
			full: {
				heading: "Full Upfront Cost",
				price: "N 150,000",
				period: "One Time Payment",
			},
			monthly: {
				heading: "3-Month Tenure Cost",
				month: [
					{
						price: "N 60,000",
						period: "First Month",
					},
					{
						price: "N 45,000",
						period: "Second Month",
					},
					{
						price: "N 45,000",
						period: "Third Month",
					},
				],
			},
		},
		courses: {
			label: "Courses Name",
			placeholder: "Select Courses",
			name: "course",
			options: [
				"Frontend Basic Course",
				"Frontend Expert Course (React.js)",
				"Frontend Expert Course (Next.js)",
				,
			],
		},
	},

	{
		img: "/assets/lms/enroll_courses/img4.jpeg",
		name: "QA/Software Testing",
		route: "qasoftwaretesting",
		details: {
			heading: "QA/Software Testing",
			check: "/assets/learning_path/checkmark.svg",
			subtext:
				"Our software testing (QA) course equips you with the skills to identify, document, and track software bugs efficiently using industry-standard tools. Whether you're a complete beginner or a professional looking to refine your testing expertise, this course provides a comprehensive and practical learning experience.",
			outline: {
				heading: "What You Will Learn",
				subtext: "Here is the course outline for QA/Software testing",
				list: [
					"Introduction to Software QA Testing",
					"Testing Fundamentals",
					"Software Testing Principles and Methodologies",
					"Test Case Design and Development",
					"Test Automation Tools and Frameworks",
					"API Testing and Performance Testing",
					"Quality Assurance Best Practices",
					"Test Reporting and Analysis",
					"Agile Testing & Practices",
					"Test-Driven Development (TDD)",
					"Continuous Testing and Integration",
					"Exploratory Testing and Session-Based Test Management",
					"Testing in Agile Environments",
				],
				listwithdd: [],
			},
			process: {
				heading: "Course Details",
				subtext:
					"Find out the process, requirements and fees for this course.",
				payment: {
					heading: "Payment Options:",
					list: [
						"Full upfront payment option",
						`Installment payment with a 3-month tenure; 1st month 40% subsequent months 30%.`,
					],
				},
				duration: {
					heading: "Course Duration:",
					text: "6 months",
					list: [
						"2 months of immersive theoretical learning",
						"2 months of practical coursework",
						"2 months of multi-unit project collaboration",
					],
				},
				comitment: {
					heading: "Time Commitment:",
					text: "Monday, Wednesday, Thursdays & Saturdays. 3x per/week.",
				},
				location: {
					heading: "Location:",
					text: "Online/ Virtual",
				},
				eligibility: {
					heading: "Eligibility:",
					list: [
						"The training is open to Undergraduates, Graduates and Individuals seeking to build a career in the Tech space, SIWES.",
						"Have access to a workstation/computer and a reliable network.",
					],
				},
			},
		},
		pricecard: {
			full: {
				heading: "Full Upfront Cost",
				price: "N 150,000",
				period: "One Time Payment",
			},
			monthly: {
				heading: "3-Month Tenure Cost",
				month: [
					{
						price: "N 60,000",
						period: "First Month",
					},
					{
						price: "N 45,000",
						period: "Second Month",
					},
					{
						price: "N 45,000",
						period: "Third Month",
					},
				],
			},
		},
		courses: {
			label: "Courses Name",
			placeholder: "Select Courses",
			name: "course",
			options: [
				"Frontend Basic Course",
				"Frontend Expert Course (React.js)",
				"Frontend Expert Course (Next.js)",
				,
			],
		},
	},

	{
		img: "/assets/lms/enroll_courses/img5.jpeg",
		name: "Cyber Security",
		route: "cybersecurity",
		details: {
			heading: "Cyber Security",
			check: "/assets/learning_path/checkmark.svg",
			subtext:
				"Our software testing (QA) course equips you with the skills to identify, document, and track software bugs efficiently using industry-standard tools. Whether you're a complete beginner or a professional looking to refine your testing expertise, this course provides a comprehensive and practical learning experience.",
			outline: {
				heading: "What You Will Learn",
				subtext: "Here is the course outline for Cyber Security",
				list: [],
				listwithdd: [],
			},

			process: {
				heading: "Course Details",
				subtext:
					"Find out the process, requirements and fees for this course.",
				payment: {
					heading: "Payment Options:",
					list: [
						"Full upfront payment option",
						`Installment payment with a 3-month tenure; 1st month 40% subsequent months 30%.`,
					],
				},
				duration: {
					heading: "Course Duration:",
					text: "6 months",
					list: [
						"2 months of immersive theoretical learning",
						"2 months of practical coursework",
						"2 months of multi-unit project collaboration",
					],
				},
				comitment: {
					heading: "Time Commitment:",
					text: " Monday, Wednesday, Thursdays & Saturdays. 3x per/week.",
				},
				location: {
					heading: "Location:",
					text: "Online/ Virtual",
				},
				eligibility: {
					heading: "Eligibility:",
					list: [
						"The training is open to Undergraduates, Graduates and Individuals seeking to build a career in the Tech space, SIWES.",
						"Have access to a workstation/computer and a reliable network.",
					],
				},
			},
		},
		pricecard: {
			full: {
				heading: "Full Upfront Cost",
				price: "N 150,000",
				period: "One Time Payment",
			},
			monthly: {
				heading: "3-Month Tenure Cost",
				month: [
					{
						price: "N 60,000",
						period: "First Month",
					},
					{
						price: "N 45,000",
						period: "Second Month",
					},
					{
						price: "N 45,000",
						period: "Third Month",
					},
				],
			},
		},
		courses: {
			label: "Courses Name",
			placeholder: "Select Courses",
			name: "course",
			options: [
				"Frontend Basic Course",
				"Frontend Expert Course (React.js)",
				"Frontend Expert Course (Next.js)",
				,
			],
		},
	},
];

const PRODUCT = [
	{
		img: "/assets/lms/enroll_courses/img8.jpeg",
		name: "Product Design (UI/UX)",
		route: "productdesign",
		details: {
			heading: "Product Design (UI/UX)",
			check: "/assets/learning_path/checkmark.svg",
			subtext:
				"Our program welcomes those new to the field and those looking to refine their existing skills. In this course you get to master the core principles of both user interface (UI) design and user experience (UX) design, understanding how they work together to create an integrated product experience.",
			outline: {
				heading: "What You Will Learn",
				subtext:
					"Here is the course outline for Product Design (UI/UX)",
				list: [
					"Introduction to UI/UX Design",
					"Fundamentals of User Experience (UX) Design",
					"User Research Methods",
					"Wireframing",
					"Prototyping",
					"Usability Testing ",
					"User Interface (UI) Design",
					"Advanced UI Design Techniques",
					"Empathy Mapping",
					"Product Lifecycle and Management",
					"Portfolio Development",
					"Capstone Project",
				],
				listwithdd: [],
			},
			process: {
				heading: "Course Details",
				subtext:
					"Find out the process, requirements and fees for this course.",
				payment: {
					heading: "Payment Options:",
					list: [
						"Full upfront payment option",
						`Installment payment with a 3-month tenure; 1st month 40% subsequent months 30%.`,
					],
				},
				duration: {
					heading: "Course Duration:",
					text: "6 months",
					list: [
						"2 months of immersive theoretical learning",
						"2 months of practical coursework",
						"2 months of multi-unit project collaboration",
					],
				},
				comitment: {
					heading: "Time Commitment:",
					text: " Monday, Wednesday, Thursdays & Saturdays. 3x per/week.",
				},
				location: {
					heading: "Location:",
					text: "Online/ Virtual",
				},
				eligibility: {
					heading: "Eligibility:",
					list: [
						"The training is open to Undergraduates, Graduates and Individuals seeking to build a career in the Tech space, SIWES.",
						"Have access to a workstation/computer and a reliable network.",
					],
				},
			},
		},
		pricecard: {
			full: {
				heading: "Full Upfront Cost",
				price: "N 150,000",
				period: "One Time Payment",
			},
			monthly: {
				heading: "3-Month Tenure Cost",
				month: [
					{
						price: "N 60,000",
						period: "First Month",
					},
					{
						price: "N 45,000",
						period: "Second Month",
					},
					{
						price: "N 45,000",
						period: "Third Month",
					},
				],
			},
		},
		courses: {
			label: "Courses Name",
			placeholder: "Select Courses",
			name: "course",
			options: [
				"Frontend Basic Course",
				"Frontend Expert Course (React.js)",
				"Frontend Expert Course (Next.js)",
				,
			],
		},
	},

	{
		img: "/assets/lms/enroll_courses/img9.jpeg",
		name: "Product Management",
		route: "productmanagement",
		details: {
			heading: "Product Management",
			check: "/assets/learning_path/checkmark.svg",
			subtext:
				"Our product management program is for all, if you're a recent graduate, a seasoned professional seeking a career shift, or an entrepreneur with a product vision, this course empowers you to excel in the dynamic world of product management. Develop a strong foundation in product strategy frameworks, user experience (UX) design principles, and competitive analysis to create successful product roadmaps",
			outline: {
				heading: "What You Will Learn",
				subtext: "Here is the course outline for Product management",
				list: [
					"Introduction to Product Management",
					"Determine Target Customer Strategy",
					"Creating an Opportunity Hypothesis",
					"Define and Design Your Product from Ideas to Action",
					"Choosing Prioritization Matrix",
					"Creating Product Requirement Documents (PRDs)",
					"Product Development Lifecycle",
					"Measure and Iterate Your Product",
					"Collaborating with Cross Functional Teams",
					"Working with Engineers",
					"Demo Your Products",
					"Creating Launch Plans and Release Notes",
					"Handling and Prioritizing Feedback",
				],
				listwithdd: [],
			},
			process: {
				heading: "Course Details",
				subtext:
					"Find out the process, requirements and fees for this course.",
				payment: {
					heading: "Payment Options:",
					list: [
						"Full upfront payment option",
						`Installment payment with a 3-month tenure; 1st month 40% subsequent months 30%.`,
					],
				},
				duration: {
					heading: "Course Duration:",
					text: "6 months",
					list: [
						"2 months of immersive theoretical learning",
						"2 months of practical coursework",
						"2 months of multi-unit project collaboration",
					],
				},
				comitment: {
					heading: "Time Commitment:",
					text: " Monday, Wednesday, Thursdays & Saturdays. 3x per/week.",
				},
				location: {
					heading: "Location:",
					text: "Online/ Virtual",
				},
				eligibility: {
					heading: "Eligibility:",
					list: [
						"The training is open to Undergraduates, Graduates and Individuals seeking to build a career in the Tech space, SIWES.",
						"Have access to a workstation/computer and a reliable network.",
					],
				},
			},
		},
		pricecard: {
			full: {
				heading: "Full Upfront Cost",
				price: "N 150,000",
				period: "One Time Payment",
			},
			monthly: {
				heading: "3-Month Tenure Cost",
				month: [
					{
						price: "N 60,000",
						period: "First Month",
					},
					{
						price: "N 45,000",
						period: "Second Month",
					},
					{
						price: "N 45,000",
						period: "Third Month",
					},
				],
			},
		},
		courses: {
			label: "Courses Name",
			placeholder: "Select Courses",
			name: "course",
			options: [
				"Frontend Basic Course",
				"Frontend Expert Course (React.js)",
				"Frontend Expert Course (Next.js)",
				,
			],
		},
	},

	{
		img: "/assets/lms/enroll_courses/img10.jpeg",
		name: "Project Management",
		route: "projectmanagement",
		details: {
			heading: "Project Management",
			check: "/assets/learning_path/checkmark.svg",
			subtext:
				"Our program equips you with the concepts of project management, including the project lifecycle, project scope definition, and project planning methodologies. Explore modern project management methodologies like Agile, Scrum, and Kanban, ideal for fast-paced environments and iterative development.",
			outline: {
				heading: "What You Will Learn",
				subtext: "Here is the course outline for Project Management",
				list: [
					"Introduction to Project Management",
					"Project Initiation",
					"Project Planning",
					"Project Execution",
					"Project Closure",
					"Advanced Project Management Techniques",
					"Project Portfolio Management",
					"Leadership and Communication in Project Management",
					"Stakeholder Management",
					"Project Management Tools and Software",
					"Working with Engineers",
					"Project Management Certification Preparation",
				],
				listwithdd: [],
			},
			process: {
				heading: "Course Details",
				subtext:
					"Find out the process, requirements and fees for this course.",
				payment: {
					heading: "Payment Options:",
					list: [
						"Full upfront payment option",
						`Installment payment with a 3-month tenure; 1st month 40% subsequent months 30%.`,
					],
				},
				duration: {
					heading: "Course Duration:",
					text: "6 months",
					list: [
						"2 months of immersive theoretical learning",
						"2 months of practical coursework",
						"2 months of multi-unit project collaboration",
					],
				},
				comitment: {
					heading: "Time Commitment:",
					text: " Monday, Wednesday, Thursdays & Saturdays. 3x per/week.",
				},
				location: {
					heading: "Location:",
					text: "Online/ Virtual",
				},
				eligibility: {
					heading: "Eligibility:",
					list: [
						"The training is open to Undergraduates, Graduates and Individuals seeking to build a career in the Tech space, SIWES.",
						"Have access to a workstation/computer and a reliable network.",
					],
				},
			},
		},
		pricecard: {
			full: {
				heading: "Full Upfront Cost",
				price: "N 150,000",
				period: "One Time Payment",
			},
			monthly: {
				heading: "3-Month Tenure Cost",
				month: [
					{
						price: "N 60,000",
						period: "First Month",
					},
					{
						price: "N 45,000",
						period: "Second Month",
					},
					{
						price: "N 45,000",
						period: "Third Month",
					},
				],
			},
		},
		courses: {
			label: "Courses Name",
			placeholder: "Select Courses",
			name: "course",
			options: [
				"Frontend Basic Course",
				"Frontend Expert Course (React.js)",
				"Frontend Expert Course (Next.js)",
				,
			],
		},
	},
];

const DATA = [
	{
		img: "/assets/lms/enroll_courses/img6.jpeg",
		name: "Data Science",
		route: "datascience",
		details: {
			heading: "Data Science",
			check: "/assets/learning_path/checkmark.svg",
			subtext:
				"Our data science course equips you with the core concepts of data science which includes the data science lifecycle, statistical analysis methods, and machine learning principles. Considering if you're a complete beginner or a professional looking to refine your expertise, our program provides a practical and project-oriented learning experience. ",
			outline: {
				heading: "What You Will Learn",
				subtext: "Here is the course outline for Data Science",
				list: [
					"Introduction to Data Science",
					"Microsoft Excel",
					"Introduction to VBA Script",
					"Introduction to Python for Data Science",
					"Data Manipulation with Python Libraries",
					"Data Visualization with Matplotlib",
					"Web Data Acquisition",
					"SQL and Relational Databases",
					"Introduction to NoSQL",
					"Advanced Data Processing Techniques",
					"Introduction to Data Visualization Tools",
					"Big Data Technologies",
					"Machine Learning Fundamentals",
					"Advanced Machine Learning",
					"Advanced Topics in Data Science",
					"Deployment and Productionisation",
					"Ethical Considerations in Data Science",
				],
				listwithdd: [],
			},
			process: {
				heading: "Course Details",
				subtext:
					"Find out the process, requirements and fees for this course.",
				payment: {
					heading: "Payment Options:",
					list: [
						"Full upfront payment option",
						`Installment payment with a 3-month tenure; 1st month 40% subsequent months 30%.`,
					],
				},
				duration: {
					heading: "Course Duration:",
					text: "6 months",
					list: [
						"2 months of immersive theoretical learning",
						"2 months of practical coursework",
						"2 months of multi-unit project collaboration",
					],
				},
				comitment: {
					heading: "Time Commitment:",
					text: "Monday, Wednesday, Thursdays & Saturdays. 3x per/week.",
				},
				location: {
					heading: "Location:",
					text: "Online/ Virtual",
				},
				eligibility: {
					heading: "Eligibility:",
					list: [
						"The training is open to Undergraduates, Graduates and Individuals seeking to build a career in the Tech space, SIWES.",
						"Have access to a workstation/computer and a reliable network.",
					],
				},
			},
		},
		pricecard: {
			full: {
				heading: "Full Upfront Cost",
				price: "N 150,000",
				period: "One Time Payment",
			},
			monthly: {
				heading: "3-Month Tenure Cost",
				month: [
					{
						price: "N 60,000",
						period: "First Month",
					},
					{
						price: "N 45,000",
						period: "Second Month",
					},
					{
						price: "N 45,000",
						period: "Third Month",
					},
				],
			},
		},
		courses: {
			label: "Courses Name",
			placeholder: "Select Courses",
			name: "course",
			options: [
				"Frontend Basic Course",
				"Frontend Expert Course (React.js)",
				"Frontend Expert Course (Next.js)",
				,
			],
		},
	},

	{
		img: "/assets/lms/enroll_courses/img7.jpeg",
		name: "Data Analysis",
		route: "dataanalysis",
		details: {
			heading: "Data Analysis",
			check: "/assets/learning_path/checkmark.svg",
			subtext:
				"Our Data Analysis course caters to beginners and aspiring data analysts alike. If you're a recent graduate, a career changer, or a professional looking to expand your skills our program provides an in-depth and practical foundation in data analysis",
			outline: {
				heading: "What You Will Learn",
				subtext: "Here is the course outline for Data Analysis",
				list: [
					"Introduction to Data Analysis",
					"Importing and Cleaning Data",
					"Descriptive Statistics",
					"Statistical Function",
					"Variance and Standard Deviations Histogram and Frequency Analysis",
					"Correlation and Linear Regression",
					"Forecasting Techniques",
					"T Tests and ANOVA",
					"Query Language - SQL",
					"Data Visualization",
					"Programming Language - R",
					"Advanced Excel Techniques and Projects",
				],
				listwithdd: [],
			},
			process: {
				heading: "Course Details",
				subtext:
					"Find out the process, requirements and fees for this course.",
				payment: {
					heading: "Payment Options:",
					list: [
						"Full upfront payment option",
						`Installment payment with a 3-month tenure; 1st month 40% subsequent months 30%.`,
					],
				},
				duration: {
					heading: "Course Duration:",
					text: "6 months",
					list: [
						"2 months of immersive theoretical learning",
						"2 months of practical coursework",
						"2 months of multi-unit project collaboration",
					],
				},
				comitment: {
					heading: "Time Commitment:",
					text: " Monday, Wednesday, Thursdays & Saturdays. 3x per/week.",
				},
				location: {
					heading: "Location:",
					text: "Online/ Virtual",
				},
				eligibility: {
					heading: "Eligibility:",
					list: [
						"The training is open to Undergraduates, Graduates and Individuals seeking to build a career in the Tech space, SIWES.",
						"Have access to a workstation/computer and a reliable network.",
					],
				},
			},
		},
		pricecard: {
			full: {
				heading: "Full Upfront Cost",
				price: "N 150,000",
				period: "One Time Payment",
			},
			monthly: {
				heading: "3-Month Tenure Cost",
				month: [
					{
						price: "N 60,000",
						period: "First Month",
					},
					{
						price: "N 45,000",
						period: "Second Month",
					},
					{
						price: "N 45,000",
						period: "Third Month",
					},
				],
			},
		},
		courses: {
			label: "Courses Name",
			placeholder: "Select Courses",
			name: "course",
			options: [
				"Frontend Basic Course",
				"Frontend Expert Course (React.js)",
				"Frontend Expert Course (Next.js)",
				,
			],
		},
	},
];

const BUSINESS = [
	{
		img: "/assets/lms/enroll_courses/img11.jpeg",
		name: "Business Analysis",
		route: "businessanalysis",
		details: {
			heading: "Business Analysis",
			check: "/assets/learning_path/checkmark.svg",
			subtext:
				"Our program provides the core concepts of business analysis, including the Business Analysis Body of Knowledge (BABOK) framework, requirement elicitation techniques, and various business analysis tools.",
			outline: {
				heading: "What You Will Learn",
				subtext: "Here is the course outline for Business Analysis",
				list: [
					"Introduction to Business Analysis",
					"Elicitation and Collaboration",
					"Requirements Lifecycle Management",
					"Strategy Analysis",
					"Requirements Analysis and Design Definition",
					"Solution Evaluation",
					"Project Management Fundamentals",
					"Traditional Project Management",
					"Agile Methodologies",
					"Hybrid Project Management",
					"Advanced Project Management",
					"Performance and Metrics",
					"Advanced Agile and Scrum Frameworks",
				],
				listwithdd: [],
			},
			process: {
				heading: "Course Details",
				subtext:
					"Find out the process, requirements and fees for this course.",
				payment: {
					heading: "Payment Options:",
					list: [
						"Full upfront payment option",
						`Installment payment with a 3-month tenure; 1st month 40% subsequent months 30%.`,
					],
				},
				duration: {
					heading: "Course Duration:",
					text: "6 months",
					list: [
						"2 months of immersive theoretical learning",
						"2 months of practical coursework",
						"2 months of multi-unit project collaboration",
					],
				},
				comitment: {
					heading: "Time Commitment:",
					text: " Monday, Wednesday, Thursdays & Saturdays. 3x per/week.",
				},
				location: {
					heading: "Location:",
					text: "Online/ Virtual",
				},
				eligibility: {
					heading: "Eligibility:",
					list: [
						"The training is open to Undergraduates, Graduates and Individuals seeking to build a career in the Tech space, SIWES.",
						"Have access to a workstation/computer and a reliable network.",
					],
				},
			},
		},
		pricecard: {
			full: {
				heading: "Full Upfront Cost",
				price: "N 150,000",
				period: "One Time Payment",
			},
			monthly: {
				heading: "3-Month Tenure Cost",
				month: [
					{
						price: "N 60,000",
						period: "First Month",
					},
					{
						price: "N 45,000",
						period: "Second Month",
					},
					{
						price: "N 45,000",
						period: "Third Month",
					},
				],
			},
		},
		courses: {
			label: "Courses Name",
			placeholder: "Select Courses",
			name: "course",
			options: [
				"Frontend Basic Course",
				"Frontend Expert Course (React.js)",
				"Frontend Expert Course (Next.js)",
				,
			],
		},
	},
];

const SEARCH = {
	search: "/assets/lms/enroll_courses/search.svg",
	searchW: "/assets/lms/enroll_courses/searchW.svg",
	searchB: "/assets/lms/enroll_courses/searchB.svg",
	close: "/assets/lms/enroll_courses/x.svg",
	filter: "/assets/lms/enroll_courses/filter.svg",
	placeholder: "Search for course",
};

const ENROLLFORM = {
	heading: "Enroll Course",
	subtext: "Fill in the information",
	cancel: "Cancel",
	next: "Next",
};

const REFERRAL = {
	label: "Referral Link",
	placeholder: "Link",
	type: "text",
	name: "referral_link",
};

export {
	TABS,
	CHECK,
	ENGINEERING,
	PRODUCT,
	DATA,
	BUSINESS,
	SEARCH,
	ENROLLFORM,
	REFERRAL,
};
