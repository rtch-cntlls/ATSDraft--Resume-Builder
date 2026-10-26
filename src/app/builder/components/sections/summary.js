export default function SummarySection({ resumeData, setResumeData }) {
  return (
    <div>
      <h4 className="fw-bold text-dark mb-1">Professional Summary</h4>
      <p className="text-secondary small mb-4">Write a brief overview of your professional background.</p>

      <div className="mb-3">
        <label className="form-label small fw-semibold">Summary Bio</label>
        <textarea
          className="form-control"
          rows={5}
          value={resumeData.summary}
          onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
        ></textarea>
      </div>
    </div>
  );
}