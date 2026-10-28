'use client';

export default function ResumePreview({ resumeData }) {
  const header = resumeData.header || {};
  const order = header.headerOrder || ['location', 'phone', 'email', 'linkedin', 'github'];
  const textAlign = header.textAlign || 'text-center';

  const flexAlignClass =
    textAlign === 'text-start' ? 'justify-content-start' :
    textAlign === 'text-end' ? 'justify-content-end' :
    'justify-content-center';

  const headerInfoList = order.map(key => header[key]).filter(Boolean);

  const skillsConfig = resumeData.skillsConfig || {
    mode: 'categorized',
    categories: [],
    bulletSkills: resumeData.skills || []
  };

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
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: 'normal',
    headingSizePx: '14px'
  };

  const visible = settings.visibleSections || {};
  const activeFontFamily = settings.fontFamily || 'Arial, Helvetica, sans-serif';
  const sectionOrder = settings.sectionOrder || ['summary', 'skills', 'workExperience', 'projects', 'education', 'certificates'];

  const getFontSizeMultiplier = () => {
    if (settings.fontSize === 'small') return '0.9';
    if (settings.fontSize === 'large') return '1.1';
    return '1';
  };

  const scaleFactor = getFontSizeMultiplier();

  const sectionTitleStyle = {
    fontSize: settings.headingSizePx || '14px',
    letterSpacing: '1px',
    color: settings.titleColor || '#0f172a',
    fontFamily: activeFontFamily
  };

  const renderSection = (sectionKey) => {
    if (sectionKey === 'summary' && visible.summary !== false && resumeData.summary) {
      return (
        <div key="summary" className="mb-3" style={{ fontFamily: activeFontFamily }}>
          <h6 className="fw-bold text-uppercase border-bottom border-dark pb-1 mb-2" style={sectionTitleStyle}>
            {resumeData.summaryTitle || 'Professional Summary'}
          </h6>
          <p
            className="text-dark small mb-0"
            style={{
              textAlign: 'justify',
              textJustify: 'inter-word',
              fontFamily: activeFontFamily,
              fontSize: `calc(0.875rem * ${scaleFactor})`,
              lineHeight: '1.15'
            }}
          >
            {resumeData.summary}
          </p>
        </div>
      );
    }

    if (sectionKey === 'skills' && visible.skills !== false && skillsConfig.categories && skillsConfig.categories.length > 0) {
      return (
        <div key="skills" className="mb-3" style={{ fontFamily: activeFontFamily }}>
          <h6 className="fw-bold text-uppercase border-bottom border-dark pb-1 mb-2" style={sectionTitleStyle}>
            {resumeData.skillsTitle || 'Skills'}
          </h6>

          {skillsConfig.mode === 'categorized' ? (
            <div className="d-flex flex-column gap-1" style={{ fontFamily: activeFontFamily }}>
              {skillsConfig.categories.map((cat, idx) => (
                cat.title || cat.items ? (
                  <div key={idx} className="small text-dark" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})`, lineHeight: '1.15' }}>
                    <span style={{ fontFamily: activeFontFamily }}>{cat.title}: </span>
                    <span className="fw-normal" style={{ fontFamily: activeFontFamily }}>{cat.items}</span>
                  </div>
                ) : null
              ))}
            </div>
          ) : (
            <div className="row g-3" style={{ fontFamily: activeFontFamily }}>
              {skillsConfig.categories.map((cat, idx) => {
                const itemList = cat.items ? cat.items.split(',').map((s) => s.trim()).filter(Boolean) : [];
                const hasLongSkill = itemList.some((item) => item.length > 10 || item.includes(' '));
                const colClass = hasLongSkill ? 'col-6' : 'col-4';
                const innerCols = hasLongSkill ? 'row-cols-2' : 'row-cols-3';

                return cat.title || itemList.length > 0 ? (
                  <div key={idx} className={`${colClass} small text-dark`} style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})`, lineHeight: '1.15' }}>
                    {cat.title && <div className="fw-bold mb-1" style={{ fontFamily: activeFontFamily }}>{cat.title}:</div>}
                    <div className={`row ${innerCols} g-1 ms-0`} style={{ fontFamily: activeFontFamily }}>
                      {itemList.map((item, i) => (
                        <div key={i} className="col ps-0" style={{ fontFamily: activeFontFamily }}>
                          <div className="d-flex align-items-center" style={{ fontFamily: activeFontFamily }}>
                            <span className="me-2 fw-bold" style={{ fontSize: '0.75rem', fontFamily: activeFontFamily }}>•</span>
                            <span style={{ fontFamily: activeFontFamily }}>{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>
      );
    }

    if (sectionKey === 'workExperience' && visible.workExperience !== false && resumeData.workExperience && resumeData.workExperience.length > 0) {
      return (
        <div key="workExperience" className="mb-3" style={{ fontFamily: activeFontFamily }}>
          <h6 className="fw-bold text-uppercase border-bottom border-dark pb-1 mb-2" style={sectionTitleStyle}>
            {resumeData.workExperienceTitle || 'Work Experience'}
          </h6>
          {resumeData.workExperience.map((work, idx) => {
            const descLines = work.description
              ? work.description.split('\n').map(l => l.trim()).filter(Boolean)
              : [];

            return (
              <div key={idx} className="mb-2" style={{ fontFamily: activeFontFamily }}>
                <div className="d-flex justify-content-between align-items-center" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})`, lineHeight: '1.15' }}>
                  <span className="fw-bold text-dark small" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{work.jobTitle}</span>
                  <span className="text-muted small fw-medium fst-italic" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{work.startDate} {work.endDate}</span>
                </div>
                <div className="text-muted small mb-1 fst-italic" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{work.company} {work.location ? `- ${work.location}` : ''}</div>
                {descLines.length > 0 && (
                  <ul className="list-unstyled mb-0 ms-0 ps-0 d-flex flex-column" style={{ fontFamily: activeFontFamily, gap: '2px' }}>
                    {descLines.map((line, i) => {
                      const cleanLine = line.replace(/^[•\-\*]\s*/, '');
                      return (
                        <li key={i} className="small text-dark d-flex align-items-start" style={{ textAlign: 'justify', textJustify: 'inter-word', fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})`, lineHeight: '1.15' }}>
                          <span className="text-center fw-bold flex-shrink-0 ms-4 me-2" style={{ width: '1.5rem', fontSize: '1.1rem', fontFamily: activeFontFamily, lineHeight: '1' }}>•</span>
                          <span className="flex-grow-1" style={{ fontFamily: activeFontFamily, lineHeight: '1.15' }}>{cleanLine}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    if (sectionKey === 'projects' && visible.projects === true && resumeData.projects && resumeData.projects.length > 0) {
      return (
        <div key="projects" className="mb-3" style={{ fontFamily: activeFontFamily }}>
          <h6 className="fw-bold text-uppercase border-bottom border-dark pb-1 mb-2" style={sectionTitleStyle}>
            {resumeData.projectsTitle || 'Projects & Key Initiatives'}
          </h6>
          {resumeData.projects.map((proj, idx) => {
            const descLines = proj.description
              ? proj.description.split('\n').map(l => l.trim()).filter(Boolean)
              : [];

            return (
              <div key={idx} className="mb-2" style={{ fontFamily: activeFontFamily }}>
                <div className="d-flex justify-content-between align-items-center" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})`, lineHeight: '1.15' }}>
                  <span className="fw-bold text-dark small" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{proj.title}</span>
                  <span className="text-muted small fw-medium fst-italic" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{proj.date}</span>
                </div>
                {proj.technologies && (
                  <div className="text-muted small mb-1 fst-italic" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>
                    {proj.technologies}
                  </div>
                )}
                {descLines.length > 0 && (
                  <ul className="list-unstyled mb-0 ms-0 ps-0 d-flex flex-column" style={{ fontFamily: activeFontFamily, gap: '2px' }}>
                    {descLines.map((line, i) => {
                      const cleanLine = line.replace(/^[•\-\*]\s*/, '');
                      return (
                        <li key={i} className="small text-dark d-flex align-items-start" style={{ textAlign: 'justify', textJustify: 'inter-word', fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})`, lineHeight: '1.15' }}>
                          <span className="text-center fw-bold flex-shrink-0 ms-4 me-2" style={{ width: '1.5rem', fontSize: '1.1rem', fontFamily: activeFontFamily, lineHeight: '1' }}>•</span>
                          <span className="flex-grow-1" style={{ fontFamily: activeFontFamily, lineHeight: '1.15' }}>{cleanLine}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    if (sectionKey === 'education' && visible.education !== false && resumeData.education && resumeData.education.length > 0) {
      return (
        <div key="education" className="mb-2" style={{ fontFamily: activeFontFamily }}>
          <h6 className="fw-bold text-uppercase border-bottom border-dark pb-1 mb-2" style={sectionTitleStyle}>
            {resumeData.educationTitle || 'Education'}
          </h6>
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="mb-1" style={{ fontFamily: activeFontFamily, lineHeight: '1.15' }}>
              <div className="d-flex justify-content-between align-items-center" style={{ fontFamily: activeFontFamily }}>
                <span className="fw-bold text-dark small" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{edu.degree || edu.level}</span>
                <span className="text-muted small fw-medium fst-italic" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{edu.graduationDate}</span>
              </div>
              <div className="text-muted small fst-italic" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>
                {edu.institution} {edu.location ? `- ${edu.location}` : ''}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (sectionKey === 'certificates' && visible.certificates !== false && resumeData.certificates && resumeData.certificates.length > 0) {
      return (
        <div key="certificates" style={{ fontFamily: activeFontFamily }}>
          <h6 className="fw-bold text-uppercase border-bottom border-dark pb-1 mb-2" style={sectionTitleStyle}>
            {resumeData.certificatesTitle || 'Certificates'}
          </h6>
          {resumeData.certificates.map((cert, idx) => (
            <div key={idx} className="mb-2" style={{ fontFamily: activeFontFamily, lineHeight: '1.15' }}>
              <span className="fw-bold text-dark small d-block" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{cert.name}</span>
              <span className="text-dark small" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{cert.issuer} ({cert.date})</span>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="card bg-white shadow-sm border-0 rounded-0 w-100 text-dark mx-auto overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '794px',
        minHeight: '923px',
        padding: '0.5in',
        boxSizing: 'border-box',
        fontFamily: activeFontFamily
      }}
    >
      <div className={`border-bottom border-dark pb-3 mb-3 ${textAlign}`} style={{ fontFamily: activeFontFamily }}>
        <h2
          className="fw-bold text-dark mb-1 fs-4"
          style={{
            fontFamily: activeFontFamily,
            fontSize: `calc(1.75rem * ${scaleFactor})`,
            lineHeight: '0.8'
          }}
        >
          {header.fullName}
        </h2>

        <div
          className={`text-dark d-flex ${flexAlignClass} align-items-center gap-2 flex-wrap mt-2`}
          style={{ fontSize: `calc(0.8rem * ${scaleFactor})`, lineHeight: '1.15', fontFamily: activeFontFamily }}
        >
          {headerInfoList.map((item, index) => (
            <span key={index} className="d-inline-flex align-items-center gap-2" style={{ fontFamily: activeFontFamily, lineHeight: '1.15' }}>
              <span className="m-0 text-dark fw-medium" style={{ fontFamily: activeFontFamily, lineHeight: '0.5' }}>{item}</span>
              {index < headerInfoList.length - 1 && (
                <span className="m-0 text-dark" style={{ userSelect: 'none', fontFamily: activeFontFamily, lineHeight: '0.5' }}>|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {sectionOrder.map((secKey) => renderSection(secKey))}
    </div>
  );
}