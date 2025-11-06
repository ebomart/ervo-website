import { engineeringContent } from "../company-assets/content";
import sustainabilityIcon from "../company-assets/assets/sustainability.svg";
import unrivaledQualityIcon from "../company-assets/assets/unrivaled-quality.svg";
import unmatchedVarietyIcon from "../company-assets/assets/unmatched-variety.svg";
import legacyOfExcellenceIcon from "../company-assets/assets/legacy-of-excellence.svg";

const EngineeringExcellence = () => {
  const { title, description, features } = engineeringContent;

  const icons = [
    <img src={sustainabilityIcon} alt="Sustainability" className="h-12 w-12" />,
    <img
      src={unrivaledQualityIcon}
      alt="Unrivaled Quality"
      className="h-12 w-12"
    />,
    <img
      src={unmatchedVarietyIcon}
      alt="Unmatched Variety"
      className="h-12 w-12"
    />,
    <img
      src={legacyOfExcellenceIcon}
      alt="Legacy Of Excellence"
      className="h-12 w-12"
    />,
  ];

  return (
    <section
      id="why-us"
      className="relative w-full rounded-[28px] bg-[padding-box] bg-[radial-gradient(closest-side_at_50%_50%,rgba(239,227,195,0.37)_0%,rgba(245,239,222,0.37)_33%,rgba(240,229,200,0)_100%)] bg-cover bg-no-repeat px-6 py-20 before:absolute before:top-0 before:left-0 before:h-[2px] before:w-full before:bg-[radial-gradient(circle_at_center,_rgba(220,169,145,0.4),_rgba(255,255,255,0.4))] before:content-[''] md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-ervo-brown mb-5 text-center text-4xl leading-tight font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="text-text-secondary mx-auto mb-16 max-w-4xl text-center text-base leading-relaxed md:text-lg">
          {description}
        </p>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-ervo-brown mb-5">{icons[index]}</div>
              <h3 className="text-text-primary text-lg leading-normal font-semibold">
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
