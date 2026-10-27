export default function SummarySection({ resumeData, setResumeData }) {
  const summaryText = resumeData.summary || '';
  const characterCount = summaryText.length;
  const recommendedMax = 500;

  const handleTextChange = (value) => {
    setResumeData({
      ...resumeData,
      summary: value
    });
  };

  return (
    <div className="section-workspace fade-in">
      <div className="mb-4">
        <div className="d-flex align-items-center justify-content-between pb-2 mb-1 border-bottom">
          <h5 className="fw-bold text-dark mb-0">Professional Summary</h5>
        </div>
        <p className="text-secondary mb-4" style={{ fontSize: "0.8rem" }}>
          Write a short, powerful introduction that highlights your core skills, background, and professional goals.
        </p>

        <div className="d-flex flex-column gap-3">
          <div>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label className="form-label text-dark fw-bold small mb-0">
                Profile Summary <span className="text-danger">*</span>
              </label>
              <span
                className={`small fw-medium ${characterCount > recommendedMax ? 'text-warning' : 'text-muted'}`}
                style={{ fontSize: '0.75rem' }}
              >
                {characterCount} / {recommendedMax} characters
              </span>
            </div>

            <textarea
              className="form-control form-control-sm rounded-3 text-dark fw-medium lh-base p-3"
              rows={6}
              placeholder="e.g. Dedicated Information Technology student and full-stack web developer with hands-on experience building modern web applications using Next.js, Laravel, and Supabase..."
              value={summaryText}
              onChange={(e) => handleTextChange(e.target.value)}
              style={{ fontSize: '0.875rem' }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}