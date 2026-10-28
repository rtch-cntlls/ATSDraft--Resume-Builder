export const templateEducation = {
    header: {
        fullName: 'John Doe',
        email: 'john.doe.edu@email.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        linkedin: 'linkedin.com/in/johndoe-edu',
        headerOrder: ['location', 'phone', 'email', 'linkedin']
    },
    summaryTitle: 'Professional Summary',
    summary: 'Dedicated Licensed Educator with experience in lesson planning, classroom management, student assessment, and EdTech integration across secondary school levels.',
    skillsTitle: 'Teaching Competencies',
    skillsConfig: {
        mode: 'categorized',
        categories: [
            { id: 1, title: 'Pedagogy', items: 'Curriculum Planning, Lesson Design, Differentiated Instruction, Student Assessment' },
            { id: 2, title: 'Educational Tech', items: 'Google Classroom, Canvas LMS, MS Teams, Interactive Whiteboards' }
        ]
    },
    workExperienceTitle: 'Teaching Experience',
    workExperience: [
        {
            id: 1,
            jobTitle: 'Secondary School Teacher',
            company: 'Manila High Academy',
            location: 'Manila, Philippines',
            startDate: 'Jun 2025',
            endDate: 'Present',
            description: '• Developed lesson plans for 120+ students aligned with national curriculum standards.\n• Conducted regular parent-teacher progress evaluations.'
        }
    ],
    educationTitle: 'Education',
    education: [
        { id: 1, degree: 'Bachelor of Secondary Education', institution: 'University of Manila', location: 'Manila, Philippines', graduationDate: 'May 2025' }
    ],
    certificatesTitle: 'Licensure & Certifications',
    certificates: [
        { id: 1, name: 'Licensure Examination for Teachers (LET)', issuer: 'PRC', date: '2025' }
    ],
    settings: {
        visibleSections: { summary: true, skills: true, workExperience: true, studentTeaching: true, education: true, certificates: true },
        sectionOrder: ['summary', 'skills', 'workExperience', 'studentTeaching', 'education', 'certificates']
    }
};