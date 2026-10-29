'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo/primary.png';

export default function Footer() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-top border-light-subtle pt-5 mt-auto">
      <div className="container">
        <div className="row g-4 justify-content-between mb-5">
          <div className="col-lg-4 col-md-6">
            <Link href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="d-flex align-items-center gap-2 text-dark text-decoration-none mb-3">
              <Image 
                src={Logo} 
                alt="ResuMake Logo" 
                width={38} 
                height={32} 
                className="d-inline-block align-text-top" 
              />
              <div className="d-flex flex-column lh-1">
                <span className="tracking-tight fs-5 brand">
                  Resu<span className="text-primary brand">Make</span>
                </span>
                <span className="text-muted fw-normal" style={{ fontSize: '0.65rem' }}>
                  Crafted for Career Success
                </span>
              </div>
            </Link>

            <p className="text-secondary small mb-4" style={{ maxWidth: '320px', lineHeight: '1.6' }}>
              Create ATS-friendly, professional resumes in minutes with our free, easy-to-use builder. No hidden paywalls or login required.
            </p>
          </div>

          <div className="col-lg-2 col-6 col-md-3">
            <h6 className="fw-bold text-dark mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="text-secondary text-decoration-none hover-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#ats-info" onClick={(e) => handleScroll(e, 'ats-info')} className="text-secondary text-decoration-none hover-primary">
                  Why ATS?
                </a>
              </li>
              <li>
                <a href="#tips" onClick={(e) => handleScroll(e, 'how-it-works')} className="text-secondary text-decoration-none hover-primary">
                  Formula & Tips
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-secondary text-decoration-none hover-primary">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 col-md-3">
            <h6 className="fw-bold text-dark mb-3">Product</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link href="/builder" className="text-secondary text-decoration-none hover-primary">
                  Resume Builder
                </Link>
              </li>
              <li>
                <span className="badge bg-primary-subtle text-primary rounded-pill px-2 py-1">
                  100% Free Always
                </span>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12">
            <div className="p-3 bg-light rounded-3 border border-light-subtle">
              <h6 className="fw-bold text-dark mb-1">Ready to land your dream job?</h6>
              <p className="text-secondary small mb-3">Build an optimized ATS resume in under 5 minutes.</p>
              <Link 
                href="/builder" 
                className="btn btn-primary btn-sm rounded-pill w-100 fw-semibold d-inline-flex align-items-center justify-content-center gap-2 shadow-sm"
              >
                Start Building Now
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}