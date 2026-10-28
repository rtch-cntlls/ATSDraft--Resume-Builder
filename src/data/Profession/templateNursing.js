export const templateNursing = {
    header: {
        fullName: 'Jane Doe, RN',
        email: 'jane.doe.rn@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/janedoe-rn',
        headerOrder: ['location', 'phone', 'email', 'linkedin']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Compassionate Registered Nurse with hands-on clinical training in medical-surgical units, patient assessment, medication administration, and emergency care.',
    skillsTitle: 'Clinical Skills',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Patient Care', items: 'Vital Signs Monitoring, Wound Care, IV Therapy, Medication Administration' },
            { id: 2, title: 'Clinical Protocols', items: 'Infection Control, BLS/ACLS, Patient Assessment, EHR/EMR Charting' }
        ]
    },
    workExperienceTitle: 'Clinical Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Staff Nurse Intern',
            company: 'Metropolitan Hospital',
            location: 'Manila, Philippines',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Monitored patient vital signs and maintained accurate EHR documentation.\n• Administered prescribed medications under senior staff supervision.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'B.S. in Nursing', institution: 'University of Manila', location: 'Manila, Philippines', graduationDate: 'May 2025' }
    ],
    certificatesTitle: 'Licensure & Certifications',
    certificates: [
        { id: 1, name: 'Registered Nurse (RN) License', issuer: 'PRC', date: '2025' },
        { id: 2, name: 'Basic Life Support (BLS)', issuer: 'AHA', date: '2025' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, clinicalRotations: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'clinicalRotations', 'education', 'certificates']
    }
};