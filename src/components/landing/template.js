'use client';

import Image from 'next/image';
import TemplateImg from '../../../public/images/template.png';

export default function TemplateSection() {
    return (
        <section className="py-5 bg-white border-bottom overflow-hidden position-relative">
            <div 
                className="position-absolute rounded-circle bg-primary opacity-10 pointer-events-none"
                style={{
                    width: '300px',
                    height: '300px',
                    filter: 'blur(100px)',
                    top: '30%',
                    right: '-100px',
                    transform: 'translateY(-50%)',
                    zIndex: 0
                }}
            ></div>

            <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 position-relative py-4">
                        <div className="position-relative mx-auto my-3" style={{ maxWidth: '420px' }}>
                            <div 
                                className="position-absolute rounded-2 bg-primary shadow-sm w-100 h-100" 
                                style={{ top: '20px', left: '20px', transform: 'rotate(-20deg)' }}
                            ></div>

                            <div 
                                className="position-absolute rounded-2 bg-dark shadow-sm w-100 h-100" 
                                style={{ top: '10px', left: '10px', transform: 'rotate(-10deg)' }}
                            ></div>

                            <div className="position-relative bg-white rounded-2 shadow-lg overflow-hidden p-2" style={{ transform: 'rotate(2deg)' }}>
                                <Image
                                    src={TemplateImg}
                                    alt="Professional ATS Resume Template Preview"
                                    className="img-fluid rounded-3 w-100 h-auto d-block"
                                    style={{ objectFit: 'cover', maxHeight: '500px' }}
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="d-flex flex-column gap-3">
                            <h2 className="fw-bold text-dark display-7 lh-sm mb-0">
                                Why You Need an ATS-Optimized Resume Format
                            </h2>
                            
                            <p className="text-dark fs-6 mb-0 sample" style={{ lineHeight: '1.7' }}>
                                Most corporate recruiters use Applicant Tracking Systems to automatically scan, parse, and filter resumes long before a human hiring manager ever sees them. Traditional multi-column layouts, graphics, and tables often confuse these parsers, causing qualified candidates to get filtered out instantly.
                            </p>

                            <p className="text-dark fs-6 mb-0 sample" style={{ lineHeight: '1.7' }}>
                                Utilizing a clean, single-column ATS-friendly structure ensures your experience, skills, and background are accurately extracted and ranked. It gives your application the highest possible parser accuracy, guaranteeing that your true professional value reaches the decision-maker&apos;s desk every single time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}