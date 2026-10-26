export default function SkillsSection({ resumeData, setResumeData }) {
  return (
    <div>
      <h4 className="fw-bold text-dark mb-1">Skills</h4>
      <p className="text-secondary small mb-4">Add your technical and interpersonal skill set (comma separated).</p>

      <div className="mb-3">
        <label className="form-label small fw-semibold">Skills List</label>
        <input
          type="text"
          className="form-control"
          value={resumeData.skills.join(', ')}
          onChange={(e) => setResumeData({ ...resumeData, skills: e.target.value.split(',').map(s => s.trim()) })}
        />
      </div>
    </div>
  );
}