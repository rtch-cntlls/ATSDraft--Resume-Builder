'use client';

export default function TemplateModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const handleSelect = (url) => {
        window.location.href = url;
    };

    return (
        <div 
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex flex-column justify-content-center align-items-center p-2 p-md-3 overflow-y-auto"
            style={{ zIndex: 1080 }}
        >
            <div 
                className="bg-white w-100 rounded-4 shadow-lg overflow-hidden p-3 p-md-5 my-auto" 
                style={{ maxWidth: '750px', maxHeight: '90vh', overflowY: 'auto' }}
            >
                <div className="d-flex align-items-start align-items-md-center justify-content-between mb-3 mb-md-4 gap-2">
                    <div>
                        <h3 className="fw-bold text-dark mb-1 fs-5 fs-md-4">Choose Your Layout Style</h3>
                        <p className="text-muted small mb-0">Both formats are 100% ATS-optimized. Select your preferred header style.</p>
                    </div>
                    <button
                        type="button"
                        className="btn btn-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center border flex-shrink-0"
                        onClick={onClose}
                        style={{ width: '36px', height: '36px' }}
                    >
                        <i className="bi bi-x-lg text-dark"></i>
                    </button>
                </div>

                <div className="row g-3 g-md-4 mb-3 mb-md-4">
                    <div className="col-12 col-md-6">
                        <div 
                            onClick={() => handleSelect('/builder?template=standard')}
                            className="card h-100 border text-decoration-none p-3 rounded-3 transition-all hover-border-dark bg-light shadow-xs"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="bg-white border rounded-2 p-3 mb-3 d-flex flex-column gap-2 text-center justify-content-center" style={{ minHeight: '140px' }}>
                                <div className="fw-bold text-dark small">Standard Header Layout</div>
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>Clean text-only header layout. Fully optimized for automated recruitment parsers without a profile picture.</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="fw-bold text-dark small">Without Photo</span>
                                <span className="btn btn-sm btn-dark px-3 rounded-pill fw-semibold" style={{ fontSize: '0.75rem' }}>Select</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div 
                            onClick={() => handleSelect('/builder?template=photo')}
                            className="card h-100 border text-decoration-none p-3 rounded-3 transition-all hover-border-dark bg-light shadow-xs"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="bg-white border rounded-2 p-3 mb-3 d-flex flex-column gap-2 text-center justify-content-center" style={{ minHeight: '140px' }}>
                                <div className="fw-bold text-dark small">Professional Header Layout</div>
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>Same robust structure with an added professional profile photo upload slot in the header section.</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="fw-bold text-dark small">With Profile Photo</span>
                                <span className="btn btn-sm btn-primary text-white px-3 rounded-pill fw-semibold" style={{ fontSize: '0.75rem' }}>Select</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}