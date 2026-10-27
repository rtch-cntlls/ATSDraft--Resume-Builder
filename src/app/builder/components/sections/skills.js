import { useState } from 'react';

export default function SkillsSection({ resumeData, setResumeData }) {
  const skillsConfig = resumeData.skillsConfig || {
    mode: 'categorized',
    categories: [],
    bulletSkills: []
  };

  const setSkillsConfig = (newConfig) => {
    setResumeData({
      ...resumeData,
      skillsConfig: newConfig
    });
  };

  const handleModeChange = (newMode) => {
    setSkillsConfig({
      ...skillsConfig,
      mode: newMode
    });
  };

  const handleCategoryChange = (index, field, value) => {
    const updatedCategories = [...skillsConfig.categories];
    updatedCategories[index][field] = value;
    setSkillsConfig({
      ...skillsConfig,
      categories: updatedCategories
    });
  };

  const addCategory = () => {
    setSkillsConfig({
      ...skillsConfig,
      categories: [
        ...skillsConfig.categories,
        { id: Date.now(), title: '', items: '' }
      ]
    });
  };

  const removeCategory = (id) => {
    setSkillsConfig({
      ...skillsConfig,
      categories: skillsConfig.categories.filter((cat) => cat.id !== id)
    });
  };

  return (
    <div className="section-workspace fade-in">
      <div className="mb-4">
        <div className="d-flex align-items-center justify-content-between pb-2 mb-1 border-bottom">
          <h5 className="fw-bold text-dark mb-0">Skills & Expertise</h5>
          <button
            type="button"
            className="btn btn-outline-dark btn-sm rounded-pill px-3"
            onClick={addCategory}
          >
            <i className="bi bi-plus-lg me-1"></i> Add Category
          </button>
        </div>
        <p className="text-secondary mb-4" style={{ fontSize: '0.8rem' }}>
          Group your technical capabilities, tools, core competencies, and professional skills into organized categories.
        </p>

        <div className="d-flex flex-column gap-3">
          {skillsConfig.categories.map((cat, index) => (
            <div key={cat.id || index} className="p-3 bg-white border rounded-3 position-relative">
              {skillsConfig.categories.length > 0 && (
                <button
                  type="button"
                  className="btn btn-link text-danger p-0 position-absolute top-0 end-0 me-3 mt-2"
                  onClick={() => removeCategory(cat.id)}
                  title="Remove Category"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              )}

              <div className="mb-2">
                <label className="form-label text-dark fw-bold small mb-1">Category Title</label>
                <input
                  type="text"
                  className="form-control form-control-sm rounded-3 text-dark fw-medium"
                  placeholder="e.g. Core Skills, Technical Tools, Leadership & Soft Skills"
                  value={cat.title || ''}
                  onChange={(e) => handleCategoryChange(index, 'title', e.target.value)}
                />
              </div>

              <div>
                <label className="form-label text-dark fw-bold small mb-1">Skills (Separated by Commas)</label>
                <input
                  type="text"
                  className="form-control form-control-sm rounded-3 text-dark fw-medium"
                  placeholder="e.g. Project Management, Data Analysis, Strategic Planning, Communication"
                  value={cat.items || ''}
                  onChange={(e) => handleCategoryChange(index, 'items', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-top mb-4">
        <div className="d-flex align-items-center justify-content-between pb-2 mb-1 border-bottom">
          <h5 className="fw-bold text-dark mb-0">Layout Format</h5>
        </div>
        <p className="text-secondary mb-4" style={{ fontSize: '0.8rem' }}>
          Select how your skills should be rendered on your resume.
        </p>

        <div className="card bg-light border-0 shadow-sm p-3 rounded-3">
          <label className="form-label text-dark fw-bold small mb-2 d-block">
            Display Format
          </label>
          <div className="btn-group w-100" role="group">
            <button
              type="button"
              className={`btn btn-sm py-1  ${skillsConfig.mode === 'categorized' ? 'btn-dark' : 'btn-outline-secondary'}`}
              onClick={() => handleModeChange('categorized')}
              style={{ fontSize: '0.85rem' }}
            >
              Categorized Groups
            </button>
            <button
              type="button"
              className={`btn btn-sm py-1  ${skillsConfig.mode === 'bullets' ? 'btn-dark' : 'btn-outline-secondary'}`}
              onClick={() => handleModeChange('bullets')}
               style={{ fontSize: '0.85rem' }}
            >
              Bullet Point List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}