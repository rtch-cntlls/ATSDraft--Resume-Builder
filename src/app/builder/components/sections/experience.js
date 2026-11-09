export default function WorkExperienceSection({ resumeData, setResumeData }) {
  const sectionTitle = resumeData.workExperienceTitle || '';

  const getBullets = (work) => {
    if (Array.isArray(work.bullets) && work.bullets.length > 0) {
      return work.bullets;
    }
    if (typeof work.description === 'string' && work.description.trim() !== '') {
      return work.description
        .split('\n')
        .map((line) => line.replace(/^[•\-\*\s]+/, '').trim())
        .filter(Boolean);
    }
    return [
      'Collaborated with team members to execute key project deliverables and optimize internal workflows.',
      'Analyzed operational data and generated comprehensive reports to support strategic decision-making.'
    ];
  };

  const handleTitleChange = (value) => {
    setResumeData({
      ...resumeData,
      workExperienceTitle: value
    });
  };

  const handleChange = (index, field, value) => {
    const updated = [...resumeData.workExperience];
    updated[index][field] = value;
    setResumeData({ ...resumeData, workExperience: updated });
  };

  const handleBulletChange = (workIndex, bulletIndex, value) => {
    const updated = [...resumeData.workExperience];
    const currentBullets = [...getBullets(updated[workIndex])];
    currentBullets[bulletIndex] = value;
    
    updated[workIndex] = {
      ...updated[workIndex],
      bullets: currentBullets,
      description: currentBullets.map((b) => `• ${b}`).join('\n')
    };
    
    setResumeData({ ...resumeData, workExperience: updated });
  };

  const addBullet = (workIndex) => {
    const updated = [...resumeData.workExperience];
    const currentBullets = [...getBullets(updated[workIndex]), ''];
    
    updated[workIndex] = {
      ...updated[workIndex],
      bullets: currentBullets,
      description: currentBullets.map((b) => `• ${b}`).join('\n')
    };
    
    setResumeData({ ...resumeData, workExperience: updated });
  };

  const removeBullet = (workIndex, bulletIndex) => {
    const updated = [...resumeData.workExperience];
    const currentBullets = getBullets(updated[workIndex]).filter((_, i) => i !== bulletIndex);
    
    updated[workIndex] = {
      ...updated[workIndex],
      bullets: currentBullets,
      description: currentBullets.map((b) => `• ${b}`).join('\n')
    };
    
    setResumeData({ ...resumeData, workExperience: updated });
  };

  const addExperience = () => {
    const newEntry = {
      id: Date.now(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      bullets: [''],
      description: ''
    };
    setResumeData({ ...resumeData, workExperience: [...resumeData.workExperience, newEntry] });
  };

  const removeExperience = (id) => {
    setResumeData({
      ...resumeData,
      workExperience: resumeData.workExperience.filter(item => item.id !== id)
    });
  };

  return (
    <div className="section-workspace fade-in">
      <div className="mb-4">
        <div className="d-flex align-items-center justify-content-between pb-2 mb-1 border-bottom">
          <h5 className="fw-bold text-dark mb-0">Work Experience</h5>
          <button className="btn btn-outline-dark btn-sm rounded-pill px-3" onClick={addExperience}>
            <i className="bi bi-plus-lg me-1"></i> Add Position
          </button>
        </div>
        <p className="text-secondary mb-4" style={{ fontSize: '0.8rem' }}>
          Detail your work history, internships, or freelance roles starting with your most recent position.
        </p>

        <div className="d-flex flex-column gap-3">
          <div>
            <label className="form-label text-dark fw-bold small mb-1">
              Section Heading Title
            </label>
            <input
              type="text"
              className="form-control form-control-sm rounded-3 text-dark fw-medium"
              placeholder="e.g. Work Experience, Professional Experience, Employment History"
              value={sectionTitle}
              onChange={(e) => handleTitleChange(e.target.value)}
              style={{ fontSize: '0.875rem' }}
            />
          </div>

          {resumeData.workExperience.map((work, index) => {
            const bullets = getBullets(work);
            return (
              <div key={work.id} className="border rounded-3 p-3 bg-white position-relative">
                {resumeData.workExperience.length > 1 && (
                  <button
                    className="btn btn-link text-danger p-0 position-absolute top-0 end-0 me-3 mt-2"
                    onClick={() => removeExperience(work.id)}
                    title="Remove work experience entry"
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                )}
                <div className="mb-2">
                  <label className="form-label small fw-semibold">Job Title / Position</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={work.jobTitle}
                    placeholder="e.g. Operations Manager / Sales Associate / Project Lead"
                    onChange={(e) => handleChange(index, 'jobTitle', e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label small fw-semibold">Company or Organization</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={work.company}
                    placeholder="e.g. Acme Corporation / Global Solutions Co."
                    onChange={(e) => handleChange(index, 'company', e.target.value)}
                  />
                </div>
                <div className="row g-2 mb-2">
                  <div className="col-6">
                    <label className="form-label small fw-semibold">Start Date</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={work.startDate || ''}
                      placeholder="e.g. Jan 2026"
                      onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label small fw-semibold">End Date</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={work.endDate || ''}
                      placeholder="e.g. Present or Dec 2026"
                      onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <label className="form-label small fw-semibold mb-0">Key Responsibilities & Achievements</label>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary py-1 px-2"
                      style={{ fontSize: '0.75rem' }}
                      onClick={() => addBullet(index)}
                    >
                      <i className="bi bi-plus me-1"></i> Add Bullet
                    </button>
                  </div>

                  <div className="d-flex flex-column gap-2 mt-2">
                    {bullets.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="d-flex flex-column gap-1">
                        <span className="text-muted fw-semibold" style={{ fontSize: '0.75rem' }}>
                          Bullet {bulletIndex + 1}
                        </span>
                        <div className="d-flex align-items-start gap-2">
                          <textarea
                            className="form-control form-control-sm"
                            rows={2}
                            value={bullet}
                            placeholder="e.g. Spearheaded a cross-functional team to launch new feature..."
                            onChange={(e) => handleBulletChange(index, bulletIndex, e.target.value)}
                          ></textarea>
                          {bullets.length > 1 && (
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm px-2 py-1"
                              onClick={() => removeBullet(index, bulletIndex)}
                              title="Remove bullet"
                            >
                              <i className="bi bi-dash"></i>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}