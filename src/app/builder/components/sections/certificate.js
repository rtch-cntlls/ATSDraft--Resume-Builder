export default function CertificatesSection({ resumeData, setResumeData }) {
  const handleChange = (index, field, value) => {
    const updated = [...resumeData.certificates];
    updated[index][field] = value;
    setResumeData({ ...resumeData, certificates: updated });
  };

  return (
    <div>
      <h4 className="fw-bold text-dark mb-1">Certificates</h4>
      <p className="text-secondary small mb-4">Add your licenses or certifications.</p>

      {resumeData.certificates.map((cert, index) => (
        <div key={cert.id} className="border rounded-3 p-3 mb-3 bg-light">
          <div className="mb-2">
            <label className="form-label small fw-semibold">Certificate Name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              value={cert.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}