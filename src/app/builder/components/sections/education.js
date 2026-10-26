export default function EducationSection({ resumeData, setResumeData }) {
  const handleChange = (index, field, value) => {
    const updated = [...resumeData.education];
    updated[index][field] = value;
    setResumeData({ ...resumeData, education: updated });
  };

  return (
    <div>
      <h4 className="fw-bold text-dark mb-1">Education</h4>
      <p className="text-secondary small mb-4">Add your academic background.</p>

      {resumeData.education.map((edu, index) => (
        <div key={edu.id} className="border rounded-3 p-3 mb-3 bg-light">
          <div className="mb-2">
            <label className="form-label small fw-semibold">Degree</label>
            <input
              type="text"
              className="form-control form-control-sm"
              value={edu.degree}
              onChange={(e) => handleChange(index, 'degree', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label small fw-semibold">Institution</label>
            <input
              type="text"
              className="form-control form-control-sm"
              value={edu.institution}
              onChange={(e) => handleChange(index, 'institution', e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}