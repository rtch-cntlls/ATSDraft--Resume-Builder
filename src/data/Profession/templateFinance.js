export const templateFinance = {
    header: {
        fullName: 'Jane Doe',
        email: 'jane.doe.fin@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/janedoe-fin',
        headerOrder: ['location', 'phone', 'email', 'linkedin']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Detail-oriented Finance graduate with expertise in financial modeling, valuation analysis, portfolio simulation, and econometrics. Proficient in Advanced Excel and quantitative research methods.',
    skillsTitle: 'Financial & Analytical Skills',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Financial Analysis', items: 'DCF Valuation, Financial Modeling, Ratio Analysis, Budget Forecasting' },
            { id: 2, title: 'Software & Tools', items: 'Advanced MS Excel (VLOOKUP, Index/Match), R, Stata, Bloomberg Terminal' },
            { id: 3, title: 'Core Knowledge', items: 'Corporate Finance, Capital Markets, Econometrics, Risk Management' }
        ]
    },
    workExperienceTitle: 'Finance Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Financial Analyst Intern',
            company: 'Capital Investments Inc.',
            location: 'Manila, Philippines',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Conducted financial statement analysis and variance tracking for corporate clients.\n• Assisted in preparing quarterly market review slides for investment advisors.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'B.S. in Finance', institution: 'University of Manila', location: 'Manila, Philippines', graduationDate: 'May 2026' }
    ],
    certificatesTitle: 'Certifications',
    certificates: [
        { id: 1, name: 'Financial Modeling & Valuation Analyst (FMVA)', issuer: 'CFI', date: '2025' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, projects: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'projects', 'education', 'certificates']
    }
};