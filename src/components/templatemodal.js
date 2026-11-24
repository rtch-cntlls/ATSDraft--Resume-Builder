'use client';

import { useEffect } from 'react';

export default function TemplateModal({ isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleSelectTemplate = (e, url) => {
        e.preventDefault();
        document.body.style.overflow = '';
        onClose();
        window.location.assign(url);
    };

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="template-modal-title"
            onClick={onClose}
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex flex-column justify-content-center align-items-center p-2 p-md-3 overflow-y-auto"
            style={{ zIndex: 1080 }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-100 rounded-4 shadow-lg overflow-hidden p-3 p-md-5 my-auto"
                style={{ maxWidth: '750px', maxHeight: '90vh', overflowY: 'auto' }}
            >
                <div className="d-flex align-items-start align-items-md-center justify-content-between mb-3 mb-md-4 gap-2">
                    <div>
                        <h3 id="template-modal-title" className="fw-bold text-dark mb-1 fs-5 fs-md-4">
                            Choose Your Resume Header Layout
                        </h3>
                        <p className="text-muted small mb-0">
                            Both formats are 100% ATS-optimized. Select your preferred header style to open the builder.
                        </p>
                    </div>
                    <button
                        type="button"
                        aria-label="Close layout modal"
                        className="btn btn-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center border flex-shrink-0"
                        onClick={onClose}
                        style={{ width: '36px', height: '36px' }}
                    >
                        <i className="bi bi-x-lg text-dark" aria-hidden="true" />
                    </button>
                </div>

                <div className="row g-3 g-md-4">
                    <div className="col-12 col-md-6">
                        <a
                            href="/builder?template=standard"
                            onClick={(e) => handleSelectTemplate(e, '/builder?template=standard')}
                            className="card h-100 border text-decoration-none p-3 rounded-3 transition-all hover-border-dark bg-light shadow-xs d-flex flex-column justify-content-between"
                        >
                            <div
                                className="bg-white border rounded-2 p-3 mb-3 d-flex flex-column gap-2 text-center justify-content-center"
                                style={{ minHeight: '150px' }}
                            >
                                <div className="mx-auto w-75 d-flex flex-column align-items-center gap-1 mb-1" aria-hidden="true">
                                    <div className="bg-dark rounded-pill" style={{ width: '55%', height: '6px' }} />
                                    <div className="bg-secondary bg-opacity-25 rounded-pill" style={{ width: '80%', height: '4px' }} />
                                </div>
                                <div className="fw-bold text-dark small">Standard Header Layout</div>
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                                    Clean text-only header layout. Fully optimized for automated recruitment parsers without a profile photo.
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="fw-bold text-dark small">Without Photo</span>
                                <span className="btn btn-sm btn-dark px-3 rounded-pill fw-semibold" style={{ fontSize: '0.75rem' }}>
                                    Select
                                </span>
                            </div>
                        </a>
                    </div>

                    <div className="col-12 col-md-6">
                        <a
                            href="/builder?template=photo"
                            onClick={(e) => handleSelectTemplate(e, '/builder?template=photo')}
                            className="card h-100 border text-decoration-none p-3 rounded-3 transition-all hover-border-dark bg-light shadow-xs d-flex flex-column justify-content-between"
                        >
                            <div
                                className="bg-white border rounded-2 p-3 mb-3 d-flex flex-column gap-2 text-center justify-content-center"
                                style={{ minHeight: '150px' }}
                            >
                                <div className="mx-auto w-75 d-flex align-items-center justify-content-center gap-2 mb-1" aria-hidden="true">
                                    <div
                                        className="rounded-circle bg-primary bg-opacity-25 border border-primary border-opacity-50 flex-shrink-0"
                                        style={{ width: '22px', height: '22px' }}
                                    />
                                    <div className="d-flex flex-column gap-1 w-75">
                                        <div className="bg-dark rounded-pill" style={{ width: '65%', height: '6px' }} />
                                        <div className="bg-secondary bg-opacity-25 rounded-pill" style={{ width: '90%', height: '4px' }} />
                                    </div>
                                </div>
                                <div className="fw-bold text-dark small">Professional Header Layout</div>
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                                    Same ATS-safe structure with an optional profile photo upload slot in the resume header.
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="fw-bold text-dark small">With Profile Photo</span>
                                <span className="btn btn-sm btn-primary text-white px-3 rounded-pill fw-semibold" style={{ fontSize: '0.75rem' }}>
                                    Select
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}