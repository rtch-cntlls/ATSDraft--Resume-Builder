'use client';

import React from 'react';
import Image from 'next/image';

import InfoConfigImg1 from '../../../public/config/resume-style.png';
import InfoConfigImg2 from '../../../public/config/resume-sequence.png';

export default function Feature() {
  const sections = [
    {
      id: 1,
      title: 'Typography & Resume Styling',
      desc1: 'Customize font pairing, spacing, and accent colors to keep your resume crisp and legible.',
      desc2: 'Balance clean ATS structure with a polished layout that fits your target role.',
      image: InfoConfigImg1,
      alt: 'ATSDraft resume typography, spacing, and color styling controls',
    },
    {
      id: 2,
      title: 'Resume Section Sequence & Order',
      desc1: 'Reorder experience, projects, education, and skills to highlight your strongest qualifications first.',
      desc2: 'Adapt your resume structure quickly for each job application without rebuilding from scratch.',
      image: InfoConfigImg2,
      alt: 'ATSDraft resume section ordering and sequence panel',
    },
  ];

  return (
    <section id="features" className="py-md-5 p-2 py-1 bg-light overflow-hidden position-relative">
      <div className="container py-md-5 py-1 d-flex flex-column gap-5">
        {sections.map((item, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className={`row align-items-center g-4 justify-content-center ${isEven ? 'flex-row-reverse' : ''}`}
            >
              <div className="col-lg-5 col-md-6">
                <div className="d-flex flex-column gap-3">
                  <h2 className="fw-bold text-dark display-7 lh-sm mb-0">
                    {item.title}
                  </h2>

                  <p className="text-dark sample mb-0" style={{ lineHeight: '1.7' }}>
                    {item.desc1}
                  </p>

                  <p className="text-dark sample mb-0" style={{ lineHeight: '1.7' }}>
                    {item.desc2}
                  </p>
                </div>
              </div>

              <div className="col-lg-5 col-md-6">
                <div
                  className="position-relative mx-auto my-3"
                  style={{ width: '100%', maxWidth: '350px' }}
                >
                  <div
                    className="position-absolute bg-primary rounded-2 shadow-sm"
                    aria-hidden="true"
                    style={{
                      top: '-35px',
                      left: '-35px',
                      width: '140px',
                      height: '180px',
                      transform: 'rotate(-12deg)',
                      zIndex: 1,
                    }}
                  />

                  <div
                    className="position-relative bg-white rounded-2 shadow-lg overflow-hidden p-2 mx-auto"
                    style={{ transform: 'rotate(0deg)', zIndex: 1 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="img-fluid rounded-2 w-100 h-auto d-block"
                      style={{ objectFit: 'cover', maxHeight: '400px' }}
                      priority={index === 0}
                    />
                  </div>

                  <div
                    className="position-absolute bg-dark rounded-2 shadow-sm"
                    aria-hidden="true"
                    style={{
                      bottom: '-35px',
                      right: '-35px',
                      width: '140px',
                      height: '180px',
                      transform: 'rotate(10deg)',
                      zIndex: 0,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}