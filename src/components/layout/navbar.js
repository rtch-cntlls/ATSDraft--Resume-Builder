'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/logo/primary.png';
import TemplateModal from '../templatemodal';

export default function Navbar() {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const getSectionHref = (hashId) => (pathname === '/' ? `#${hashId}` : `/#${hashId}`);

  return (
    <>
      <header
        className="sticky-top bg-white border-bottom border-light-subtle shadow-sm"
        style={{ overflowAnchor: 'none' }}
      >
        <nav className="navbar navbar-expand-lg navbar-light py-2 py-md-3">
          <div className="container">
            <Link
              href={getSectionHref('hero')}
              className="navbar-brand d-flex align-items-center gap-2 text-dark text-decoration-none py-1"
            >
              <Image
                src={Logo}
                alt="ATSDraft Resume Builder Logo"
                width={42}
                height={35}
                className="d-inline-block align-text-top"
              />
              <div className="d-flex flex-column lh-1">
                <span className="tracking-tight name">
                  ATS<span className="text-primary name">Draft</span>
                </span>
                <span className="text-muted fw-normal" style={{ fontSize: '0.65rem' }}>
                  Resume Builder
                </span>
              </div>
            </Link>

            <button
              className="navbar-toggler border-0 shadow-none px-2 py-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ fontSize: '0.85rem' }}
            >
              <span className="navbar-toggler-icon" style={{ width: '1.2em', height: '1.2em' }} />
            </button>

            <div className="collapse navbar-collapse mt-3 mt-lg-0" id="mainNavbar">
              <ul className="navbar-nav ms-auto align-items-lg-center mb-2 mb-lg-0 fw-medium gap-lg-3">
                <li className="nav-item">
                  <a href={getSectionHref('ats-info')} className="nav-link text-dark hover-primary">
                    Why ATS?
                  </a>
                </li>
                <li className="nav-item">
                  <a href={getSectionHref('tips')} className="nav-link text-dark hover-primary">
                    Tips
                  </a>
                </li>
                <li className="nav-item">
                  <a href={getSectionHref('features')} className="nav-link text-dark hover-primary">
                    Features
                  </a>
                </li>
                <li className="nav-item mt-2 mt-lg-0 ms-lg-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="btn btn-dark btn-sm rounded-pill px-4 py-2 fw-semibold shadow-sm d-inline-flex align-items-center justify-content-center gap-2 w-100 w-lg-auto"
                  >
                    <span>Create Resume</span>
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <TemplateModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}