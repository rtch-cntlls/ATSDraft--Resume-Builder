import HeaderSection from './sections/header';
import SummarySection from './sections/summary';
import SkillsSection from './sections/skills';
import WorkExperienceSection from './sections/experience';
import ProjectSection from './sections/project';
import EducationSection from './sections/education';
import CertificatesSection from './sections/certificate';
import SettingsSection from './sections/settings';

export default function BuilderFormArea({ activeSection, resumeData, setResumeData }) {
  return (
    <div>
      {activeSection === 'header' && (
        <HeaderSection resumeData={resumeData} setResumeData={setResumeData} />
      )}
      {activeSection === 'summary' && (
        <SummarySection resumeData={resumeData} setResumeData={setResumeData} />
      )}
      {activeSection === 'skills' && (
        <SkillsSection resumeData={resumeData} setResumeData={setResumeData} />
      )}
      {activeSection === 'workExperience' && (
        <WorkExperienceSection resumeData={resumeData} setResumeData={setResumeData} />
      )}
      {activeSection === 'projects' && (
        <ProjectSection resumeData={resumeData} setResumeData={setResumeData} />
      )}
      {activeSection === 'education' && (
        <EducationSection resumeData={resumeData} setResumeData={setResumeData} />
      )}
      {activeSection === 'certificate' && (
        <CertificatesSection resumeData={resumeData} setResumeData={setResumeData} />
      )}
      {activeSection === 'settings' && (
        <SettingsSection resumeData={resumeData} setResumeData={setResumeData} />
      )}
    </div>
  );
}