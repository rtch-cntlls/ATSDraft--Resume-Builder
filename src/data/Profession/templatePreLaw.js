export const templatePreLaw = {
    header: {
        fullName: 'John Doe',
        email: 'john.doe.law@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/johndoe-prelaw',
        headerOrder: ['location', 'phone', 'email', 'linkedin']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Legal Management graduate with analytical research skills, background in legal writing, statutory analysis, and mock trial participation. Prepared for rigorous legal research roles.',
    skillsTitle: 'Core Competencies',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Legal & Writing', items: 'Legal Research, Brief Writing, Statutory Interpretation, Public Speaking' },
            { id: 2, title: 'Research & Tools', items: 'LexisNexis, Case Law Analysis, Qualitative Research, MS Office' }
        ]
    },
    workExperienceTitle: 'Legal Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Legal Intern',
            company: 'Manila Law Associates',
            location: 'Manila, Philippines',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Conducted legal jurisprudence research and summarized court case decisions.\n• Assisted in drafting preliminary legal affidavits and client correspondence.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'B.S. in Legal Management', institution: 'University of Manila', location: 'Manila, Philippines', graduationDate: 'May 2026' }
    ],
    certificatesTitle: 'Honors & Affiliations',
    certificates: [
        { id: 1, name: 'Best Oralist - University Mock Trial', issuer: 'Law Society', date: '2025' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, thesis: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'thesis', 'education', 'certificates']
    }
};