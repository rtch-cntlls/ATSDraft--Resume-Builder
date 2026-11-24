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
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center p-2 overflow-y-auto"
            style={{ zIndex: 1080 }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-100 rounded-4 shadow-lg p-4 p-md-5 my-auto"
                style={{
                    maxWidth: '750px',
                    maxHeight: '92dvh',
                    overflowY: 'auto',
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                <div className="d-flex align-items-start justify-content-between mb-3 mb-md-4 gap-2">
                    <div className="pe-1">
                        <h3 id="template-modal-title" className="fw-bold text-dark mb-1 fs-6 fs-sm-5 fs-md-4">
                            Choose Your Resume Header Layout
                        </h3>
                        <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>
                            Both formats are 100% ATS-optimized. Pick a header style to open the builder.
                        </p>
                    </div>
                    <button
                        type="button"
                        aria-label="Close layout modal"
                        className="btn btn-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center border flex-shrink-0"
                        onClick={onClose}
                        style={{ width: '34px', height: '34px' }}
                    >
                        <i className="bi bi-x-lg text-dark" aria-hidden="true" />
                    </button>
                </div>

                <div className="row g-2 g-md-4">
                    <div className="col-12 col-md-6">
                        <a
                            href="/builder?template=standard"
                            onClick={(e) => handleSelectTemplate(e, '/builder?template=standard')}
                            className="card h-100 border text-decoration-none p-3 rounded-3 transition-all hover-border-dark bg-light shadow-xs d-flex flex-column justify-content-between"
                        >
                            <div
                                className="bg-white border rounded-2 p-4 mb-2 d-flex flex-column gap-1 text-center justify-content-center"
                                style={{ minHeight: '105px' }}
                            >
                                <div className="mx-auto w-75 d-flex flex-column align-items-center gap-1" aria-hidden="true">
                                    <div className="bg-dark rounded-pill" style={{ width: '55%', height: '6px' }} />
                                    <div className="bg-secondary bg-opacity-25 rounded-pill" style={{ width: '80%', height: '4px' }} />
                                </div>
                                <div className="fw-bold text-dark small">Standard Header Layout</div>
                                <div className="text-muted" style={{ fontSize: '0.72rem', lineHeight: 1.35 }}>
                                    Clean text-only header layout. Optimized for automated parsers without a profile photo.
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between pt-1">
                                <span className="fw-bold text-dark" style={{ fontSize: '0.8rem' }}>Without Photo</span>
                                <span className="btn btn-sm btn-dark px-3 py-1 rounded-pill fw-semibold" style={{ fontSize: '0.75rem' }}>
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
                                className="bg-white border rounded-2 p-4 mb-2 d-flex flex-column gap-1 text-center justify-content-center"
                                style={{ minHeight: '105px' }}
                            >
                                <div className="mx-auto w-75 d-flex align-items-center justify-content-center gap-2" aria-hidden="true">
                                    <div
                                        className="rounded-circle bg-primary bg-opacity-25 border border-primary border-opacity-50 flex-shrink-0"
                                        style={{ width: '20px', height: '20px' }}
                                    />
                                    <div className="d-flex flex-column gap-1 w-75">
                                        <div className="bg-dark rounded-pill" style={{ width: '65%', height: '6px' }} />
                                        <div className="bg-secondary bg-opacity-25 rounded-pill" style={{ width: '90%', height: '4px' }} />
                                    </div>
                                </div>
                                <div className="fw-bold text-dark small">Professional Header Layout</div>
                                <div className="text-muted" style={{ fontSize: '0.72rem', lineHeight: 1.35 }}>
                                    Same ATS-safe structure with an optional profile photo slot in the resume header.
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between pt-1">
                                <span className="fw-bold text-dark" style={{ fontSize: '0.8rem' }}>With Profile Photo</span>
                                <span className="btn btn-sm btn-primary text-white px-3 py-1 rounded-pill fw-semibold" style={{ fontSize: '0.75rem' }}>
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