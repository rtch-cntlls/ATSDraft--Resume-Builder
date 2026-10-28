'use client';

export default function ProjectSection({ resumeData, setResumeData }) {
  const isEnabled = resumeData?.settings?.visibleSections?.projects ?? false;
  const sectionTitle = resumeData.projectsTitle || 'Projects & Key Initiatives';

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
        ? [{ id: Date.now(), title: '', technologies: '', date: '', description: '' }]
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

  const addProject = () => {
    const newEntry = {
      id: Date.now(),
      title: '',
      technologies: '',
      date: '',
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

            {projects.map((proj, index) => (
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
                  <label className="form-label small fw-semibold">Key Highlights & Deliverables</label>
                  <textarea
                    className="form-control form-control-sm"
                    rows={4}
                    value={proj.description || ''}
                    placeholder="• Developed scalable architecture...&#10;• Led cross-functional team..."
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                  ></textarea>
                </div>
              </div>
            ))}
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