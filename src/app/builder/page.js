'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo/primary.png';
import BuilderSidebar from './components/buildersidebar';
import BuilderFormArea from './components/builderformarea';
import ResumePreview from './components/resumepreview';

import { atsResumeTemplate } from '../../data/template/ats-resume1';

const getInitialResumeData = () => {
    return {
        ...atsResumeTemplate,
        settings: {
            ...(atsResumeTemplate.settings || {}),
            visibleSections: {
                summary: true,
                skills: true,
                workExperience: true,
                education: true,
                certificates: true,
                ...(atsResumeTemplate.settings?.visibleSections || {}),
                projects: false
            }
        }
    };
};

function BuilderContent() {
    const [activeSection, setActiveSection] = useState('header');
    const [isCollapsed, setIsCollapsed] = useState(false);
    
    const [resumeData, setResumeData] = useState(() => getInitialResumeData());
    const resumePreviewRef = useRef(null);

    const handleDownloadPdf = async () => {
        if (typeof window !== 'undefined') {
            const html2pdf = (await import('html2pdf.js')).default;
            const element = resumePreviewRef.current;
            
            const options = {
                margin: 0, // Handled completely by the preview element's padding
                filename: `${resumeData.header.fullName.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2, 
                    useCORS: true,
                    letterRendering: true,
                    windowWidth: 794 // 👈 Lock canvas width exactly to A4 reference width (794px at 96 DPI)
                },
                jsPDF: { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait' 
                }
            };

            html2pdf().from(element).set(options).save();
        }
    };

    return (
        <div className="min-vh-100 d-flex flex-column bg-light">
            <header className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center shadow-sm">
                <div className="d-flex align-items-center gap-3">
                    <Image
                        src={Logo}
                        alt="ResuMake Logo"
                        width={40}
                        height={34}
                        className="d-inline-block align-text-top"
                    />
                    <div className="d-flex flex-column lh-1">
                        <span className="tracking-tight fs-5 text-dark logo-workspace">
                            Resu<span className="text-primary logo-workspace">Make</span> <span className="workspace">Workspace</span>
                        </span>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                    <button
                        className="btn btn-primary btn-sm rounded-pill px-4 fw-semibold shadow-sm d-inline-flex align-items-center gap-1"
                        onClick={handleDownloadPdf}
                    >
                        <i className="bi bi-download"></i> Download PDF
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

export default function BuilderPage() {
    return (
        <Suspense fallback={<div>Loading builder...</div>}>
            <BuilderContent />
        </Suspense>
    );
}