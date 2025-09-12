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

export function resolveImageGroq() {
  return groq`
    (_type == 'image') => @ {
      _type,
      "_ref": asset._ref,
      "url": asset->url,
      "altText": asset->altText,
      "credits": asset->credits,
      "crop": crop,
      "hotspot": hotspot,
      crop,
      hotspot
    }`;
}

export function resolveLinkGroq(fieldName: string) {
  return groq`
  ${fieldName}.type == "internal" => {
    "href": ${fieldName}.reference->path.current
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
  }`;
}

export function resolveLinkButtonGroq() {
  return groq`
    (_type == "linkButton") => @ {
      ...,
      _type,
      text,
      icon,
      ${resolveLinkGroq("link")},
    }`;
}

export function resolveMarkdefsLinkGroq() {
  return groq`
    type == "fileLink" => @ {
        "href": fileLink.asset -> url
    },
    type == "internal" => reference->{
        "href": slug.current
    }`;
}

export function resolveDividerGroq() {
  return groq`
    (_type == "divider") => @ {
      _type,
      default,
    }`;
}

export function resolveTextBlockGroq() {
  return groq`
    (_type == "textBlock") => @ {
      ...,
      content[] {
        ...,
        ${resolveLinkButtonGroq()},
        markDefs[] {
          ...,
          ${resolveMarkdefsLinkGroq()},
        },
      }
    }`;
}

export function resolveArticleHeaderGroq() {
  return groq`
    (_type == "articleHeader") => @ {
      _type,
      subheading,
      illustration,
    }
  `;
}

export function resolveTextBlocksGroq() {
  return groq`
    (_type == "textBlocks") => @ {
      _type,
      heading,
      subheading,
      headingIcon,
      items[] {
        (_type == "textBlock") => @ {
          ...,
          content[] {
            ...,
            ${resolveLinkButtonGroq()},
            markDefs[] {
              ...,
              ${resolveMarkdefsLinkGroq()},
            },
          }
        } 
      }
    }`;
}

export function resolveImageBlockGroq() {
  return groq`
    (_type == "imageBlock") => @ {
      _type,
      images[] {
        asset,
        hotspot,
        crop,
        altText,
        credits,
      },
      caption
    }`;
}

export function resolveImageAndTextListGroq() {
  return groq`
  (_type == "imageAndTextList") => @ {
    _type,
    heading,
    headingIcon,
    description,
    layout,
    direction,
    items[] {
      _key,
      _type,
      image,
      content[] {
        ...,
        ${resolveLinkButtonGroq()},
        markDefs[]{
          ...,
          ${resolveMarkdefsLinkGroq()},
        },
      }
    },
    }`;
}

export function resolveImageCardListGroq() {
  return groq`
    (_type == "imageCardList") => @ {
      _type,
      _key,
      heading,
      headingIcon,
      subheading,
      readMoreButton[0] {
        ...,
      },
      items[] {
        _key,
        title,
        description,
        (_type == "imageCard") => @ {
          "linkType": link.type,
          image,
          ${resolveLinkGroq("link")},
        }
      }
    }`;
}

export function resolveCardsGroq() {
  return groq`
    (_type == "cards") => @ {
      _type,
      titleOfBlock,
      headingIcon,
      backgroundColor,
      items[] {
        _key,
        icon,
        title,
        text,
        ${resolveLinkGroq("link")},
        illustration {
          ${resolveImageGroq()}
        },
      },
    }`;
}

export function resolveNonClickableBoxListGroq() {
  return groq`
    (_type == "nonClickableBoxList") => @ {
      _type,
      title,
      headingIcon,
      description,
      backgroundColor,
      readMoreButton[0] {
        ${resolveLinkButtonGroq()},
      },
      boxes[] {
        _key,
        title,
        color,
        description[] {
          ...,
          ${resolveLinkButtonGroq()},
          markDefs[]{
            ...,
            ${resolveMarkdefsLinkGroq()},
          }
        },
        icon,
        illustration {
          ${resolveImageGroq()}
        },
        links[] {
          ${resolveLinkButtonGroq()},
        }
      }
    }`;
}

export function resolveAccordionGroq() {
  return groq`
    (_type == "accordion") => @ {
      _type,
      title,
      description,
      titleHeadingLevel,
      accordionItemHeadingLevel,
      headingIcon,
      items[] {
        _key,
        title,
        icon,
        (_type == "accordionItem") => @ {
          content[] {
            ...,
            ${resolveLinkButtonGroq()},
            markDefs[] {
              ...,
              ${resolveMarkdefsLinkGroq()},
            }
          }
        } 
      }
    }`;
}

export function resolveFileListGroq() {
  return groq`
    (_type == "fileList") => @ {
      _type,
      title,
      description,
      "files": files[] -> {
        title,
        date,
        ...(file.asset->) {
          url,
          size,
          _id,
          "format": extension,
        }
      },
    }`;
}

// settings til pages

export function resolveSeoGroq() {
  return groq`
    seo {
      title,
      description,
      keywords,
      image {
        asset
      },
      status
  }`;
}

export function resolveBreadcrumbsGroq() {
  return groq`
    "crumbs": {
      "currentPage": {
        "title": coalesce(shortTitle, title),
        "slug": slug.current
      },
      ...(category-> {
        "mainCategory": {
            title,
            "slug": slug.current
          },
        "parentCategory": {
          ...(parent -> {
            title,
            "slug": slug.current
          })
        },
        "grandParentCategory": {
          ...(parent -> {
            ...(parent -> {
              title,
              "slug": slug.current
            })
          })
        }
      })
    }`;
}

export function resolveSettingsGroq() {
  return groq`
    settings {
      breadcrumbs
    }`;
}
