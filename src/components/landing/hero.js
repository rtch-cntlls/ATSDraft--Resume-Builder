import Link from 'next/link';
import Image from 'next/image';
import HeroImg from '../../../public/hero/hero-img.png';

export default function Hero() {
    return (
        <section className="position-relative overflow-hidden bg-white">

           <svg className="position-absolute" width="0" height="0">
                <defs>
                    <clipPath id="curvedSlantClip" clipPathUnits="objectBoundingBox">
                        <path d="M 0 0 L 0 0 Q 0.105 0.5 0.85 1 L 0 1 Z" />
                    </clipPath>
                </defs>
            </svg>

            <div 
                className="position-absolute top-0 start-0 h-100 d-none d-lg-block z-0" 
                style={{ 
                    width: '60%', 
                    backgroundColor: '#6acbff32',
                    clipPath: 'url(#curvedSlantClip)'
                }}
            ></div>

            <div className="container py-5 position-relative z-1">
                <div className="row align-items-center gy-5 min-vh-75 py-4">
                    <div className="col-lg-6 text-center text-lg-start text-lg-white">
                        
                        <h1 className="display-4 fw-bold lh-sm mb-3 text-dark text-lg-white">
                            Build a Professional Resume That Gets You Hired
                        </h1>
                        
                        <p className="lead text-secondary text-lg-light mb-4 me-lg-4" style={{ opacity: 0.95 }}>
                            Create an ATS-friendly, polished resume in minutes with our easy-to-use editor. Stand out to recruiters and land your next job faster.
                        </p>

                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mb-4">
                            <Link
                                href="/builder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center justify-content-center gap-2"
                            >
                                Create My Resume Now
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>

                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4 text-muted text-lg-light small" style={{ opacity: 0.9 }}>
                            <div className="d-flex align-items-center gap-1">
                                <i className="bi bi-check-circle-fill text-success text-lg-white"></i> Instant PDF Download
                            </div>
                            <div className="d-flex align-items-center gap-1">
                                <i className="bi bi-check-circle-fill text-success text-lg-white"></i> ATS-Optimized Formats
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 position-relative py-4">
                        
                        <div 
                            className="position-absolute top-0 start-0 bg-white border border-light shadow-sm rounded-pill px-3 py-2 d-none d-sm-flex align-items-center gap-2 z-2"
                            style={{ marginLeft: '5%', marginTop: '-10px' }}
                        >
                           <span className="bg-primary text-white rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                <i className="bi bi-check fs-6"></i>
                            </span>
                            <div className="lh-1">
                                <span className="d-block fw-bold text-dark" style={{ fontSize: '0.8rem' }}>ATS Approved</span>
                                <span className="text-muted" style={{ fontSize: '0.7rem' }}>100% Parser Friendly</span>
                            </div>
                        </div>

                        <div 
                            className="position-absolute top-50 end-0 translate-middle-y bg-white border border-light shadow-sm rounded-pill px-3 py-2 d-none d-sm-flex align-items-center gap-2 z-2"
                            style={{ marginRight: '-15px' }}
                        >
                            <span className="bg-primary text-white rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                <i className="bi bi-check fs-6"></i>
                            </span>
                            <div className="lh-1">
                                <span className="d-block fw-bold text-dark" style={{ fontSize: '0.8rem' }}>Lightning Fast</span>
                                <span className="text-muted" style={{ fontSize: '0.7rem' }}>Ready in Minutes</span>
                            </div>
                        </div>

                        <div 
                            className="position-absolute bottom-0 start-0 bg-white border border-light shadow-sm rounded-pill px-3 py-2 d-none d-sm-flex align-items-center gap-2 z-2"
                            style={{ marginLeft: '10%', marginBottom: '10px' }}
                        >
                            <span className="bg-primary text-white rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                <i className="bi bi-check fs-6"></i>
                            </span>
                            <div className="lh-1">
                                <span className="d-block fw-bold text-dark" style={{ fontSize: '0.8rem' }}>PDF Export</span>
                                <span className="text-muted" style={{ fontSize: '0.7rem' }}>High Quality Output</span>
                            </div>
                        </div>

                        <div className="position-relative mx-auto text-center" style={{ maxWidth: '550px' }}>
                             <Image 
                                src={HeroImg} 
                                alt="Resume Builder Preview" 
                                width={550} 
                                height={450} 
                                priority
                                className="img-fluid rounded-4 bg-white p-2" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}