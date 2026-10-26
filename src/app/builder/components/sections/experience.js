export default function WorkExperienceSection({ resumeData, setResumeData }) {
  const handleChange = (index, field, value) => {
    const updated = [...resumeData.workExperience];
    updated[index][field] = value;
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
    <div>
      <div className="d-flex justify-content-between align-items-center mb-1">
        <h4 className="fw-bold text-dark mb-0">Work Experience</h4>
        <button className="btn btn-outline-primary btn-sm rounded-pill px-3" onClick={addExperience}>
          <i className="bi bi-plus-lg me-1"></i> Add
        </button>
      </div>
      <p className="text-secondary small mb-4">Add your relevant employment history.</p>

      {resumeData.workExperience.map((work, index) => (
        <div key={work.id} className="border rounded-3 p-3 mb-3 bg-light position-relative">
          {resumeData.workExperience.length > 1 && (
            <button
              className="btn btn-link text-danger p-0 position-absolute top-0 end-0 me-3 mt-2"
              onClick={() => removeExperience(work.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          )}
          <div className="mb-2">
            <label className="form-label small fw-semibold">Job Title</label>
            <input
              type="text"
              className="form-control form-control-sm"
              value={work.jobTitle}
              onChange={(e) => handleChange(index, 'jobTitle', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label small fw-semibold">Company</label>
            <input
              type="text"
              className="form-control form-control-sm"
              value={work.company}
              onChange={(e) => handleChange(index, 'company', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label small fw-semibold">Description (Action + Responsibility + Result)</label>
            <textarea
              className="form-control form-control-sm"
              rows={3}
              value={work.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
            ></textarea>
          </div>
        </div>
      ))}
    </div>
  );
}