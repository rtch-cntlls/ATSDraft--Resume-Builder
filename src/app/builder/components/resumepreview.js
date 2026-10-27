export default function ResumePreview({ resumeData }) {
  const header = resumeData.header || {};
  const order = header.headerOrder || ['location', 'phone', 'email', 'linkedin', 'github'];
  const textAlign = header.textAlign || 'text-center';

  const flexAlignClass =
    textAlign === 'text-start' ? 'justify-content-start' :
    textAlign === 'text-end' ? 'justify-content-end' :
    'justify-content-center';

  const headerInfoList = order
    .map(key => header[key])
    .filter(Boolean);

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
      education: true,
      certificates: true
    },
    titleColor: '#0f172a',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: 'normal'
  };

  const visible = settings.visibleSections || {};
  const activeFontFamily = settings.fontFamily || 'Arial, Helvetica, sans-serif';

  const getFontSizeMultiplier = () => {
    if (settings.fontSize === 'small') return '0.9';
    if (settings.fontSize === 'large') return '1.1';
    return '1';
  };

  const scaleFactor = getFontSizeMultiplier();

  const sectionTitleStyle = {
    fontSize: `calc(0.8rem * ${scaleFactor})`,
    letterSpacing: '1px',
    color: settings.titleColor || '#0f172a',
    fontFamily: activeFontFamily
  };

  return (
    <div
      className="card bg-white shadow-sm border-0 rounded-0 w-100 text-dark mx-auto overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '794px',
        minHeight: '1123px',
        padding: '0.5in',
        boxSizing: 'border-box',
        fontFamily: activeFontFamily
      }}
    >
      <div className={`border-bottom border-dark pb-3 mb-3 ${textAlign}`} style={{ fontFamily: activeFontFamily }}>
        <h1 className="fw-bold text-dark mb-1 fs-3 lh-1" style={{ fontFamily: activeFontFamily, fontSize: `calc(1.75rem * ${scaleFactor})` }}>
          {header.fullName}
        </h1>

        <div
          className={`text-dark d-flex ${flexAlignClass} align-items-center gap-2 flex-wrap lh-1 mt-2`}
          style={{ fontSize: `calc(0.8rem * ${scaleFactor})`, lineHeight: '1', fontFamily: activeFontFamily }}
        >
          {headerInfoList.map((item, index) => (
            <span key={index} className="d-inline-flex align-items-center gap-2 lh-1" style={{ fontFamily: activeFontFamily }}>
              <span className="m-0 text-dark fw-medium lh-1" style={{ fontFamily: activeFontFamily }}>{item}</span>
              {index < headerInfoList.length - 1 && (
                <span className="m-0 text-dark lh-1" style={{ userSelect: 'none', fontFamily: activeFontFamily }}>|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {visible.summary !== false && resumeData.summary && (
        <div className="mb-3" style={{ fontFamily: activeFontFamily }}>
          <h6
            className="fw-bold text-uppercase border-bottom border-dark pb-1 mb-2"
            style={sectionTitleStyle}
          >
            Professional Summary
          </h6>
          <p
            className="text-dark small lh-base mb-0"
            style={{
              textAlign: 'justify',
              textJustify: 'inter-word',
              fontFamily: activeFontFamily,
              fontSize: `calc(0.875rem * ${scaleFactor})`
            }}
          >
            {resumeData.summary}
          </p>
        </div>
      )}

      {visible.skills !== false && skillsConfig.categories && skillsConfig.categories.length > 0 && (
        <div className="mb-3" style={{ fontFamily: activeFontFamily }}>
          <h6
            className="fw-bold text-uppercase border-bottom border-dark pb-1 mb-2"
            style={sectionTitleStyle}
          >
            Skills
          </h6>

          {skillsConfig.mode === 'categorized' ? (
            <div className="d-flex flex-column gap-1" style={{ fontFamily: activeFontFamily }}>
              {skillsConfig.categories.map((cat, idx) => (
                cat.title || cat.items ? (
                  <div key={idx} className="small text-dark lh-base" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>
                    <span className="fw-bold" style={{ fontFamily: activeFontFamily }}>{cat.title}: </span>
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
                  <div key={idx} className={`${colClass} small text-dark lh-base`} style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>
                    {cat.title && <div className="fw-bold" style={{ fontFamily: activeFontFamily }}>{cat.title}:</div>}
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
      )}

      {visible.workExperience !== false && resumeData.workExperience && resumeData.workExperience.length > 0 && (
        <div className="mb-3" style={{ fontFamily: activeFontFamily }}>
          <h6 className="fw-bold text-uppercase border-bottom border-dark pb-1 mb-2" style={sectionTitleStyle}>
            Work Experience
          </h6>
          {resumeData.workExperience.map((work, idx) => {
            const descLines = work.description
              ? work.description.split('\n').map(l => l.trim()).filter(Boolean)
              : [];

            return (
              <div key={idx} className="mb-1" style={{ fontFamily: activeFontFamily }}>
                <div className="d-flex justify-content-between align-items-center" style={{ fontFamily: activeFontFamily }}>
                  <span className="fw-bold text-dark small" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{work.jobTitle}</span>
                  <span className="text-dark small fw-medium" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{work.startDate} - {work.endDate}</span>
                </div>
                <div className="text-dark small mb-1" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{work.company}</div>
                {descLines.length > 0 && (
                  <ul className="list-unstyled mb-0 ms-0 ps-0 d-flex flex-column gap-1" style={{ fontFamily: activeFontFamily }}>
                    {descLines.map((line, i) => {
                      const cleanLine = line.replace(/^[•\-\*]\s*/, '');
                      return (
                        <li key={i} className="small text-dark lh-base d-flex align-items-start" style={{  textAlign: 'justify',
                          textJustify: 'inter-word',fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>
                          <span className="me-2 fw-bold" style={{ fontSize: '0.75rem', fontFamily: activeFontFamily }}>•</span>
                          <span style={{ fontFamily: activeFontFamily }}>{cleanLine}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}

      {visible.education !== false && resumeData.education && resumeData.education.length > 0 && (
        <div className="mb-2" style={{ fontFamily: activeFontFamily }}>
          <h6 className="fw-bold text-uppercase border-bottom border-dark pb-1 mb-2" style={sectionTitleStyle}>
            Education
          </h6>
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="mb-1" style={{ fontFamily: activeFontFamily }}>
              <div className="d-flex justify-content-between align-items-center" style={{ fontFamily: activeFontFamily }}>
                <span className="fw-bold text-dark small" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{edu.degree || edu.level}</span>
                <span className="text-dark small fw-medium" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{edu.graduationDate}</span>
              </div>
              <div className="text-dark small" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>
                {edu.institution} {edu.location ? `- ${edu.location}` : ''}
              </div>
            </div>
          ))}
        </div>
      )}

      {visible.certificates !== false && resumeData.certificates && resumeData.certificates.length > 0 && (
        <div style={{ fontFamily: activeFontFamily }}>
          <h6 className="fw-bold text-uppercase border-bottom border-dark pb-1 mb-2" style={sectionTitleStyle}>
            Certificates
          </h6>
          {resumeData.certificates.map((cert, idx) => (
            <div key={idx} className="mb-2" style={{ fontFamily: activeFontFamily }}>
              <span className="fw-bold text-dark small d-block" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{cert.name}</span>
              <span className="text-dark small" style={{ fontFamily: activeFontFamily, fontSize: `calc(0.875rem * ${scaleFactor})` }}>{cert.issuer} ({cert.date})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}