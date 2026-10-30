'use client';

import { useState } from 'react';
import Image from 'next/image';
import HeroImg from '../../../public/hero/hero-img.png';
import TemplateModal from '../templatemodal';

export default function Hero() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <section id="hero" className="position-relative overflow-hidden bg-white">

                <svg className="position-absolute" width="0" height="0">
                    <defs>
                        <clipPath id="curvedSlantClip" clipPathUnits="objectBoundingBox">
                            <path d="M 0 0 L 0 0 Q 0.105 0.5 0.85 1 L 0 1 Z" />
                        </clipPath>
                    </defs>
                </svg>

                <div 
                    className="position-absolute top-0 start-0 h-100 z-0" 
                    style={{ 
                        width: '100%',
                        maxWidth: '750px',
                        backgroundColor: '#60c7ff58',
                        clipPath: 'url(#curvedSlantClip)',
                        opacity: 0.6
                    }}
                ></div>

                <div className="container py-4 py-lg-5 position-relative z-1">
                    <div className="row align-items-center gy-5 min-vh-75 py-4">
                       <div className="col-lg-6 text-center text-lg-start">
                            <div className="badge-feature1 d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill bg-white bg-opacity-75 border border-secondary border-opacity-25 shadow-sm">
                                <span className="small fw-semibold text-dark" style={{ letterSpacing: '0.02em' }}>
                                100% Free • No Sign-Up or Login Required
                                </span>
                            </div>

                            <h1 className="display-4 fw-bold tracking-tight text-dark lh-1.2 mb-4" style={{ letterSpacing: '-0.02em' }}>
                                Build a Professional Resume That <span className="text-primary">Gets You Hired</span>
                            </h1>

                            <p className="lead text-secondary mb-4 me-lg-4" style={{ opacity: 0.95, fontSize: '1rem' }}>
                                Create an ATS-friendly, polished resume in minutes with our easy-to-use editor. Stand out to recruiters and land your next job faster.
                            </p>

                            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mb-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(true)}
                                    className="btn btn-dark btn-lg rounded-pill px-5 py-3 fw-semibold shadow-sm d-inline-flex align-items-center justify-content-center gap-2 transition-all hover-scale"
                                    style={{ fontSize: '0.95rem' }}
                                >
                                    Create My Resume Now
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>

                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4 text-muted small" style={{ opacity: 0.9 }}>
                                <div className="d-flex align-items-center gap-1 feature">
                                <i className="bi bi-check-circle-fill text-primary"></i> Instant PDF Download
                                </div>
                                <div className="d-flex align-items-center gap-1 feature">
                                <i className="bi bi-check-circle-fill text-primary"></i> ATS-Optimized Formats
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 position-relative py-4">
                            <div 
                                className="position-absolute top-0 start-0 bg-white border border-light shadow-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 z-2"
                                style={{ marginLeft: '2%', marginTop: '-10px' }}
                            >
                               <span className="bg-primary text-white rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                    <i className="bi bi-check fs-6"></i>
                                </span>
                                <div className="lh-1 text-start">
                                    <span className="d-block fw-bold text-dark badge-feature">ATS Approved</span>
                                    <span className="text-muted badge-feature">100% Parser Friendly</span>
                                </div>
                            </div>

                            <div 
                                className="position-absolute top-50 end-0 translate-middle-y bg-white border border-light shadow-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 z-2"
                                style={{ marginRight: '0px' }}
                            >
                                <span className="bg-primary text-white rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                    <i className="bi bi-check fs-6"></i>
                                </span>
                                <div className="lh-1 text-start">
                                    <span className="d-block fw-bold text-dark badge-feature">Lightning Fast</span>
                                    <span className="text-muted badge-feature">Ready in Minutes</span>
                                </div>
                            </div>
                            <div 
                                className="position-absolute bottom-0 start-0 bg-white border border-light shadow-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 z-2"
                                style={{ marginLeft: '5%', marginBottom: '10px' }}
                            >
                                <span className="bg-primary text-white rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                    <i className="bi bi-check fs-6"></i>
                                </span>
                                <div className="lh-1 text-start">
                                    <span className="d-block fw-bold text-dark badge-feature">PDF Export</span>
                                    <span className="text-muted badge-feature">High Quality Output</span>
                                </div>
                            </div>

                            <div className="position-relative mx-auto text-center" style={{ maxWidth: '550px' }}>
                                <Image 
                                    src={HeroImg} 
                                    alt="Resume Builder Preview" 
                                    width={550} 
                                    height={450} 
                                    priority
                                    className="img-fluid rounded-4 bg-white p-2" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TemplateModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </>
    );
}