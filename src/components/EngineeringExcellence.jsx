import { engineeringContent } from '../company-assets/content';
import sustainabilityIcon from "../company-assets/assets/sustainability.svg";
import unrivaledQualityIcon from "../company-assets/assets/unrivaled-quality.svg";
import unmatchedVarietyIcon from "../company-assets/assets/unmatched-variety.svg";
import legacyOfExcellenceIcon from "../company-assets/assets/legacy-of-excellence.svg";

const EngineeringExcellence = () => {
  const { title, description, features } = engineeringContent;
  
  const icons = [
    (
      <img src={sustainabilityIcon} alt="Sustainability" className="w-12 h-12" />
    ),
    (
      <img src={unrivaledQualityIcon} alt="Unrivaled Quality" className="w-12 h-12" />
    ),
    (
      <img src={unmatchedVarietyIcon} alt="Unmatched Variety" className="w-12 h-12" />
    ),
    (
      <img src={legacyOfExcellenceIcon} alt="Legacy Of Excellence" className="w-12 h-12" />
    ),
  ];

  return (
    <section
      id="why-us"
      className="w-full px-6 md:px-12 py-20 bg-[radial-gradient(closest-side_at_50%_7%,_#EFE3C3_0%,_#F5EFDEFA_33%,_#F0E5C800_100%)] bg-no-repeat bg-[0_0]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-ervo-brown mb-5 text-center leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-base md:text-lg text-text-secondary text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-ervo-brown mb-5">{icons[index]}</div>
              <h3 className="text-lg font-semibold text-text-primary leading-normal">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringExcellence;

