import type { BoxList } from "~/features/portable-text/components/NonClickableBoxList";
import { NonClickableBoxList } from "~/features/portable-text/components/NonClickableBoxList";
type BoxListSerializerProps = {
  value: BoxList;
};

export const NonClickableBoxListSerializer = ({
  value,
}: BoxListSerializerProps) => (
  <NonClickableBoxList
    title={value.title}
    headingIcon={value.headingIcon}
    description={value.description}
    backgroundColor={value.backgroundColor}
    readMoreButton={value.readMoreButton}
    boxes={value.boxes}
  />
);
