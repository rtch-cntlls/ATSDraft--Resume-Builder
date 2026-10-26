export default function ResumePreview({ resumeData }) {
  const header = resumeData.header || {};
  const order = header.headerOrder || ['location', 'phone', 'email', 'linkedin', 'github'];
  const textAlign = header.textAlign || 'text-center'; // Dynamic alignment class

  // Map alignment class to flex alignment utilities for info items
  const flexAlignClass = 
    textAlign === 'text-start' ? 'justify-content-start' :
    textAlign === 'text-end' ? 'justify-content-end' : 
    'justify-content-center';

  const headerInfoList = order
    .map(key => header[key])
    .filter(Boolean);

  return (
    <div 
      className="card bg-white shadow-sm border-0 rounded-0 w-100 text-dark mx-auto overflow-hidden" 
      style={{ 
        width: '100%',
        maxWidth: '794px',
        minHeight: '1123px',
        padding: '0.5in',
        boxSizing: 'border-box'
      }}
    >
      <div className={`border-bottom border-dark pb-3 mb-4 ${textAlign}`}>
        <h1 className="fw-bold text-dark mb-1 fs-3 lh-1">{header.fullName}</h1>
        
        <div 
          className={`text-dark d-flex ${flexAlignClass} align-items-center gap-2 flex-wrap lh-1 mt-2`} 
          style={{ fontSize: "0.8rem", lineHeight: "1" }}
        >
          {headerInfoList.map((item, index) => (
            <span key={index} className="d-inline-flex align-items-center gap-2 lh-1">
              <span className="m-0 text-dark fw-medium lh-1">{item}</span>
              {index < headerInfoList.length - 1 && (
                <span className="m-0 text-dark lh-1" style={{ userSelect: 'none' }}>|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {resumeData.summary && (
        <div className="mb-4">
          <h6 className="fw-bold text-uppercase text-dark border-bottom border-dark pb-1 mb-2" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
            Professional Summary
          </h6>
          <p className="text-dark small lh-base mb-0">{resumeData.summary}</p>
        </div>
      )}

      {resumeData.skills && resumeData.skills.length > 0 && (
        <div className="mb-4">
          <h6 className="fw-bold text-uppercase text-dark border-bottom border-dark pb-1 mb-2" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
            Skills
          </h6>
          <div className="d-flex flex-wrap gap-1">
            {resumeData.skills.map((skill, i) => (
              <span key={i} className="badge bg-light text-dark border border-dark-subtle px-2 py-1 small fw-normal">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {resumeData.workExperience && resumeData.workExperience.length > 0 && (
        <div className="mb-4">
          <h6 className="fw-bold text-uppercase text-dark border-bottom border-dark pb-1 mb-2" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
            Work Experience
          </h6>
          {resumeData.workExperience.map((work, idx) => (
            <div key={idx} className="mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold text-dark small">{work.jobTitle}</span>
                <span className="text-dark small fw-medium">{work.startDate} - {work.endDate}</span>
              </div>
              <div className="text-dark small fw-semibold mb-1">{work.company}</div>
              <p className="text-dark small mb-0 lh-base">{work.description}</p>
            </div>
          ))}
        </div>
      )}

      {resumeData.education && resumeData.education.length > 0 && (
        <div className="mb-4">
          <h6 className="fw-bold text-uppercase text-dark border-bottom border-dark pb-1 mb-2" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
            Education
          </h6>
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold text-dark small">{edu.degree}</span>
                <span className="text-dark small fw-medium">{edu.graduationDate}</span>
              </div>
              <div className="text-dark small">{edu.institution}</div>
            </div>
          ))}
        </div>
      )}

      {resumeData.certificates && resumeData.certificates.length > 0 && (
        <div>
          <h6 className="fw-bold text-uppercase text-dark border-bottom border-dark pb-1 mb-2" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
            Certificates
          </h6>
          {resumeData.certificates.map((cert, idx) => (
            <div key={idx} className="mb-2">
              <span className="fw-bold text-dark small d-block">{cert.name}</span>
              <span className="text-dark small">{cert.issuer} ({cert.date})</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}