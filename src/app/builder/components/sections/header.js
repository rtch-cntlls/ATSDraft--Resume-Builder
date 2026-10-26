import { useState } from 'react';

export default function HeaderSection({ resumeData, setResumeData }) {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleTextChange = (field, value) => {
    setResumeData({
      ...resumeData,
      header: {
        ...resumeData.header,
        [field]: value
      }
    });
  };

  const headerOrder = resumeData.header.headerOrder || ['location', 'phone', 'email', 'linkedin', 'github'];
  const textAlign = resumeData.header.textAlign || 'text-center';

  const labelMap = {
    location: 'Location / Address',
    phone: 'Phone Number',
    email: 'Email Address',
    linkedin: 'LinkedIn Profile',
    github: 'GitHub / Portfolio'
  };

  const moveItem = (index, direction) => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= headerOrder.length) return;

    const updatedOrder = [...headerOrder];
    const temp = updatedOrder[index];
    updatedOrder[index] = updatedOrder[newIndex];
    updatedOrder[newIndex] = temp;

    setResumeData({
      ...resumeData,
      header: {
        ...resumeData.header,
        headerOrder: updatedOrder
      }
    });
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex) => {
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const updatedOrder = [...headerOrder];
    const [draggedItem] = updatedOrder.splice(draggedIndex, 1);
    updatedOrder.splice(dropIndex, 0, draggedItem);

    setDraggedIndex(null);
    setResumeData({
      ...resumeData,
      header: {
        ...resumeData.header,
        headerOrder: updatedOrder
      }
    });
  };

  return (
    <div className="section-workspace fade-in">
      
      <div className="mb-4">
        <div className="d-flex align-items-center justify-content-between pb-2 mb-1 border-bottom">
          <h5 className="fw-bold text-dark mb-0">Personal Details</h5>
        </div>
        <p className="text-secondary mb-4" style={{ fontSize: "0.8rem" }}>
          Configure primary contact attributes and identification header displayed at the top of your resume.
        </p>

        <div className="d-flex flex-column gap-3">
          <div>
            <label className="form-label text-dark fw-bold small mb-1">
              Full Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-sm rounded-3 text-dark fw-medium"
              placeholder="e.g. Alex Morgan"
              value={resumeData.header.fullName || ''}
              onChange={(e) => handleTextChange('fullName', e.target.value)}
            />
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <div>
                <label className="form-label text-dark fw-bold small mb-1">Email <span className="text-danger">*</span></label>
                <input
                  type="email"
                  className="form-control form-control-sm rounded-3 text-dark fw-medium"
                  value={resumeData.header.email || ''}
                  onChange={(e) => handleTextChange('email', e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <label className="form-label text-dark fw-bold small mb-1">Phone Number</label>
                <input
                  type="text"
                  className="form-control form-control-sm rounded-3 text-dark fw-medium"
                  value={resumeData.header.phone || ''}
                  onChange={(e) => handleTextChange('phone', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="form-label text-dark fw-bold small mb-1">Location / Address</label>
            <input
              type="text"
              className="form-control form-control-sm rounded-3 text-dark fw-medium"
              value={resumeData.header.location || ''}
              onChange={(e) => handleTextChange('location', e.target.value)}
            />
          </div>

          <div className="pt-3 border-top mt-2">
            <span className="text-uppercase text-secondary fw-bold d-block mb-2" style={{ fontSize: '0.8rem' }}>
              Professional Links (Optional)
            </span>

            <div className="row g-3">
              <div className="col-md-6">
                <div>
                  <label className="form-label text-dark fw-bold small mb-1">LinkedIn Profile</label>
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-3 text-dark fw-medium"
                    value={resumeData.header.linkedin || ''}
                    onChange={(e) => handleTextChange('linkedin', e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div>
                  <label className="form-label text-dark fw-bold small mb-1">GitHub / Website Portfolio</label>
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-3 text-dark fw-medium"
                    value={resumeData.header.github || ''}
                    onChange={(e) => handleTextChange('github', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-top mb-4">
        <div className="d-flex align-items-center justify-content-between pb-2 mb-1 border-bottom">
          <h5 className="fw-bold text-dark mb-0">Section Configuration</h5>
        </div>
        <p className="text-secondary mb-4" style={{ fontSize: "0.8rem" }}>
          Customize the text alignment and drag-and-drop the sequence order of your header contact info.
        </p>

        <div className="d-flex flex-column gap-4">
          <div className="card bg-light border-0 shadow-sm p-3 rounded-3">
            <label className="form-label text-dark fw-bold small mb-2 d-block">
              Header Text Alignment
            </label>
            <div className="btn-group w-100" role="group">
              <button
                type="button"
                className={`btn btn-sm ${textAlign === 'text-start' ? 'btn-dark' : 'btn-outline-secondary'}`}
                onClick={() => handleTextChange('textAlign', 'text-start')}
              >
                Left
              </button>
              <button
                type="button"
                className={`btn btn-sm ${textAlign === 'text-center' ? 'btn-dark' : 'btn-outline-secondary'}`}
                onClick={() => handleTextChange('textAlign', 'text-center')}
              >
                Center
              </button>
              <button
                type="button"
                className={`btn btn-sm ${textAlign === 'text-end' ? 'btn-dark' : 'btn-outline-secondary'}`}
                onClick={() => handleTextChange('textAlign', 'text-end')}
              >
                Right
              </button>
            </div>
          </div>

          <div className="pt-2">
            <span className="text-uppercase text-muted fw-bold d-block mb-1" style={{ fontSize: '0.9rem' }}>
              Header Sequence & Placement Order
            </span>
            <p className="text-muted small mb-3" style={{ fontSize: '0.8rem' }}>
              Hold and drag any row to reorder, or use the arrow buttons.
            </p>

            <div className="d-flex flex-column gap-2">
              {headerOrder.map((key, index) => (
                <div
                  key={key}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(index)}
                  className={`d-flex align-items-center justify-content-between p-2 bg-light border rounded-3 transition-all ${
                    draggedIndex === index ? 'opacity-50 border-primary bg-primary-subtle' : ''
                  }`}
                  style={{ cursor: 'grab' }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-muted" style={{ cursor: 'grab' }}>
                      <i className="bi bi-app-indicator"></i>
                    </span>
                    <span className="small fw-semibold text-dark">
                      {index + 1}. {labelMap[key]}
                    </span>
                  </div>

                  <div className="d-flex align-items-center gap-1">
                    <button
                      type="button"
                      className="btn btn-white btn-sm border py-0 px-2 shadow-sm"
                      disabled={index === 0}
                      onClick={() => moveItem(index, 'up')}
                    >
                      <i className="bi bi-chevron-up"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-white btn-sm border py-0 px-2 shadow-sm"
                      disabled={index === headerOrder.length - 1}
                      onClick={() => moveItem(index, 'down')}
                    >
                      <i className="bi bi-chevron-down"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}