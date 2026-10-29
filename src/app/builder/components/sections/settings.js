'use client';

export default function SettingsSection({ resumeData, setResumeData }) {
  const settings = resumeData.settings || {
    visibleSections: {
      summary: true,
      skills: true,
      workExperience: true,
      projects: false,
      education: true,
      certificates: true
    },
    sectionOrder: ['summary', 'skills', 'workExperience', 'projects', 'education', 'certificates'],
    titleColor: '#0f172a',
    fontFamily: 'Arial, sans-serif',
    fontSize: 'normal',
    headingSizePx: '14px'
  };

  const updateSettings = (newSettings) => {
    setResumeData({
      ...resumeData,
      settings: newSettings
    });
  };

  const handleVisibilityToggle = (sectionKey) => {
    const nextVisible = !settings.visibleSections?.[sectionKey];
    updateSettings({
      ...settings,
      visibleSections: {
        ...settings.visibleSections,
        [sectionKey]: nextVisible
      },
      projects: sectionKey === 'projects' && nextVisible && (!resumeData.projects || resumeData.projects.length === 0)
        ? [{ id: Date.now(), title: '', technologies: '', date: '', description: '' }]
        : resumeData.projects
    });
  };

  const handleStyleChange = (field, value) => {
    updateSettings({
      ...settings,
      [field]: value
    });
  };

  const moveSection = (index, direction) => {
    const currentOrder = settings.sectionOrder || ['summary', 'skills', 'workExperience', 'projects', 'education', 'certificates'];
    const newOrder = [...currentOrder];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newOrder.length) return;

    const temp = newOrder[index];
    newOrder[index] = newOrder[targetIndex];
    newOrder[targetIndex] = temp;

    updateSettings({
      ...settings,
      sectionOrder: newOrder
    });
  };

  const palette = [
    { name: 'Dark Slate', hex: '#0f172a' },
    { name: 'Navy Blue', hex: '#1e3a8a' },
    { name: 'Forest Green', hex: '#065f46' },
    { name: 'Deep Bronze', hex: '#7c2d12' },
    { name: 'Royal Purple', hex: '#4c1d95' },
    { name: 'Solid Black', hex: '#000000' }
  ];

  const typography = [
    { label: 'Arial', value: 'Arial, Helvetica, sans-serif' },
    { label: 'Times New Roman', value: '"Times New Roman", Times, serif' },
    { label: 'Calibri', value: 'Calibri, "Segoe UI", sans-serif' },
    { label: 'Courier New', value: '"Courier New", Courier, monospace' }
  ];

  const sectionMetadata = {
    summary: { label: 'Professional Summary', icon: 'bi-card-text', desc: 'Display or hide your introductory profile statement' },
    skills: { label: 'Skills & Competencies', icon: 'bi-stars', desc: 'Display or hide your key skills and technical abilities' },
    workExperience: { label: 'Work History', icon: 'bi-briefcase', desc: 'Display or hide your job experience and achievements' },
    projects: { label: 'Projects & Key Initiatives', icon: 'bi-folder2-open', desc: 'Display or hide your key projects, capstones, or research' },
    education: { label: 'Education & Academics', icon: 'bi-mortarboard', desc: 'Display or hide your degrees, schools, and coursework' },
    certificates: { label: 'Certifications & Licenses', icon: 'bi-award', desc: 'Display or hide your professional credentials' }
  };

  const currentOrder = settings.sectionOrder || ['summary', 'skills', 'workExperience', 'projects', 'education', 'certificates'];

  const visibleOrder = currentOrder.filter((secKey) => {
    if (secKey === 'projects') {
      return settings.visibleSections?.projects === true;
    }
    return true;
  });

  const headingSizeOptions = ['12px', '14px', '16px', '18px', '20px'];

  return (
    <div className="section-workspace fade-in px-1">
      <div className="d-flex align-items-center justify-content-between pb-2 mb-1 border-bottom">
        <h5 className="fw-bold text-dark mb-0">Resume Design & Layout</h5>
      </div>
      <p className="text-secondary mb-4" style={{ fontSize: '0.8rem' }}>
        Customize your resume layout by reordering sections, toggling visibility, adjusting text appearance, and selecting custom header colors.
      </p>
      <div className="d-flex flex-column gap-4">
        <div className="bg-white">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div>
              <span className="d-block fw-bold text-dark text-uppercase" style={{ fontSize: '0.9rem' }}>
                Typography & Sizing
              </span>
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Adjust font style and overall text sizing for optimal readability</span>
            </div>
            <i className="bi bi-fonts text-muted fs-5"></i>
          </div>

          <div className="mb-3">
            <label className="form-label text-dark fw-medium small mb-2 d-block">Font Style</label>
            <div className="btn-group w-100 bg-light p-1 rounded-2 border" role="group">
              <div className="row g-2 w-100 m-0">
                {typography.map((font, idx) => {
                  const active = settings.fontFamily === font.value;
                  return (
                    <div key={idx} className="col-3 m-0">
                      <button
                        type="button"
                        className={`w-100 btn btn-sm rounded-2 py-1 border transition-all text-center d-flex flex-column align-items-center justify-content-center shadow-none ${
                          active ? 'bg-dark text-white border-dark shadow-xs' : 'text-secondary bg-transparent border-0'
                        }`}
                        onClick={() => handleStyleChange('fontFamily', font.value)}
                        style={{ fontSize: '0.8rem', fontFamily: font.value }}
                      >
                        <span className="fw-semibold text-truncate w-100">{font.label}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label text-dark fw-semibold small mb-1">Overall Text Size</label>
            <div className="btn-group w-100 bg-light p-1 rounded-2 border" role="group">
              {[
                { key: 'small', label: 'Compact' },
                { key: 'normal', label: 'Standard' },
                { key: 'large', label: 'Large' }
              ].map((scale) => {
                const active = (settings.fontSize === scale.key) || (!settings.fontSize && scale.key === 'normal');
                return (
                  <button
                    key={scale.key}
                    type="button"
                    className={`btn btn-sm fw-medium rounded-2 transition-all shadow-none py-1 d-flex align-items-center justify-content-center ${active ? 'bg-dark text-white shadow-xs' : 'text-secondary bg-transparent border-0'
                      }`}
                    onClick={() => handleStyleChange('fontSize', scale.key)}
                    style={{ fontSize: '0.8rem' }}
                  >
                    {scale.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="form-label text-dark fw-semibold small mb-1">Section Heading Size</label>
            <div className="btn-group w-100 bg-light p-1 rounded-2 border" role="group">
              {headingSizeOptions.map((pxValue) => {
                const active = (settings.headingSizePx === pxValue) || (!settings.headingSizePx && pxValue === '14px');
                return (
                  <button
                    key={pxValue}
                    type="button"
                    className={`btn btn-sm fw-medium rounded-2 transition-all shadow-none py-1 d-flex align-items-center justify-content-center ${active ? 'bg-dark text-white shadow-xs' : 'text-secondary bg-transparent border-0'
                      }`}
                    onClick={() => handleStyleChange('headingSizePx', pxValue)}
                    style={{ fontSize: '0.8rem' }}
                  >
                    {pxValue}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white mb-3">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div>
              <span className="d-block fw-bold text-dark text-uppercase" style={{ fontSize: '0.9rem' }}>
                Header Accent Color
              </span>
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Choose an accent color for section headings and divider highlights</span>
            </div>
            <i className="bi bi-palette text-muted fs-5"></i>
          </div>

          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-2">
              <div className="position-relative rounded-circle overflow-hidden border shadow-sm" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                <input
                  type="color"
                  className="position-absolute border-0 p-0 cursor-pointer"
                  style={{ width: '60px', height: '60px', top: '-12px', left: '-12px' }}
                  value={settings.titleColor || '#0f172a'}
                  onChange={(e) => handleStyleChange('titleColor', e.target.value)}
                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  className="form-control form-control-sm text-dark font-monospace fw-semibold shadow-none bg-light border-secondary-subtle"
                  value={settings.titleColor || '#0f172a'}
                  onChange={(e) => handleStyleChange('titleColor', e.target.value)}
                  style={{ fontSize: '0.8rem', maxWidth: '140px' }}
                />
              </div>
            </div>

            <div className="row g-2">
              {palette.map((item, i) => {
                const isSelected = settings.titleColor?.toLowerCase() === item.hex.toLowerCase();
                return (
                  <div key={i} className="col-4">
                    <button
                      type="button"
                      className={`w-100 btn btn-sm d-flex align-items-center gap-2 py-2 px-2 rounded-3 border transition-all text-start shadow-none ${isSelected ? 'bg-dark text-white border-dark' : 'bg-light border-secondary-subtle text-dark hover-bg-white'
                        }`}
                      onClick={() => handleStyleChange('titleColor', item.hex)}
                    >
                      <span className="rounded-circle border shadow-xs" style={{ width: '14px', height: '14px', backgroundColor: item.hex, flexShrink: 0 }}></span>
                      <span className="text-truncate" style={{ fontSize: '0.7rem', fontWeight: isSelected ? '600' : '500' }}>{item.name}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

         <div className="bg-white mb-4">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div>
              <span className="d-block fw-bold text-dark text-uppercase" style={{ fontSize: '0.9rem' }}>
                Section Order & Visibility
              </span>
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Arrange sequence and control which sections appear on your resume</span>
            </div>
            <i className="bi bi-list-nested text-muted fs-5"></i>
          </div>

          <div className="d-flex flex-column gap-2">
            {visibleOrder.map((secKey, index) => {
              const sec = sectionMetadata[secKey];
              if (!sec) return null;
              const isVisible = settings.visibleSections?.[secKey] !== false;

              return (
                <div
                  key={secKey}
                  className={`p-2 rounded-3 border-0 transition-all d-flex align-items-center justify-content-between ${isVisible ? 'bg-light border-secondary-subtle' : 'bg-white border-dashed opacity-75'
                    }`}
                >
                  <div className="d-flex align-items-center gap-2">
                    <div className={`rounded-2 p-1 d-none d-lg-flex align-items-center justify-content-center ${isVisible ? 'bg-dark text-white' : 'bg-secondary-subtle text-muted'}`} style={{ width: '28px', height: '28px' }}>
                      <i className={`bi ${sec.icon}`} style={{ fontSize: '0.85rem' }}></i>
                    </div>
                    <div>
                      <span className="d-block text-dark fw-semibold" style={{ fontSize: '0.825rem', lineHeight: '1.2' }}>{sec.label}</span>
                      <span className="text-muted" style={{ fontSize: '0.7rem' }}>{sec.desc}</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-5">
                    <div className="btn-group btn-group-sm shadow-none" role="group">
                      <button
                        type="button"
                        className="btn btn-white btn-sm border py-0 px-2 shadow-sm"
                        disabled={index === 0}
                        onClick={() => moveSection(currentOrder.indexOf(secKey), 'up')}
                        title="Move Up"
                      >
                        <i className="bi bi-chevron-up" style={{ fontSize: '0.75rem' }}></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-white btn-sm border py-0 px-2 shadow-sm"
                        disabled={index === visibleOrder.length - 1}
                        onClick={() => moveSection(currentOrder.indexOf(secKey), 'down')}
                        title="Move Down"
                      >
                        <i className="bi bi-chevron-down" style={{ fontSize: '0.75rem' }}></i>
                      </button>
                    </div>

                    <div className="form-check form-switch m-0 ps-2 border-start">
                      <input
                        className="form-check-input cursor-pointer shadow-none"
                        type="checkbox"
                        role="switch"
                        id={`toggle-${secKey}`}
                        checked={isVisible}
                        onChange={() => handleVisibilityToggle(secKey)}
                        style={{ width: '36px', height: '18px' }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}