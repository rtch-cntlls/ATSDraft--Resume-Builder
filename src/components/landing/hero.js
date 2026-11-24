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
                <svg className="position-absolute" width="0" height="0" aria-hidden="true">
                    <defs>
                        <clipPath id="curvedSlantClip" clipPathUnits="objectBoundingBox">
                            <path d="M 0 0 L 0 0 Q 0.105 0.5 0.85 1 L 0 1 Z" />
                        </clipPath>
                    </defs>
                </svg>

                <div
                    className="position-absolute top-0 start-0 h-100 z-0"
                    aria-hidden="true"
                    style={{
                        width: '100%',
                        maxWidth: '750px',
                        backgroundColor: '#60c7ff58',
                        clipPath: 'url(#curvedSlantClip)',
                        opacity: 0.6,
                    }}
                />

                <div className="container py-4 py-lg-5 position-relative z-1">
                    <div className="row align-items-center gy-5 py-3 py-lg-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <div className="badge-feature1 d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill bg-white border border-secondary border-opacity-25 shadow-sm">
                                <span
                                    className="small fw-semibold text-dark"
                                    style={{ fontFamily: 'var(--font-geist-mono), monospace', fontSize: '0.75rem' }}
                                >
                                    100% FREE • NO SIGN-UP REQUIRED
                                </span>
                            </div>

                            <h1
                                className="display-4 fw-bold text-dark mb-3"
                                style={{ letterSpacing: '-0.025em', lineHeight: 1.15 }}
                            >
                                Free ATS-Friendly Resume Builder
                            </h1>

                            <p className="lead text-secondary mb-4 me-lg-4" style={{ fontSize: '1rem' }}>
                                Draft, customize, and export a recruiter-ready resume in minutes with{' '}
                                <strong className="text-dark fw-semibold">ATSDraft</strong>. Clean formatting, real-time preview, and instant PDF download with zero paywalls.
                            </p>

                            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mb-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(true)}
                                    className="btn btn-dark btn-lg rounded-pill px-5 py-3 fw-semibold shadow-sm d-inline-flex align-items-center justify-content-center gap-2"
                                    style={{ fontSize: '0.95rem' }}
                                >
                                    <span>Create My Resume Now</span>
                                    <i className="bi bi-arrow-right" aria-hidden="true" />
                                </button>
                            </div>

                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-4 text-muted small">
                                <div className="d-flex align-items-center gap-1 feature">
                                    <i className="bi bi-check-circle-fill text-primary" aria-hidden="true" />
                                    <span>Instant PDF Download</span>
                                </div>
                                <div className="d-flex align-items-center gap-1 feature">
                                    <i className="bi bi-check-circle-fill text-primary" aria-hidden="true" />
                                    <span>ATS-Parsed Layouts</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 position-relative py-2 py-lg-4">
                            <div
                                className="d-none d-md-flex position-absolute top-0 start-0 bg-white border border-light shadow-sm rounded-pill px-3 py-2 align-items-center gap-2 z-2"
                                style={{ marginLeft: '2%' }}
                            >
                                <span
                                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: '24px', height: '24px' }}
                                >
                                    <i className="bi bi-check fs-6" aria-hidden="true" />
                                </span>
                                <div className="lh-1 text-start">
                                    <span className="d-block fw-bold text-dark badge-feature">ATS Approved</span>
                                    <span className="text-muted badge-feature">Parser Friendly</span>
                                </div>
                            </div>

                            <div
                                className="d-none d-md-flex position-absolute top-50 end-0 translate-middle-y bg-white border border-light shadow-sm rounded-pill px-3 py-2 align-items-center gap-2 z-2"
                            >
                                <span
                                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: '24px', height: '24px' }}
                                >
                                    <i className="bi bi-check fs-6" aria-hidden="true" />
                                </span>
                                <div className="lh-1 text-start">
                                    <span className="d-block fw-bold text-dark badge-feature">Lightning Fast</span>
                                    <span className="text-muted badge-feature">Ready in Minutes</span>
                                </div>
                            </div>

                            <div
                                className="d-none d-md-flex position-absolute bottom-0 start-0 bg-white border border-light shadow-sm rounded-pill px-3 py-2 align-items-center gap-2 z-2"
                                style={{ marginLeft: '5%', marginBottom: '8px' }}
                            >
                                <span
                                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: '24px', height: '24px' }}
                                >
                                    <i className="bi bi-check fs-6" aria-hidden="true" />
                                </span>
                                <div className="lh-1 text-start">
                                    <span className="d-block fw-bold text-dark badge-feature">PDF Export</span>
                                    <span className="text-muted badge-feature">Clean Vector Output</span>
                                </div>
                            </div>

                            <div className="position-relative mx-auto text-center" style={{ maxWidth: '550px' }}>
                                <Image
                                    src={HeroImg}
                                    alt="ATSDraft ATS-friendly resume template preview and editor interface"
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