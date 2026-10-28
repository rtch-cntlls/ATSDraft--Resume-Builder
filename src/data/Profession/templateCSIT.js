export const templateCSIT = {
    header: {
        fullName: 'John Doe',
        email: 'john.doe.it@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/johndoe-dev',
        github: 'github.com/johndoe-code',
        headerOrder: ['location', 'phone', 'email', 'linkedin', 'github']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Proactive Information Technology graduate with experience building full-stack web applications, database schemas, and RESTful API services. Skilled in clean code practices, responsive UI design, and collaborative software development.',
    skillsTitle: 'Technical Skills',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Programming & Web', items: 'JavaScript, TypeScript, PHP, Python, HTML5, CSS3, React.js, Next.js' },
            { id: 2, title: 'Backend & Databases', items: 'Node.js, Express, Laravel, MySQL, PostgreSQL, Supabase' },
            { id: 3, title: 'Tools & Version Control', items: 'Git, GitHub, Postman, VS Code, Bootstrap 5, Tailwind CSS' }
        ]
    },
    workExperienceTitle: 'Work Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Software Developer Intern',
            company: 'Tech Solutions Inc.',
            location: 'Manila, Philippines',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Assisted in developing responsive frontend modules using Next.js and Bootstrap.\n• Wrote SQL scripts to optimize database queries for reporting endpoints.\n• Debugged code and participated in weekly agile sprint meetings.'
        }
    ],
    educationTitle: 'Education',
    education: [
        {
            id: 1,
            degree: 'B.S. in Computer Science',
            institution: 'University of Manila',
            location: 'Manila, Philippines',
            graduationDate: 'May 2026'
        }
    ],
    certificatesTitle: 'Certifications',
    certificates: [
        { id: 1, name: 'Full-Stack Web Development Certificate', issuer: 'Tech Training Institute', date: '2025' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, projects: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'projects', 'education', 'certificates']
    }
};