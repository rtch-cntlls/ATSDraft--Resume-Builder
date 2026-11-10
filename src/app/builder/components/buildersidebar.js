'use client';

export default function BuilderSidebar({ 
  activeSection, 
  setActiveSection, 
  isCollapsed, 
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen 
}) {
  const sections = [
    { id: 'header', label: 'Contact Details', icon: 'bi-person-vcard' },
    { id: 'summary', label: 'Summary', icon: 'bi-text-paragraph' },
    { id: 'skills', label: 'Skills & Expertise', icon: 'bi-stars' },
    { id: 'workExperience', label: 'Work Experience', icon: 'bi-briefcase' },
    { id: 'projects', label: 'Projects & Initiatives', icon: 'bi-folder2-open' },
    { id: 'education', label: 'Education', icon: 'bi-mortarboard' },
    { id: 'certificate', label: 'Certifications', icon: 'bi-award' },
    { id: 'settings', label: 'Design & Layout', icon: 'bi-palette' }
  ];

  const handleSelectSection = (id) => {
    setActiveSection(id);
    if (setIsMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  return (
    <div 
      className={`builder-sidebar d-flex flex-column bg-white border-end ${
        isMobileOpen ? 'mobile-open' : ''
      }`}
      style={{ 
        width: isCollapsed ? '72px' : '240px', 
        minWidth: isCollapsed ? '72px' : '240px',
        maxWidth: isCollapsed ? '72px' : '240px',
        height: '100%',
        flexShrink: 0
      }}
    >
      <div className="p-3 border-bottom d-flex align-items-center justify-content-between flex-shrink-0">
        <span className="text-muted fw-bold text-uppercase sidebar-title" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
          Resume Sections
        </span>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="btn btn-light btn-sm text-secondary border shadow-none p-1.5 ms-auto rounded-2 d-none d-lg-flex align-items-center justify-content-center"
          title={isCollapsed ? "Expand Sidebar Menu" : "Collapse Sidebar Menu"}
          style={{ width: '30px', height: '30px', flexShrink: 0 }}
        >
          <i className={`bi ${isCollapsed ? 'bi-layout-sidebar-inset' : 'bi-layout-sidebar'}`}></i>
        </button>

        <button
          onClick={() => setIsMobileOpen(false)}
          className="btn btn-light btn-sm text-secondary border shadow-none p-1.5 ms-auto rounded-2 d-lg-none d-flex align-items-center justify-content-center"
          title="Close Sidebar Menu"
          style={{ width: '30px', height: '30px', flexShrink: 0 }}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      <div className="nav flex-column p-2 gap-1 flex-grow-1 overflow-y-auto">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => handleSelectSection(sec.id)}
              className={`nav-link text-start d-flex align-items-center gap-3 px-3 py-2.5 rounded-3 fw-medium transition-all ${
                isActive 
                  ? 'bg-secondary-subtle text-dark' 
                  : 'text-secondary hover-bg-light'
              }`}
              title={isCollapsed ? sec.label : ''}
              style={{ fontSize: '0.85rem' }}
            >
              <i className={`bi ${sec.icon} fs-5 flex-shrink-0`}></i>
              <span className="sidebar-label text-truncate">{sec.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}