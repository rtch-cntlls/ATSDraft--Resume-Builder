'use client';

import Image from 'next/image';
import TemplateImg from '../../../public/images/template.png';

export default function ATS() {
  return (
    <section id="ats-info" className="py-md-5 p-2 py-3 bg-light overflow-hidden position-relative">
      <div
        className="position-absolute rounded-circle bg-primary opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          width: '300px',
          height: '300px',
          filter: 'blur(100px)',
          top: '30%',
          right: '-100px',
          transform: 'translateY(-50%)',
          zIndex: 0,
        }}
      />

      <div className="container py-md-5 py-3 position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6 position-relative py-4">
            <div className="position-relative mx-auto my-3" style={{ maxWidth: '420px' }}>
              <div
                className="position-absolute rounded-2 bg-primary shadow-sm w-100 h-100"
                aria-hidden="true"
                style={{ top: '20px', left: '20px', transform: 'rotate(-20deg)' }}
              />

              <div
                className="position-absolute rounded-2 bg-dark shadow-sm w-100 h-100"
                aria-hidden="true"
                style={{ top: '10px', left: '10px', transform: 'rotate(-10deg)' }}
              />

              <div
                className="position-relative bg-white rounded-2 shadow-lg overflow-hidden p-2"
                style={{ transform: 'rotate(2deg)' }}
              >
                <Image
                  src={TemplateImg}
                  alt="ATSDraft single-column ATS-friendly resume layout example"
                  className="img-fluid rounded-3 w-100 h-auto d-block"
                  style={{ objectFit: 'cover', maxHeight: '500px' }}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3">
              <h2 className="fw-bold text-dark display-7 lh-sm mb-0">
                Why You Need an ATS-Optimized Resume
              </h2>

              <p className="text-dark fs-6 mb-0 sample" style={{ lineHeight: '1.7' }}>
                Most employers use Applicant Tracking Systems (ATS) to parse and screen resumes before a recruiter reviews them. Heavy graphics, tables, and complex multi-column templates can scramble your text and cause strong applications to be missed.
              </p>

              <p className="text-dark fs-6 mb-0 sample" style={{ lineHeight: '1.7' }}>
                ATSDraft structures your resume with clean, ATS-readable hierarchy so your work history, skills, and achievements parse accurately every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}