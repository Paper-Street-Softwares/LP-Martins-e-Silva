import Paragraphs from "../Paragraphs";
import { useTranslation, Trans } from "react-i18next";

export default function ParagraphSemFading() {
  const { t } = useTranslation();

  return (
    <Paragraphs className="text-white text-opacity-80">
      <p dangerouslySetInnerHTML={{ __html: t("about.paragraph") }}></p>
    </Paragraphs>
  );
}
