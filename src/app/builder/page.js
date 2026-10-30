'use client';

import { useState, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo/primary.png';
import BuilderSidebar from './components/buildersidebar';
import BuilderFormArea from './components/builderformarea';
import ResumePreview from './components/resumepreview';
import BuilderSkeleton from './components/builderskeleton';

import { atsResumeTemplate } from '../../data/template/ats-resume1';
import { atsResumeTemplateWithPhoto } from '../../data/template/ats-resume2';

function BuilderContent() {
    const searchParams = useSearchParams();
    const templateParam = searchParams.get('template');

    const getInitialResumeData = () => {
        const baseTemplate = templateParam === 'photo' ? atsResumeTemplateWithPhoto : atsResumeTemplate;
        return {
            ...baseTemplate,
            settings: {
                ...(baseTemplate.settings || {}),
                visibleSections: {
                    summary: true,
                    skills: true,
                    workExperience: true,
                    education: true,
                    certificates: true,
                    ...(baseTemplate.settings?.visibleSections || {}),
                    projects: templateParam === 'photo' ? true : false
                }
            }
        };
    };

    const [activeSection, setActiveSection] = useState('header');
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);
    const [isPreviewLoading, setIsPreviewLoading] = useState(false);

    const [resumeData, setResumeData] = useState(() => getInitialResumeData());
    const resumePreviewRef = useRef(null);

    const handleOpenPdfPreview = async () => {
        if (typeof window !== 'undefined' && resumePreviewRef.current) {
            setIsPreviewLoading(true);
            try {
                const html2pdf = (await import('html2pdf.js')).default;
                const element = resumePreviewRef.current;

                const options = {
                    margin: 0,
                    filename: `${resumeData.header.fullName.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: {
                        scale: 2,
                        useCORS: true,
                        letterRendering: true,
                        windowWidth: 794
                    },
                    jsPDF: {
                        unit: 'mm',
                        format: 'a4',
                        orientation: 'portrait'
                    }
                };

                const pdfWorker = html2pdf().from(element).set(options);
                const pdfBlob = await pdfWorker.outputPdf('blob');
                const blobUrl = URL.createObjectURL(pdfBlob);

                window.open(blobUrl, '_blank');

            } catch (error) {
                console.error("Failed to generate PDF preview:", error);
            } finally {
                setIsPreviewLoading(false);
            }
        }
    };

    const handleDownloadPdf = async () => {
        if (typeof window !== 'undefined') {
            const html2pdf = (await import('html2pdf.js')).default;
            const element = resumePreviewRef.current;

            const options = {
                margin: 0,
                filename: `${resumeData.header.fullName.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    letterRendering: true,
                    windowWidth: 794
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
        <div className="min-vh-100 d-flex flex-column bg-light overflow-hidden">
            <header className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center shadow-sm flex-shrink-0" style={{ height: '57px' }}>
                <Link href="/" className="d-flex align-items-center gap-2 text-dark text-decoration-none py-1">
                    <Image
                        src={Logo}
                        alt="RolePage Logo"
                        width={40}
                        height={34}
                        className="d-inline-block align-text-top"
                    />
                    <div className="d-none d-sm-flex flex-column lh-1">
                        <span className="tracking-tight fs-5 text-dark logo-workspace">
                            Role<span className="text-primary logo-workspace">Page</span> <span className="workspace">Workspace</span>
                        </span>
                    </div>
                </Link>

                <div className="d-flex align-items-center gap-3">
                    <button
                        className="btn btn-primary btn-download btn-sm rounded-3 px-4 fw-semibold shadow-sm d-inline-flex align-items-center gap-1"
                        onClick={handleDownloadPdf}
                    >
                        <i className="bi bi-download"></i> Download PDF
                    </button>
                </div>
            </header>

            {pdfPreviewUrl && (
                <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex flex-column justify-content-center align-items-center z-3 p-3">
                    <div className="bg-white w-100 h-100 rounded-3 d-flex flex-column overflow-hidden" style={{ maxWidth: '800px', maxHeight: '90vh' }}>
                        <div className="px-3 py-2 bg-light border-bottom d-flex justify-content-between align-items-center">
                            <span className="fw-bold text-dark fs-6">PDF Resume Preview</span>
                            <button
                                className="btn btn-sm btn-outline-secondary rounded-circle"
                                onClick={() => {
                                    URL.revokeObjectURL(pdfPreviewUrl);
                                    setPdfPreviewUrl(null);
                                }}
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <div className="flex-grow-1 bg-secondary-subtle">
                            <iframe
                                src={pdfPreviewUrl}
                                className="w-100 h-100 border-0"
                                title="Resume PDF Preview"
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="container-fluid flex-grow-1 overflow-hidden p-0 position-relative">
                {isMobileOpen && (
                    <div
                        className="sidebar-backdrop d-lg-none"
                        onClick={() => setIsMobileOpen(false)}
                    />
                )}

                <div className="row g-0 h-100">
                    <div className="col-lg-6 d-flex bg-white border-end position-relative overflow-hidden builder-form-col">
                        <BuilderSidebar
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                            isCollapsed={isCollapsed}
                            setIsCollapsed={setIsCollapsed}
                            isMobileOpen={isMobileOpen}
                            setIsMobileOpen={setIsMobileOpen}
                        />
                        <div className="flex-grow-1 d-flex flex-column overflow-hidden bg-white w-100 h-100">

                            <div className="d-lg-none px-3 py-2 border-bottom bg-light d-flex align-items-center justify-content-between flex-shrink-0">
                                <div className="d-flex align-items-center gap-2">
                                    <button
                                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                                        className="btn btn-light btn-sm text-secondary border shadow-none p-1 rounded-2 d-flex align-items-center justify-content-center"
                                        title={isMobileOpen ? "Close Sidebar" : "Open Sidebar"}
                                        style={{ width: '32px', height: '32px', flexShrink: 0 }}
                                    >
                                        <i className={`bi ${isMobileOpen ? 'bi-layout-sidebar-inset' : 'bi-layout-sidebar'}`}></i>
                                    </button>
                                    <span className="fw-bold text-secondary text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                                        Form Editor
                                    </span>
                                </div>

                                <button
                                    onClick={handleOpenPdfPreview}
                                    disabled={isPreviewLoading}
                                    className="btn btn-outline-secondary rounded-3 btn-sm text-decoration-none fw-semibold d-inline-flex align-items-center gap-1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    <i className={`bi ${isPreviewLoading ? 'bi-hourglass-split' : 'bi-eye'}`}></i>
                                    {isPreviewLoading ? 'Preparing...' : 'Preview PDF'}
                                </button>
                            </div>

                            <div className="flex-grow-1 p-3 p-md-4 overflow-y-auto h-100">
                                <BuilderFormArea
                                    activeSection={activeSection}
                                    resumeData={resumeData}
                                    setResumeData={setResumeData}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 bg-secondary-subtle p-3 p-md-4 d-none d-lg-flex justify-content-center align-items-start overflow-auto builder-preview-col">
                        <div className="w-100 d-flex justify-content-center" ref={resumePreviewRef}>
                            <ResumePreview resumeData={resumeData} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-none">
                <div ref={resumePreviewRef}>
                    <ResumePreview resumeData={resumeData} />
                </div>
            </div>
        </div>
    );
}

export default function BuilderPage() {
    return (
        <Suspense fallback={<BuilderSkeleton />}>
            <BuilderContent />
        </Suspense>
    );
}