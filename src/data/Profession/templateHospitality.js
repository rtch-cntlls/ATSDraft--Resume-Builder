export const templateHospitality = {
    header: {
        fullName: 'Jane Doe',
        email: 'jane.doe.hosp@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/janedoe-hosp',
        headerOrder: ['location', 'phone', 'email', 'linkedin']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Customer-focused Hospitality Management graduate with practical experience in front-desk operations, guest relations, food safety, and event planning.',
    skillsTitle: 'Hospitality Skills',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Operations', items: 'Front Office Management, Guest Relations, POS Systems, Event Coordination' },
            { id: 2, title: 'Health & Safety', items: 'Food Safety Standards, Sanitation Protocols, HACCP Guidelines' }
        ]
    },
    workExperienceTitle: 'Hospitality Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Hotel Front Desk Intern',
            company: 'Grand Heritage Hotel',
            location: 'Manila, Philippines',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Managed guest check-in/check-outs and handled guest queries promptly.\n• Processed reservation bookings through property management systems.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'B.S. in Hospitality Management', institution: 'University of Manila', location: 'Manila, Philippines', graduationDate: 'May 2026' }
    ],
    certificatesTitle: 'Certifications',
    certificates: [
        { id: 1, name: 'Food Safety & Hygiene Certification (ServSafe)', issuer: 'National Restaurant Assoc.', date: '2025' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'education', 'certificates']
    }
};