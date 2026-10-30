'use client';

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData({
          ...resumeData,
          header: {
            ...resumeData.header,
            photoUrl: reader.result
          }
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setResumeData({
      ...resumeData,
      header: {
        ...resumeData.header,
        photoUrl: ''
      }
    });
  };

  const headerOrder = resumeData.header.headerOrder || ['location', 'phone', 'email', 'linkedin', 'github'];
  const textAlign = resumeData.header.textAlign || 'text-center';
  const showPhotoConfig = resumeData.settings?.templateId === 'photo-header-v1';

  const labelMap = {
    location: 'Location / Address',
    phone: 'Phone Number',
    email: 'Email Address',
    linkedin: 'LinkedIn Profile',
    github: 'GitHub / Portfolio Website'
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
          <h5 className="fw-bold text-dark mb-0">Contact & Personal Details</h5>
        </div>
        <p className="text-secondary mb-4" style={{ fontSize: "0.8rem" }}>
          Enter your full name and contact information to display prominently at the top header of your resume.
        </p>

        <div className="d-flex flex-column gap-3">
          {showPhotoConfig && (
            <div className="p-3 rounded-3 border border-secondary-subtle shadow-xs mb-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <label className="form-label text-dark fw-bold small mb-0">
                  Profile Photo
                </label>
              </div>

              {resumeData.header.photoUrl ? (
                <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded-3 border border-secondary-subtle">
                  <div className="d-flex align-items-center gap-3">
                    <div className="position-relative overflow-hidden border shadow-xs" style={{ width: '48px', height: '48px', borderRadius: resumeData.settings?.photoShape === 'circle' ? '50%' : resumeData.settings?.photoShape === 'rounded' ? '8px' : '4px' }}>
                      <img
                        src={resumeData.header.photoUrl}
                        alt="Profile Preview"
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <div>
                      <span className="d-block text-dark fw-semibold" style={{ fontSize: '0.8rem' }}>Photo uploaded successfully</span>
                      <span className="text-muted text-truncate d-block" style={{ fontSize: '0.7rem', maxWidth: '180px' }}>Ready for live preview</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm rounded-2 px-2 py-1 d-inline-flex align-items-center gap-1 shadow-none"
                    style={{ fontSize: '0.75rem' }}
                    onClick={removeImage}
                    title="Remove image"
                  >
                    <i className="bi bi-trash"></i>
                    <span>Remove</span>
                  </button>
                </div>
              ) : (
                <div className="position-relative border border-dashed border-secondary-subtle rounded-3 p-3 text-center bg-light transition-all hover-border-dark cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer"
                    onChange={handleImageUpload}
                    title="Upload profile photo"
                  />
                  <div className="d-flex flex-column align-items-center justify-content-center gap-1">
                    <div className="rounded-circle bg-white border shadow-xs d-flex align-items-center justify-content-center text-dark mb-1" style={{ width: '36px', height: '36px' }}>
                      <i className="bi bi-cloud-arrow-up fs-6"></i>
                    </div>
                    <span className="text-dark fw-semibold" style={{ fontSize: '0.8rem' }}>
                      Click to upload <span className="fw-normal text-muted">or drag and drop</span>
                    </span>
                    <span className="text-muted" style={{ fontSize: '0.7rem' }}>
                      PNG, JPG or WEBP (Max. 5MB)
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          <div>
            <label className="form-label text-dark fw-bold small mb-1">
              Full Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-sm rounded-3 text-dark fw-medium"
              placeholder="e.g. your Full Name"
              value={resumeData.header.fullName || ''}
              onChange={(e) => handleTextChange('fullName', e.target.value)}
            />
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <div>
                <label className="form-label text-dark fw-bold small mb-1">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control form-control-sm rounded-3 text-dark fw-medium"
                  placeholder="e.g. your@email.com"
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
                  placeholder="e.g. +63 9...."
                  value={resumeData.header.phone || ''}
                  onChange={(e) => handleTextChange('phone', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="form-label text-dark fw-bold small mb-1">City, State / Country</label>
            <input
              type="text"
              className="form-control form-control-sm rounded-3 text-dark fw-medium"
              placeholder="e.g. City, State / Country"
              value={resumeData.header.location || ''}
              onChange={(e) => handleTextChange('location', e.target.value)}
            />
          </div>

          <div className="pt-3 border-top mt-2">
            <span className="text-uppercase text-secondary fw-bold d-block mb-2" style={{ fontSize: '0.8rem' }}>
              Professional Profiles & Links (Optional)
            </span>

            <div className="row g-3">
              <div className="col-md-6">
                <div>
                  <label className="form-label text-dark fw-bold small mb-1">LinkedIn Profile</label>
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-3 text-dark fw-medium"
                    placeholder="e.g. your linkedin profile"
                    value={resumeData.header.linkedin || ''}
                    onChange={(e) => handleTextChange('linkedin', e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div>
                  <label className="form-label text-dark fw-bold small mb-1">GitHub / Portfolio URL</label>
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-3 text-dark fw-medium"
                    placeholder="e.g. website or github link"
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
          <h5 className="fw-bold text-dark mb-0">Header Alignment & Ordering</h5>
        </div>
        <p className="text-secondary mb-4" style={{ fontSize: "0.8rem" }}>
          Choose how your header information is aligned and reorder how your contact details appear.
        </p>

        <div className="d-flex flex-column gap-4">
          
          {!showPhotoConfig && (
            <div className="bg-white">
              <label className="form-label text-dark fw-semibold small mb-2 d-block">
                Text Alignment Style
              </label>
              <div className="btn-group w-100 bg-light p-1 rounded-2 border" role="group">
                {[
                  { key: 'text-start', label: 'Left Align', icon: 'bi-text-left' },
                  { key: 'text-center', label: 'Center Align', icon: 'bi-text-center' },
                  { key: 'text-end', label: 'Right Align', icon: 'bi-text-right' }
                ].map((item) => {
                  const active = textAlign === item.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      className={`btn btn-sm fw-medium rounded-2 transition-all shadow-none py-1 d-flex align-items-center justify-content-center gap-1.5 ${
                        active ? 'bg-dark text-white shadow-xs' : 'text-secondary bg-transparent border-0 hover-dark'
                      }`}
                      onClick={() => handleTextChange('textAlign', item.key)}
                      style={{ fontSize: '0.8rem' }}
                    >
                      <i className={`bi me-1 ${item.icon}`}></i>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="pt-2">
            <span className="text-uppercase fw-bold d-block mb-1" style={{ fontSize: '0.9rem' }}>
              Contact Details Sequence
            </span>
            <p className="text-muted small mb-3" style={{ fontSize: '0.8rem' }}>
              Drag and drop items or use the up and down arrow buttons to change the order they appear in your header.
            </p>

            <div className="d-flex flex-column gap-2">
              {headerOrder.map((key, index) => (
                <div
                  key={key}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(index)}
                  className={`p-3 rounded-3 border-0 transition-all d-flex align-items-center justify-content-between bg-light border-secondary-subtle ${
                    draggedIndex === index ? 'opacity-50 border-primary bg-primary-subtle' : ''
                  }`}
                  style={{ cursor: 'grab' }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <span className="small fw-semibold text-dark">
                      {labelMap[key]}
                    </span>
                  </div>

                  <div className="d-flex align-items-center gap-5">
                    <div className="btn-group btn-group-sm shadow-none" role="group">
                      <button
                        type="button"
                        className="btn btn-white btn-sm border py-0 px-2 shadow-sm"
                        disabled={index === 0}
                        onClick={() => moveItem(index, 'up')}
                        title="Move up"
                      >
                        <i className="bi bi-chevron-up"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-white btn-sm border py-0 px-2 shadow-sm"
                        disabled={index === headerOrder.length - 1}
                        onClick={() => moveItem(index, 'down')}
                        title="Move down"
                      >
                        <i className="bi bi-chevron-down"></i>
                      </button>
                    </div>
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