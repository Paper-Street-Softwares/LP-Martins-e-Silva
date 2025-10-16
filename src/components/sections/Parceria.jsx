import React from "react";
import { useTranslation } from "react-i18next";
import content from "../../content/content";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function Parceria({ colorMode }) {
  const { t } = useTranslation();

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionOpacityDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea className={`${bgClass}`} paddingbot={true} id="parceria">
      <SectionWrapper className="flex flex-col-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative flex justify-center rounded-xl shadow-custom-opacity shadow-shadowHero/20">
          <picture>
            <source
              srcSet={content.texts.parceria.imgMobile}
              media="(max-width: 424px)"
            />
            <img
              src={content.texts.parceria.img}
              alt={content.texts.parceria.alt}
              className="w-[100%] rounded-xl"
              loading="lazy"
            />
          </picture>
        </MotionDivDownToUp>

        <div className="w-full ">
          <SectionHeader
            className="text-center desktop1:flex justify-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            miniTitle={t("parceria.miniTag")}
            sectionHeaderTitle={t("parceria.title")}
            sectionHeaderSubtitle={t("parceria.subtitle")}
            type=""
            titleColorSet={titleColor}
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
