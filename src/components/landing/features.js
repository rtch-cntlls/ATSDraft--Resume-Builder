export default function Features() {
  const features = [
    {
      icon: 'bi-shield-check',
      title: 'ATS-Friendly Templates',
      desc: 'Tested layout structures designed to easily pass Applicant Tracking Systems.'
    },
    {
      icon: 'bi-download',
      title: 'Instant PDF Export',
      desc: 'Download clean, print-ready PDF files directly to your machine with one click.'
    },
    {
      icon: 'bi-palette-fill',
      title: 'Customizable Designs',
      desc: 'Switch fonts, colors, and layout structure effortlessly to match your style.'
    },
  ];

  return (
    <section id="features" className="py-5 bg-primary">
      <div className="container py-4">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <h2 className="fw-bold fs-2 text-white">Everything You Need for a Winning Resume</h2>
          <p className="text-white">Designed to simplify your job application process without any hassle.</p>
        </div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover">
                <div className="bg-primary-subtle text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                  <i className={`bi ${item.icon} fs-4`}></i>
                </div>
                <h5 className="fw-bold text-dark">{item.title}</h5>
                <p className="text-secondary small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}