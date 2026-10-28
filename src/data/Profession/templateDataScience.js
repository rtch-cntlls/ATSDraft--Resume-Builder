export const templateDataScience = {
    header: {
        fullName: 'Jane Doe',
        email: 'jane.doe.ds@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/janedoe-data',
        github: 'github.com/janedoe-data',
        headerOrder: ['location', 'phone', 'email', 'linkedin', 'github']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Analytical Data Science graduate proficient in statistical modeling, machine learning, data cleaning, and business intelligence reporting. Skilled in extracting actionable insights from complex datasets.',
    skillsTitle: 'Data & Technical Skills',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Languages & Libraries', items: 'Python, R, SQL, Pandas, NumPy, Scikit-Learn, Matplotlib' },
            { id: 2, title: 'Analytics & Visualization', items: 'Tableau, Power BI, Excel (VBA/Pivot), Exploratory Data Analysis' },
            { id: 3, title: 'Database & Tools', items: 'PostgreSQL, MongoDB, Jupyter Notebook, Git' }
        ]
    },
    workExperienceTitle: 'Work Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Data Analytics Intern',
            company: 'Insight Analytics Corp.',
            location: 'Manila, Philippines',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Cleaned and structured raw transactional datasets using Python Pandas.\n• Built automated Power BI dashboards to track key performance metrics.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'B.S. in Statistics', institution: 'University of Manila', location: 'Manila, Philippines', graduationDate: 'May 2026' }
    ],
    certificatesTitle: 'Certifications',
    certificates: [
        { id: 1, name: 'Data Science Professional Certificate', issuer: 'Analytics Institute', date: '2025' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, projects: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'projects', 'education', 'certificates']
    }
};