export const templateEngineering = {
    header: {
        fullName: 'John Doe',
        email: 'john.doe.eng@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/johndoe-eng',
        headerOrder: ['location', 'phone', 'email', 'linkedin']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Detail-oriented Civil Engineering graduate with training in structural analysis, CAD drafting, site inspections, and material testing. Solid foundation in safety compliance and technical documentation.',
    skillsTitle: 'Engineering Skills',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'CAD & Design Software', items: 'AutoCAD, SolidWorks, Civil 3D, MATLAB, MS Project' },
            { id: 2, title: 'Engineering Competencies', items: 'Structural Analysis, Quantity Surveying, Material Testing, Quality Control' },
            { id: 3, title: 'Codes & Safety', items: 'National Building Codes, OSH Standards, Site Inspection' }
        ]
    },
    workExperienceTitle: 'Engineering Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Field Engineering Trainee',
            company: 'Apex Builders Corp.',
            location: 'Manila, Philippines',
            startDate: 'Jan 2026',
            endDate: 'Present',
            description: '• Assisted site engineers with blueprint reviews and daily quality assurance checks.\n• Logged site progress and verified material specifications against technical drawings.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'B.S. in Civil Engineering', institution: 'University of Manila', location: 'Manila, Philippines', graduationDate: 'May 2026' }
    ],
    certificatesTitle: 'Certifications & Licenses',
    certificates: [
        { id: 1, name: 'Civil Engineer Licensure (Passed)', issuer: 'PRC', date: '2026' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, projects: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'projects', 'education', 'certificates']
    }
};