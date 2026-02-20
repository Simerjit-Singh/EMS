// localStorage.clear();

const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@company.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Create monthly sales performance report.",
        taskDate: "2026-02-15",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Follow-up",
        taskDescription: "Follow up with existing clients for feedback.",
        taskDate: "2026-02-10",
        category: "Communication",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update CRM",
        taskDescription: "Update outdated entries in CRM system.",
        taskDate: "2026-02-08",
        category: "Data Entry",
      },
    ],
  },
  {
    id: 2,
    firstname: "Vivaan",
    email: "employee2@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create UI design for new landing page.",
        taskDate: "2026-02-18",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsive issue in navbar.",
        taskDate: "2026-02-14",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logo Redesign",
        taskDescription: "Redesign company logo with new branding.",
        taskDate: "2026-02-05",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Test Checkout Flow",
        taskDescription: "Test and report checkout process errors.",
        taskDate: "2026-02-07",
        category: "QA",
      },
    ],
  },
  {
    id: 3,
    firstname: "Arjun",
    email: "employee3@company.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Perform weekly database backup.",
        taskDate: "2026-02-16",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Maintenance",
        taskDescription: "Routine maintenance of server hardware.",
        taskDate: "2026-02-09",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Audit",
        taskDescription: "Run internal security vulnerability checks.",
        taskDate: "2026-02-06",
        category: "Security",
      },
    ],
  },
  {
    id: 4,
    firstname: "Ishaan",
    email: "employee4@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Blog Post",
        taskDescription: "Draft blog on latest tech trends.",
        taskDate: "2026-02-20",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Social Media Campaign",
        taskDescription: "Plan campaign for product launch.",
        taskDate: "2026-02-17",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Newsletter",
        taskDescription: "Send weekly newsletter to subscribers.",
        taskDate: "2026-02-11",
        category: "Marketing",
      },
    ],
  },
  {
    id: 5,
    firstname: "Kabir",
    email: "employee5@company.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Recruitment Drive",
        taskDescription: "Conduct interviews for frontend developer role.",
        taskDate: "2026-02-19",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Policy Update",
        taskDescription: "Update employee leave policy document.",
        taskDate: "2026-02-04",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Onboarding Session",
        taskDescription: "Conduct onboarding for new hires.",
        taskDate: "2026-02-03",
        category: "HR",
      },
    ],
  },
];

const admin = [
  {
    id: 100,
    email: "admin@company.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("Admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("Admin"));

  return { employees, admin };
};
