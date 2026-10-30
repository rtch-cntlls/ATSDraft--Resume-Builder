export const atsResumeTemplateWithPhoto = {
    header: {
        fullName: 'John Doe',
        photoUrl: '',
        email: 'john.doe@email.com',
        phone: '+63 912 345 6789',
        location: 'City, Country',
        linkedin: 'linkedin.com/in/johndoe',
        github: 'github.com/johndoe',
        headerOrder: [ 'phone', 'email', 'linkedin', 'github', 'location']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Dedicated and versatile professional with a strong foundation in project execution, problem-solving, and cross-functional collaboration.',
    skillsTitle: 'Skills',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Technical Skills', items: 'Data Analysis, System Navigation, Process Optimization' },
            { id: 2, title: 'Professional Skills', items: 'Project Management, Team Collaboration, Communication' }
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
            description: '• Collaborated with team members to execute key project deliverables.\n• Analyzed operational data and generated comprehensive reports.'
        }
    ],
    projectsTitle: 'Projects',
    projects: [
        {
            id: 1,
            title: 'Enterprise Process Automation Initiative',
            technologies: 'Workflow Automation, Data Analytics',
            date: '2025 – 2026',
            description: '• Developed and implemented a systematic workflow process that reduced operational overhead by 20%.\n• Coordinated cross-functional tasks to ensure timely project deliverables.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'B.S. in Field of Study', institution: 'University Name', location: 'City, Country', graduationDate: 'May 2026' }
    ],
    certificatesTitle: 'Certifications & Credentials',
    certificates: [
        { 
            id: 1, 
            name: 'Certified Associate in Project Management (CAPM)', 
            issuer: 'Project Management Institute', 
            date: '2026' 
        }
    ],
    settings: {
        templateId: 'photo-header-v1',
        showPhoto: true,
        photoShape: 'square',
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