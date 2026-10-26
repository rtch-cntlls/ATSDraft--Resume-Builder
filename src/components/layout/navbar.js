'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/logo/primary.png';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky-top bg-white border-bottom border-light-subtle shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <Link href="/" className="navbar-brand d-flex align-items-center gap-1 text-dark text-decoration-none py-1">
            <Image 
              src={Logo} 
              alt="ResuMake Logo" 
              width={45} 
              height={38} 
              className="d-inline-block align-text-top" 
            />
            <div className="d-flex flex-column lh-1">
              <span className="tracking-tight name">
                Resu<span className="text-primary name">Make</span>
              </span>
              <span className="text-muted fw-normal" style={{ fontSize: '0.65rem' }}>
                Crafted for Career Success
              </span>
            </div>
          </Link>

          <button
            className="navbar-toggler border-0 shadow-none p-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium gap-lg-2">
              <li className="nav-item">
                <a className="nav-link px-3 hover-primary py-1" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 hover-primary py-1" href="#templates">
                  Templates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 hover-primary py-1" href="#how-it-works">
                  How It Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 hover-primary py-1" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <Link 
                href="/builder" 
                className="btn btn-primary btn-sm rounded-pill px-4 py-2 fw-semibold shadow-sm text-decoration-none d-inline-flex align-items-center gap-2"
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