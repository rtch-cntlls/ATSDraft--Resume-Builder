export const atsResumeTemplate = {
    header: {
        fullName: 'John Doe',
        email: 'john.doe@email.com',
        phone: '+63 912 345 6789',
        location: 'City, Country',
        linkedin: 'linkedin.com/in/johndoe',
        github: 'github.com/johndoe',
        headerOrder: ['location', 'phone', 'email', 'linkedin', 'github']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Dedicated and versatile professional with a strong foundation in project execution, problem-solving, and cross-functional collaboration. Proven ability to streamline operations, analyze data, and deliver impactful results in fast-paced environments.',
    skillsTitle: 'Core Competencies',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Technical Skills', items: 'Data Analysis, System Navigation, Process Optimization, Documentation' },
            { id: 2, title: 'Professional Skills', items: 'Project Management, Team Collaboration, Strategic Planning, Communication' }
        ]
    },
    workExperienceTitle: 'Work Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Professional Intern / Associate',
            company: 'Acme Solutions Inc.',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Collaborated with team members to execute key project deliverables and optimize internal workflows.\n• Analyzed operational data and generated comprehensive reports to support strategic decision-making.'
        }
    ],
    projectsTitle: 'Projects & Key Initiatives',
    projects: [
        {
            id: 1,
            title: 'Enterprise Process Automation Initiative',
            technologies: 'Workflow Tools, Data Analysis',
            date: '2025 – 2026',
            description: '• Developed and implemented a systematic workflow process that reduced administrative overhead by 20%.\n• Coordinated cross-functional tasks to ensure timely project completion.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'B.S. in Field of Study', institution: 'University Name', location: 'City, Country', graduationDate: 'May 2026' }
    ],
    certificatesTitle: 'Certifications & Credentials',
    certificates: [
        { id: 1, name: 'Professional Certification / License', issuer: 'Issuing Organization', date: '2026' }
    ],
    settings: {
        visibleSections: { 
            summary: true, 
            skills: true, 
            workExperience: true, 
            projects: false, 
            education: true, 
            certificates: true 
        },
        sectionOrder: ['summary', 'skills', 'workExperience', 'projects', 'education', 'certificates'],
        titleColor: '#0f172a',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: 'normal'
    }
};