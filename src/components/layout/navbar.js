'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/logo/primary.png';

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <header className="sticky-top bg-white border-bottom border-light-subtle shadow-sm" style={{ overflowAnchor: 'none' }}>
      <nav className="navbar navbar-expand-lg navbar-light py-2 py-md-3">
        <div className="container">
          <Link href="#hero" className="navbar-brand d-flex align-items-center gap-2 text-dark text-decoration-none py-1">
            <Image 
              src={Logo} 
              alt="LikhaPage Logo" 
              width={42} 
              height={35} 
              className="d-inline-block align-text-top" 
            />
            <div className="d-flex flex-column lh-1">
              <span className="tracking-tight name">
                Likha<span className="text-primary name">Page</span>
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
            <span className="navbar-toggler-icon" style={{ width: '1.2em', height: '1.2em' }}></span>
          </button>

          <div className="collapse navbar-collapse mt-3 mt-lg-0" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-3 mb-lg-0 fw-medium gap-lg-2">
              <li className="nav-item">
                <a
                  href="#ats-info"
                  className="nav-link text-dark hover-primary"
                >
                  Why ATS?
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#tips"
                  className="nav-link text-dark hover-primary"
                >
                  Tips
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#features"
                  className="nav-link text-dark hover-primary"
                >
                  Features
                </a>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-center gap-3">
              <Link 
                href="/builder" 
                className="btn btn-primary btn-sm rounded-pill px-4 py-2 fw-semibold shadow-sm text-decoration-none d-inline-flex align-items-center gap-2"
              >
                Create Resume
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="d-lg-none pt-2 pb-2 border-top border-light-subtle">
              <Link 
                href="/builder" 
                className="btn btn-primary w-100 rounded-pill py-2.5 fw-semibold shadow-sm text-decoration-none d-flex align-items-center justify-content-center gap-2"
              >
                Create Resume
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}