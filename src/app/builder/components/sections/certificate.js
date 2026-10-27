export default function CertificatesSection({ resumeData, setResumeData }) {
  const sectionTitle = resumeData.certificatesTitle || 'Certificates';

  const handleTitleChange = (value) => {
    setResumeData({
      ...resumeData,
      certificatesTitle: value
    });
  };

  const handleChange = (index, field, value) => {
    const updated = [...resumeData.certificates];
    updated[index][field] = value;
    setResumeData({ ...resumeData, certificates: updated });
  };

  const addCertificate = () => {
    const newEntry = {
      id: Date.now(),
      name: '',
      issuer: '',
      date: ''
    };
    setResumeData({ ...resumeData, certificates: [...resumeData.certificates, newEntry] });
  };

  const removeCertificate = (id) => {
    setResumeData({
      ...resumeData,
      certificates: resumeData.certificates.filter(item => item.id !== id)
    });
  };

  return (
    <div className="section-workspace fade-in">
      <div className="mb-4">
        <div className="d-flex align-items-center justify-content-between pb-2 mb-1 border-bottom">
          <h5 className="fw-bold text-dark mb-0">Certifications & Licenses</h5>
          <button className="btn btn-outline-dark btn-sm rounded-pill px-3" onClick={addCertificate}>
            <i className="bi bi-plus-lg me-1"></i> Add Entry
          </button>
        </div>
        <p className="text-secondary mb-4" style={{ fontSize: '0.8rem' }}>
          List your professional certifications, licenses, training, or relevant credentials.
        </p>

        <div className="mb-3">
          <label className="form-label text-dark fw-bold small mb-1">
            Section Heading Title
          </label>
          <input
            type="text"
            className="form-control form-control-sm rounded-3 text-dark fw-medium"
            placeholder="e.g. Certificates, Certifications & Licenses, Professional Credentials"
            value={sectionTitle}
            onChange={(e) => handleTitleChange(e.target.value)}
            style={{ fontSize: '0.875rem' }}
          />
        </div>

        {resumeData.certificates.map((cert, index) => (
          <div key={cert.id} className="border rounded-3 p-3 mb-3 position-relative">
            {resumeData.certificates.length > 1 && (
              <button
                className="btn btn-link text-danger p-0 position-absolute top-0 end-0 me-3 mt-2"
                onClick={() => removeCertificate(cert.id)}
                title="Remove entry"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            )}

            <div className="mb-2">
              <label className="form-label small fw-semibold">Certificate or License Name</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="e.g. Certified Project Manager / Licensed Professional"
                value={cert.name || ''}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
              />
            </div>

            <div className="row g-2 mb-2">
              <div className="col-7">
                <label className="form-label small fw-semibold">Issuing Organization</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="e.g. Project Management Institute / Board or Association Name"
                  value={cert.issuer || ''}
                  onChange={(e) => handleChange(index, 'issuer', e.target.value)}
                />
              </div>
              <div className="col-5">
                <label className="form-label small fw-semibold">Date Issued / Year</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="e.g. 2024 or Nov 2024"
                  value={cert.date || ''}
                  onChange={(e) => handleChange(index, 'date', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}