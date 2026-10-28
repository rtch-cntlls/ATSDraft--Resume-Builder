export const templateMarketing = {
    header: {
        fullName: 'John Doe',
        email: 'john.doe.mkt@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/johndoe-mkt',
        headerOrder: ['location', 'phone', 'email', 'linkedin']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Results-driven Marketing graduate with training in content strategy, search engine optimization (SEO), social media management, and digital ad campaigns.',
    skillsTitle: 'Marketing & Tool Competencies',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Digital Channels', items: 'Social Media Marketing, Content Creation, Email Marketing, SEO' },
            { id: 2, title: 'Analytics & Ads', items: 'Google Analytics 4, Meta Ads Manager, Google Ads, Semrush' },
            { id: 3, title: 'Creative Tools', items: 'Canva, Adobe Premiere Rush, WordPress, Mailchimp' }
        ]
    },
    workExperienceTitle: 'Marketing Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Digital Marketing Intern',
            company: 'Growth Media Agency',
            location: 'Manila, Philippines',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Scheduled social media content calendars and wrote copy for brand channels.\n• Monitored engagement metrics and assisted with monthly client analytics reporting.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'B.S. in Business Administration (Major in Marketing)', institution: 'University of Manila', location: 'Manila, Philippines', graduationDate: 'May 2026' }
    ],
    certificatesTitle: 'Certifications',
    certificates: [
        { id: 1, name: 'Google Search Ads Certification', issuer: 'Google', date: '2025' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, projects: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'projects', 'education', 'certificates']
    }
};