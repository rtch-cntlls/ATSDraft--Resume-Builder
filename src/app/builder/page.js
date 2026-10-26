'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo/primary.png';
import BuilderSidebar from './components/buildersidebar';
import BuilderFormArea from './components/builderformarea';
import ResumePreview from './components/resumepreview';
import Link from 'next/link';

export default function BuilderPage() {
    const [activeSection, setActiveSection] = useState('header');
    const [isCollapsed, setIsCollapsed] = useState(false);
    const resumePreviewRef = useRef(null);

    const [resumeData, setResumeData] = useState({
        header: {
            fullName: 'Alex Morgan',
            email: 'alex.morgan@email.com',
            phone: '+1 (555) 234-5678',
            location: 'San Francisco, CA',
            linkedin: 'linkedin.com/in/alexmorgan',
            github: 'github.com/alexmorgan',
            headerOrder: ['location', 'phone', 'email', 'linkedin', 'github']
        },
        summary: 'Dedicated Full Stack Software Engineer with 4+ years of experience building scalable web applications using React, Next.js, Node.js, and PostgreSQL.',
        skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Bootstrap', 'Git'],
        workExperience: [
            {
                id: 1,
                jobTitle: 'Frontend Developer',
                company: 'TechCorp Solutions',
                location: 'San Francisco, CA',
                startDate: 'Jan 2023',
                endDate: 'Present',
                description: 'Spearheaded the migration of the core dashboard to Next.js, improving page load speeds by 40% and boosting user retention.'
            }
        ],
        education: [
            {
                id: 1,
                degree: 'B.S. in Information Technology',
                institution: 'University of California',
                location: 'Berkeley, CA',
                graduationDate: 'May 2022'
            }
        ],
        certificates: [
            {
                id: 1,
                name: 'AWS Certified Solutions Architect',
                issuer: 'Amazon Web Services',
                date: '2024'
            }
        ]
    });

    const handleDownloadPdf = async () => {
        if (typeof window !== 'undefined') {
            const html2pdf = (await import('html2pdf.js')).default;
            const element = resumePreviewRef.current;
            
            const options = {
                margin: 0,
                filename: `${resumeData.header.fullName.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            html2pdf().from(element).set(options).save();
        }
    };

    return (
        <div className="min-vh-100 d-flex flex-column bg-light">
            <header className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center shadow-sm">
                <div className="d-flex align-items-center gap-2">
                    <Image
                        src={Logo}
                        alt="ResuMake Logo"
                        width={40}
                        height={34}
                        className="d-inline-block align-text-top"
                    />
                    <div className="d-flex flex-column lh-1">
                        <span className="tracking-tight fw-bold fs-5 text-dark">
                            Resu<span className="text-primary">Make</span> Workspace
                        </span>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <button
                        className="btn btn-primary btn-sm rounded-pill px-4 fw-semibold"
                        onClick={handleDownloadPdf}
                    >
                        <i className="bi bi-download me-1"></i> Download PDF
                    </button>
                </div>
            </header>

            <div className="container-fluid flex-grow-1 overflow-hidden p-0">
                <div className="row g-0 h-100">

                    <div className="col-lg-6 d-flex bg-white border-end overflow-hidden" style={{ height: 'calc(100vh - 57px)' }}>

                        <BuilderSidebar
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                            isCollapsed={isCollapsed}
                            setIsCollapsed={setIsCollapsed}
                        />

                        <div className="flex-grow-1 p-4 overflow-y-auto bg-white">
                            <BuilderFormArea
                                activeSection={activeSection}
                                resumeData={resumeData}
                                setResumeData={setResumeData}
                            />
                        </div>

                    </div>

                    <div className="col-lg-6 bg-secondary-subtle p-4 d-flex justify-content-center align-items-start overflow-y-auto" style={{ height: 'calc(100vh - 57px)' }}>
                        <div className="w-100" style={{ maxWidth: '750px' }} ref={resumePreviewRef}>
                            <ResumePreview resumeData={resumeData} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}