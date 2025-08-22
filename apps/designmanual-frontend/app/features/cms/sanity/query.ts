import groq from "groq";

export type SanityImage = {
  _ref: string;
  url: string;
  altText: string;
  isIllustration?: boolean;
  caption?: string;
  credits?: string;
  asset?: {
    _ref: string;
    _type: string;
  };
  hotspot?: {
    x: number;
    y: number;
  };
  crop?: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
};

export function resolveArticleHeaderGroq() {
  return groq`
    (_type == "articleHeader") => @ {
      _type,
      subheading,
      illustration,
      leadShortcuts {
        items[] {
          _key,
          icon,
          title,
          ${resolveLinkGroq("link")},
        }
      },
    }
  `;
}

export function resolveLinkGroq(fieldName: string) {
  return groq`
  ${fieldName}.type == "internal" => {
    "href": select(
      ${fieldName}.reference->_type == "enrichedFile" => ${fieldName}.reference->file.asset->url,
      ${fieldName}.reference->slug.current
    ),
    "linkType": ${fieldName}.type,
    "anchor": ${fieldName}.anchor
  },
  ${fieldName}.type == "external" => { 
    "href": ${fieldName}.href,
    "linkType": ${fieldName}.type,
    "anchor": ${fieldName}.anchor
  },
  ${fieldName}.type == "fileLink" => { 
    "href": ${fieldName}.fileLink.asset -> url,
    "linkType": ${fieldName}.type,
    "anchor": ${fieldName}.anchor
  }
  `;
}
