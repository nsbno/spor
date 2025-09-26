import type { Box } from "~/features/portable-text/components/NonClickableBoxList";
import { NonClickableBox } from "~/features/portable-text/components/NonClickableBoxList";

type BoxSerializerProps = {
  value: Box;
};

export const NonClickableBoxSerializer = ({ value }: BoxSerializerProps) => (
  <NonClickableBox
    _key={value._key}
    title={value.title}
    description={value.description}
    illustration={value.illustration}
    icon={value.icon}
    color={value.color}
    headingLevel={value.headingLevel}
    fillHeight={value.fillHeight}
    links={value.links}
  />
);
