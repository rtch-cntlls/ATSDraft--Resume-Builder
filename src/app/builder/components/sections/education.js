export default function EducationSection({ resumeData, setResumeData }) {
  const sectionTitle = resumeData.educationTitle || 'Education';

  const handleTitleChange = (value) => {
    setResumeData({
      ...resumeData,
      educationTitle: value
    });
  };

  const handleChange = (index, field, value) => {
    const updated = [...resumeData.education];
    updated[index][field] = value;
    setResumeData({ ...resumeData, education: updated });
  };

  const addEducation = () => {
    const newEntry = {
      id: Date.now(),
      degree: '',
      institution: '',
      location: '',
      graduationDate: ''
    };
    setResumeData({ ...resumeData, education: [...resumeData.education, newEntry] });
  };

  const removeEducation = (id) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter(item => item.id !== id)
    });
  };

  return (
    <div className="section-workspace fade-in">
      <div className="mb-4">
        <div className="d-flex align-items-center justify-content-between pb-2 mb-1 border-bottom">
          <h5 className="fw-bold text-dark mb-0">Educational Background</h5>
          <button className="btn btn-outline-dark btn-sm rounded-pill px-3" onClick={addEducation}>
            <i className="bi bi-plus-lg me-1"></i> Add Education
          </button>
        </div>
        <p className="text-secondary mb-4" style={{ fontSize: '0.8rem' }}>
          List your degrees, diplomas, or academic qualifications in reverse chronological order (most recent first).
        </p>

        <div className="mb-3">
          <label className="form-label text-dark fw-bold small mb-1">
            Section Heading Title
          </label>
          <input
            type="text"
            className="form-control form-control-sm rounded-3 text-dark fw-medium"
            placeholder="e.g. Education, Academic Background, Education & Qualifications"
            value={sectionTitle}
            onChange={(e) => handleTitleChange(e.target.value)}
            style={{ fontSize: '0.875rem' }}
          />
        </div>

        {resumeData.education.map((edu, index) => (
          <div key={edu.id} className="border rounded-3 p-3 mb-3 bg-white position-relative">
            {resumeData.education.length > 1 && (
              <button
                className="btn btn-link text-danger p-0 position-absolute top-0 end-0 me-3 mt-2"
                onClick={() => removeEducation(edu.id)}
                title="Remove entry"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            )}

            <div className="mb-2">
              <label className="form-label small fw-semibold">Degree / Major / Course</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="e.g. Bachelor of Science in Business / High School Diploma"
                value={edu.degree || ''}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label className="form-label small fw-semibold">School / University / College</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="e.g. State University / City College"
                value={edu.institution || ''}
                onChange={(e) => handleChange(index, 'institution', e.target.value)}
              />
            </div>

            <div className="row g-2 mb-2">
              <div className="col-6">
                <label className="form-label small fw-semibold">Location</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="e.g. City, Country or State"
                  value={edu.location || ''}
                  onChange={(e) => handleChange(index, 'location', e.target.value)}
                />
              </div>
              <div className="col-6">
                <label className="form-label small fw-semibold">Graduation Date or Status</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="e.g. 2020 - 2024 or Expected Grad 2026"
                  value={edu.graduationDate || ''}
                  onChange={(e) => handleChange(index, 'graduationDate', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}