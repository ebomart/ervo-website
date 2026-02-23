import { engineeringContent } from "../company-assets/content";
import { gradients } from "../company-assets/theme";
import sustainabilityIcon from "../company-assets/assets/sustainability.svg";
import unrivaledQualityIcon from "../company-assets/assets/unrivaled-quality.svg";
import unmatchedVarietyIcon from "../company-assets/assets/unmatched-variety.svg";
import legacyOfExcellenceIcon from "../company-assets/assets/legacy-of-excellence.svg";
import Section from "./common/Section";

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
      className="scroll-mt-20 mx-auto flex min-h-[300px] w-[90%] max-w-7xl items-center justify-start rounded-3xl bg-center bg-no-repeat md-bg-contain"
      style={{
        background: gradients.engineeringSectionBg,
      }}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-brand-primary mb-5 text-center text-4xl leading-tight font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="text-text-secondary mx-auto mb-16 max-w-4xl text-center text-base leading-relaxed md:text-lg">
          {description}
        </p>
        <div className="mx-auto grid w-[50%] grid-cols-1 items-center gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex min-h-[124px] flex-col items-center text-center"
            >
              <div className="mb-5">{icons[index]}</div>
              <h3 className="text-text-gray text-lg leading-normal font-semibold">
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
