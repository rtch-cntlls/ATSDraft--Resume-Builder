export const templateAccounting = {
    header: {
        fullName: 'Jane Doe',
        email: 'jane.doe.cpa@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/janedoe-acc',
        headerOrder: ['location', 'phone', 'email', 'linkedin']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Detail-oriented Accountancy graduate eligible for the CPA licensure exam. Proficient in tax compliance, ledger reconciliation, auditing procedures, and financial reporting software.',
    skillsTitle: 'Accounting & Compliance Skills',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Core Accounting', items: 'General Ledger, Auditing, Tax Compliance, Financial Reporting, Cost Accounting' },
            { id: 2, title: 'Software & Systems', items: 'QuickBooks, SAP (Basic), MS Excel (Advanced), Xero' }
        ]
    },
    workExperienceTitle: 'Accounting Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Audit Intern',
            company: 'SGV & Co. / Accounting Firm',
            location: 'Manila, Philippines',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Assisted audit teams in performing test of controls and bank reconciliations.\n• Reviewed financial statements for tax compliance accuracy.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'B.S. in Accountancy', institution: 'University of Manila', location: 'Manila, Philippines', graduationDate: 'May 2026' }
    ],
    certificatesTitle: 'Certifications & Eligibility',
    certificates: [
        { id: 1, name: 'CPA Board Exam Eligible', issuer: 'BOA / PRC', date: '2026' },
        { id: 2, name: 'QuickBooks Certified User', issuer: 'Intuit', date: '2025' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'education', 'certificates']
    }
};