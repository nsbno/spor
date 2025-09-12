import { LinkButton } from "~/features/portable-text/components/LinkButton";

export type LinkButtonSerializerProps = {
  value: {
    text: string;
    href: string;
    anchor?: string;
    icon?: string;
    linkType: "internal" | "external";
  };
};

export const LinkButtonSerializer = ({ value }: LinkButtonSerializerProps) => {
  return (
    <LinkButton {...serializeSanityLinkButtonData(value)} href={value.href} />
  );
};

/** Turns Sanity's representation of a link button into our own representation of it */
export function serializeSanityLinkButtonData(
  value: LinkButtonSerializerProps["value"],
) {
  return {
    children: value.text,
    href: value.href,
    icon: value.icon,
    linkType: value.linkType,
    anchor: value.anchor,
  };
}
