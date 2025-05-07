type WarnAboutMismatchingIcon = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any; //See if we can fint another type for this
};

export const warnAboutMismatchingIcon = ({
  icon,
}: WarnAboutMismatchingIcon) => {
  if (process.env.NODE_ENV !== "production") {
    const displayName = icon?.type?.render?.displayName;
    if (!displayName) {
      return;
    }
    if (displayName.includes("Fill")) {
      console.warn(
        `You passed a filled icon. This component requires outlined icons. You passed ${displayName}, replace it with ${displayName.replace(
          "Fill",
          "Outline",
        )}.`,
      );
      return;
    }
    if (!displayName.includes("24Icon")) {
      console.warn(
        `The icon you passed was of the wrong size. You passed ${displayName}, replace it with ${displayName.replace(
          /(\d{2})Icon/,
          "24Icon",
        )}.`,
      );
    }
  }
};
