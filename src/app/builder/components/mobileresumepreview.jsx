'use client';

import ResumePreview from './resumepreview';

export default function MobileResumePreview({ resumeData, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex flex-column justify-content-center align-items-center z-3 p-2">
            <div className="bg-white w-100 rounded-3 d-flex flex-column overflow-hidden" style={{ maxWidth: '420px', height: '85vh' }}>
                <div className="px-3 py-2 bg-light border-bottom d-flex justify-content-between align-items-center flex-shrink-0">
                    <span className="fw-bold text-dark fs-6">Live Resume Preview</span>
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center border"
                        onClick={onClose}
                        style={{ width: '32px', height: '32px' }}
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <div className="flex-grow-1 bg-secondary-subtle p-3 overflow-auto d-flex justify-content-center align-items-start">
                    <div style={{ transform: 'scale(0.48)', transformOrigin: 'top center', marginBottom: '-50%' }}>
                        <ResumePreview resumeData={resumeData} />
                    </div>
                </div>
            </div>
        </div>
    );
}