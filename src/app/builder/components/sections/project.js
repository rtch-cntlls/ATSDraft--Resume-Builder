'use client';

export default function ProjectSection({ resumeData, setResumeData }) {
  const isEnabled = resumeData?.settings?.visibleSections?.projects ?? false;
  const sectionTitle = resumeData.projectsTitle || '';

  // Helper to safely retrieve or parse bullets array
  const getBullets = (proj) => {
    if (Array.isArray(proj.bullets) && proj.bullets.length > 0) {
      return proj.bullets;
    }
    if (typeof proj.description === 'string' && proj.description.trim() !== '') {
      return proj.description
        .split('\n')
        .map((line) => line.replace(/^[•\-\*\s]+/, '').trim())
        .filter(Boolean);
    }
    return [
      'Developed and implemented a systematic workflow process that reduced administrative overhead by 20%.',
      'Coordinated cross-functional tasks to ensure timely project completion.'
    ];
  };

  const handleToggleSection = (e) => {
    const checked = e.target.checked;
    setResumeData({
      ...resumeData,
      settings: {
        ...resumeData.settings,
        visibleSections: {
          ...resumeData.settings?.visibleSections,
          projects: checked
        }
      },
      projects: checked && (!resumeData.projects || resumeData.projects.length === 0)
        ? [{ id: Date.now(), title: '', technologies: '', date: '', bullets: [''], description: '' }]
        : resumeData.projects
    });
  };

  const handleTitleChange = (value) => {
    setResumeData({
      ...resumeData,
      projectsTitle: value
    });
  };

  const handleChange = (index, field, value) => {
    const updated = [...(resumeData.projects || [])];
    updated[index][field] = value;
    setResumeData({ ...resumeData, projects: updated });
  };

  const handleBulletChange = (projIndex, bulletIndex, value) => {
    const updated = [...(resumeData.projects || [])];
    const currentBullets = [...getBullets(updated[projIndex])];
    currentBullets[bulletIndex] = value;

    updated[projIndex] = {
      ...updated[projIndex],
      bullets: currentBullets,
      description: currentBullets.map((b) => `• ${b}`).join('\n')
    };

    setResumeData({ ...resumeData, projects: updated });
  };

  const addBullet = (projIndex) => {
    const updated = [...(resumeData.projects || [])];
    const currentBullets = [...getBullets(updated[projIndex]), ''];

    updated[projIndex] = {
      ...updated[projIndex],
      bullets: currentBullets,
      description: currentBullets.map((b) => `• ${b}`).join('\n')
    };

    setResumeData({ ...resumeData, projects: updated });
  };

  const removeBullet = (projIndex, bulletIndex) => {
    const updated = [...(resumeData.projects || [])];
    const currentBullets = getBullets(updated[projIndex]).filter((_, i) => i !== bulletIndex);

    updated[projIndex] = {
      ...updated[projIndex],
      bullets: currentBullets,
      description: currentBullets.map((b) => `• ${b}`).join('\n')
    };

    setResumeData({ ...resumeData, projects: updated });
  };

  const addProject = () => {
    const newEntry = {
      id: Date.now(),
      title: '',
      technologies: '',
      date: '',
      bullets: [''],
      description: ''
    };
    setResumeData({ ...resumeData, projects: [...(resumeData.projects || []), newEntry] });
  };

  const removeProject = (id) => {
    setResumeData({
      ...resumeData,
      projects: (resumeData.projects || []).filter((item) => item.id !== id)
    });
  };

  const projects = resumeData.projects || [];

  return (
    <div className="section-workspace fade-in">
      <div className="mb-4">
        <div className="d-flex align-items-center justify-content-between pb-2 mb-1 border-bottom">
          <h5 className="fw-bold text-dark mb-1">Include Projects Section</h5>
          <div className="form-check form-switch fs-4 ms-3 ">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="enableProjectsToggle"
              checked={isEnabled}
              onChange={handleToggleSection}
              style={{ cursor: 'pointer', width: '36px', height: '18px' }}
            />
          </div>
        </div>
        <p className="text-secondary mb-4" style={{ fontSize: '0.8rem' }}>
          Enable this section if you want to highlight projects, capstones, or research.
        </p>
        {isEnabled ? (
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center justify-content-between">
              <span className="fw-bold text-dark small">Project Entries</span>
              <button className="btn btn-outline-dark btn-sm rounded-pill px-3" onClick={addProject}>
                <i className="bi bi-plus-lg me-1"></i> Add Project
              </button>
            </div>

            <div>
              <label className="form-label text-dark fw-bold small mb-1">
                Section Heading Title
              </label>
              <input
                type="text"
                className="form-control form-control-sm rounded-3 text-dark fw-medium"
                placeholder="e.g. Projects, Academic Research, Key Initiatives"
                value={sectionTitle}
                onChange={(e) => handleTitleChange(e.target.value)}
                style={{ fontSize: '0.875rem' }}
              />
            </div>

            {projects.map((proj, index) => {
              const bullets = getBullets(proj);
              return (
                <div key={proj.id || index} className="border rounded-3 p-3 bg-white position-relative shadow-sm">
                  {projects.length > 1 && (
                    <button
                      className="btn btn-link text-danger p-0 position-absolute top-0 end-0 me-3 mt-2"
                      onClick={() => removeProject(proj.id)}
                      title="Remove project entry"
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  )}

                  <div className="mb-2">
                    <label className="form-label small fw-semibold">Project / Initiative Title</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={proj.title || ''}
                      placeholder="e.g. E-Commerce Platform / Menu Development Capstone"
                      onChange={(e) => handleChange(index, 'title', e.target.value)}
                    />
                  </div>

                  <div className="mb-2">
                    <label className="form-label small fw-semibold">Tools, Technologies, or Core Focus</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={proj.technologies || ''}
                      placeholder="e.g. React.js, Node.js / Food Safety Protocols"
                      onChange={(e) => handleChange(index, 'technologies', e.target.value)}
                    />
                  </div>

                  <div className="mb-2">
                    <label className="form-label small fw-semibold">Date / Duration</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={proj.date || ''}
                      placeholder="e.g. Jan 2026 – Apr 2026"
                      onChange={(e) => handleChange(index, 'date', e.target.value)}
                    />
                  </div>

                  <div className="mb-2">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <label className="form-label small fw-semibold mb-0">Key Highlights & Deliverables</label>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary py-0 px-2"
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
                              placeholder="e.g. Developed scalable architecture to support thousands of daily requests..."
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
        ) : (
          <div className="text-center py-4 bg-white rounded-3 border border-dashed">
            <p className="text-muted small mb-0 p-3">
              Projects section is currently disabled. Toggle the switch above to include it on your resume.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}