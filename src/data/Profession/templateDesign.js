export const templateDesign = {
    header: {
        fullName: 'Jane Doe',
        email: 'jane.doe.design@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/janedoe-design',
        github: '',
        headerOrder: ['location', 'phone', 'email', 'linkedin']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Creative UI/UX Designer skilled in wireframing, interactive prototyping, user research, and visual design. Focused on creating intuitive, human-centered digital experiences.',
    skillsTitle: 'Design & Software Skills',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Design & Prototyping', items: 'Figma, Adobe XD, Illustrator, Photoshop, InDesign' },
            { id: 2, title: 'UX Methods', items: 'User Research, Wireframing, User Journey Mapping, Usability Testing' },
            { id: 3, title: 'Frontend Awareness', items: 'HTML5, CSS3, Responsive Design Systems' }
        ]
    },
    workExperienceTitle: 'Design Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'UI/UX Design Intern',
            company: 'Creative Digital Studio',
            location: 'Manila, Philippines',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Designed high-fidelity wireframes and mobile UI layouts in Figma.\n• Conducted usability tests with target users to refine interface navigation.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'B.S. in Multimedia Arts', institution: 'University of Manila', location: 'Manila, Philippines', graduationDate: 'May 2026' }
    ],
    certificatesTitle: 'Certifications',
    certificates: [
        { id: 1, name: 'UX Design Professional Certificate', issuer: 'Design Academy', date: '2025' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, projects: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'projects', 'education', 'certificates']
    }
};