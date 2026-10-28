export const templateSocialWork = {
    header: {
        fullName: 'John Doe',
        email: 'john.doe.sw@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/johndoe-sw',
        headerOrder: ['location', 'phone', 'email', 'linkedin']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Compassionate Social Work graduate with experience in case assessment, community outreach, and crisis intervention protocols.',
    skillsTitle: 'Core Competencies',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Direct Care', items: 'Case Management, Crisis Intervention, Client Intake, Counseling Techniques' },
            { id: 2, title: 'Community Work', items: 'Community Outreach, Resource Coordination, Group Facilitation' }
        ]
    },
    workExperienceTitle: 'Social Work Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Social Work Intern',
            company: 'Community Care Foundation',
            location: 'Manila, Philippines',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Conducted initial intake evaluations and maintained confidential case logs.\n• Connected clients with local government welfare and healthcare services.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'Bachelor of Science in Social Work (BSSW)', institution: 'University of Manila', location: 'Manila, Philippines', graduationDate: 'May 2026' }
    ],
    certificatesTitle: 'Licensure & Credentials',
    certificates: [
        { id: 1, name: 'Licensed Social Worker Board Eligible', issuer: 'PRC', date: '2026' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, fieldPlacement: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'fieldPlacement', 'education', 'certificates']
    }
};