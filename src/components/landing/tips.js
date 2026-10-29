import { resumeFormulaSteps, formulaExample, formulaHeaderData } from '../../data/FormulaData';

export default function Tips() {
  const exampleParts = [
  { key: 'verb', label: 'Action verb', text: formulaExample.actionVerb },
  { key: 'resp', label: 'Responsibility', text: formulaExample.responsibility },
  { key: 'result', label: 'Result', text: formulaExample.result },
];
  return (
    <section id="tips" className="py-5 bg-white">
      <div className="container py-md-4 py-2">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <h1 className="fw-bold text-dark">
            {formulaHeaderData.title}
          </h1>
          <p className="text-secondary">
            {formulaHeaderData.subtitle}
          </p>
        </div>

        <div className="row g-md-4 g-3 mb-md-5 mb-3">
          {resumeFormulaSteps.map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 border-0 bg-white shadow-sm rounded-4 p-4 position-relative overflow-hidden">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className={`fs-6 text-${item.color} fw-bold rounded-pill`}>
                    {item.badgeText}
                  </span>
                </div>
                <h4 className="fw-bold text-dark mb-2">{item.title}</h4>
                <p className="text-secondary small mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto">
          <div className="formula-demo__paper">
            <span className="formula-demo__bullet" aria-hidden="true">•</span>
            <p className="formula-demo__sentence mb-0">
              {exampleParts.map((part, i) => (
                <span key={part.key}>
                  <span className={`formula-mark formula-mark--${part.key}`}>{part.text}</span>
                  {i < exampleParts.length - 1 && ' '}
                </span>
              ))}
            </p>
          </div>

          <dl className="formula-demo__breakdown mb-0">
            {exampleParts.map((part, i) => (
              <div className={`formula-row formula-row--${part.key}`} key={part.key}>
                <dt>
                  {part.label}
                </dt>
                <dd>{part.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}