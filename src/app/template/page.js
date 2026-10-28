'use client';

import Link from 'next/link';
import ResumePreview from '../builder/components/resumepreview';

import { templateCSIT } from '../../data/Profession/templateCSIT';
import { templateDataScience } from '../../data/Profession/templateDataScience';
import { templateEngineering } from '../../data/Profession/templateEngineering';
import { templateDesign } from '../../data/Profession/templateDesign';
import { templateMarketing } from '../../data/Profession/templateMarketing';
import { templateFinance } from '../../data/Profession/templateFinance';
import { templateNursing } from '../../data/Profession/templateNursing';
import { templateEducation } from '../../data/Profession/templateEducation';
import { templateAccounting } from '../../data/Profession/templateAccounting';
import { templatePreLaw } from '../../data/Profession/templatePreLaw';
import { templateHospitality } from '../../data/Profession/templateHospitality';
import { templateSocialWork } from '../../data/Profession/templateSocialWork';

const templateList = [
    { key: 'csit', title: 'Computer Science & IT', data: templateCSIT },
    { key: 'datascience', title: 'Data Science & Statistics', data: templateDataScience },
    { key: 'engineering', title: 'Engineering', data: templateEngineering },
    { key: 'design', title: 'UI/UX & Graphic Design', data: templateDesign },
    { key: 'marketing', title: 'Marketing & Digital Media', data: templateMarketing },
    { key: 'finance', title: 'Finance & Economics', data: templateFinance },
    { key: 'nursing', title: 'Nursing & Healthcare', data: templateNursing },
    { key: 'education', title: 'Education & Teaching', data: templateEducation },
    { key: 'accounting', title: 'Accounting & Auditing', data: templateAccounting },
    { key: 'prelaw', title: 'Pre-Law & Philosophy', data: templatePreLaw },
    { key: 'hospitality', title: 'Hospitality & Culinary Arts', data: templateHospitality },
    { key: 'socialwork', title: 'Social Work & Psychology', data: templateSocialWork },
];

export default function TemplateSelectPage() {
    return (
        <div className="bg-light min-vh-100 py-5">
            <div className="container py-4">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '650px' }}>
                    <span className="text-primary fw-semibold small text-uppercase tracking-wider mb-2 d-block" style={{ letterSpacing: '0.08em' }}>
                        Curated Resume Designs
                    </span>
                    <h1 className="fw-bold text-dark display-6 mb-3" style={{ letterSpacing: '-0.02em' }}>
                        Select Your Resume Template
                    </h1>
                    <p className="text-secondary fs-6 mb-0" style={{ lineHeight: '1.6' }}>
                        Preview live ATS-friendly layouts tailored for your specific domain. Select any template to edit in the workspace.
                    </p>
                </div>

                <div className="row g-4">
                    {templateList.map((t) => (
                        <div key={t.key} className="col-md-6 col-lg-4">
                            <div className="card h-100 bg-white border border-light-subtle rounded-0 shadow-sm overflow-hidden d-flex flex-column justify-content-between transition-all hover-translate-y">
                                
                                <div 
                                    className="bg-secondary-subtle d-flex align-items-center justify-content-center overflow-hidden border-bottom p-3"
                                    style={{ height: '420px' }}
                                >
                                    <div 
                                        className="shadow-sm bg-white"
                                        style={{ 
                                            width: '794px', 
                                            transform: 'scale(0.35)', 
                                            transformOrigin: 'center center',
                                            pointerEvents: 'none',
                                            flexShrink: 0
                                        }}
                                    >
                                        <ResumePreview resumeData={t.data} />
                                    </div>
                                </div>

                                <div className="p-4 bg-white d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h3 className="h6 fw-bold text-dark mb-0" style={{ letterSpacing: '-0.01em' }}>
                                            {t.title}
                                        </h3>
                                        <span className="text-muted small">ATS Compliant Layout</span>
                                    </div>

                                    <Link
                                        href={`/builder?template=${t.key}`}
                                        className="btn btn-dark rounded-pill py-2 px-3 fw-semibold text-decoration-none d-flex align-items-center gap-1 shadow-none"
                                        style={{ fontSize: '0.85rem' }}
                                    >
                                        <span>Use This</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}