import colors from "./colors";

/**
 * This file is copied from drops-frontend
 */
export const darkTheme = {
  themeName: "dark",

  /// ///////////////////////////////////////
  // Use SPOR components and it's color variables if possible
  // If component is custom or overwritten, use the following color variables
  // Don't create color variables inside your custom components;
  // Create them here, supported by appPalette.ts
  // Don't even think about using a color without a variable
  /// ///////////////////////////////////////

  // BACKGROUND
  colorBackgroundBase: colors.teal1200,
  colorBackgroundMain: colors.teal1100,
  colorBackgroundSecondary: colors.teal900,
  colorBackgroundTertiary: colors.teal800,
  colorBackgroundQuaternary: colors.teal700,
  filterHover: "brightness(1.5) contrast(0.9)",

  // TEXT
  colorTextMain: colors.white,
  colorTextSecondary: colors.seaMist,
  colorTextTertiary: colors.whiteAlpha["700"],
  colorTextDisabled: colors.whiteAlpha["400"],
  colorSelectedText: colors.white,

  // OUTLINES
  colorSeparationLine: colors.whiteAlpha["200"],
  colorOutline: colors.whiteAlpha["400"],
  colorOutlineFocus: colors.azure,
  colorOutlineDisabled: colors.whiteAlpha["100"],
  colorBorder: colors.whiteAlpha["100"],

  // Icons
  iconSecondary: colors.seaMist,

  // SEMANTICS
  // Alarm 1
  colorAlarm: colors.rose,
  colorAlarmPulse: colors.raspberry,
  colorAlarmFill: colors.burgundy,
  colorAlarmFillPulse: colors.maroon,
  colorAlarmOutline: colors.crimson,
  colorAlarmTextMain: colors.pink,
  colorAlarmTextSecondary: colors.lightRed,
  colorAlarmTextTertiary: colors.aubergine,

  // Alarm 2
  colorSecondaryAlarm: colors.saffron,
  colorSecondaryAlarmPulse: colors.pumpkin,
  colorSecondaryAlarmFill: colors.chocolate,
  colorSecondaryAlarmFillPulse: colors.toast,
  colorSecondaryAlarmOutline: colors.russet,
  colorSecondaryAlarmTextMain: colors.bisque,
  colorSecondaryAlarmTextSecondary: colors.champagne,
  colorSecondaryAlarmTextTertiary: colors.toast,

  // Warning
  colorWarning: colors.banana,
  colorWarningPulse: colors.burntYellow,
  colorWarningFill: colors.coffee,
  colorWarningFillPulse: colors.olive,
  colorWarningOutline: colors.bronze,
  colorWarningTextMain: colors.cornsilk,
  colorWarningTextSecondary: colors.primrose,
  colorWarningTextTertiary: colors.olive,

  // Success
  colorSuccess: colors.blueGreen,
  colorSuccessPulse: colors.azure,
  colorSuccessFill: colors.darkTeal,
  colorSuccessFillPulse: colors.jungle,
  colorSuccessOutline: colors.pine,
  colorSuccessTextMain: colors.mint,
  colorSuccessTextSecondary: colors.coralGreen,
  colorSuccessTextTertiary: colors.night,

  // Info
  colorInfo: colors.glacier,
  colorInfoPulse: colors.blueberry,
  colorInfoFill: colors.navy,
  colorInfoFillPulse: colors.royal,
  colorInfoOutline: colors.ocean,
  colorInfoTextMain: colors.icyBlue,
  colorInfoTextSecondary: colors.cloudy,
  colorInfoTextTertiary: colors.royal,

  // Neutral
  colorNeutral: colors.blueGreen,
  colorNeutralPulse: colors.azure,
  colorNeutralFill: colors.darkTeal,
  colorNeutralFillPulse: colors.jungle,
  colorNeutralOutline: colors.pine,
  colorNeutralTextMain: colors.mint,
  colorNeutralTextSecondary: colors.coralGreen,
  colorNeutralTextTertiary: colors.night,

  // Ghost
  colorGhostFill: "transparent",
  colorGhostOutline: colors.whiteAlpha["100"],
  colorGhostTextMain: colors.white,

  // Special
  colorSpecial: colors.violet400,
  colorSpecialPulse: colors.violet500,
  colorSpecialFill: colors.violet900,
  colorSpecialFillPulse: colors.violet1000,
  colorSpecialOutline: colors.violet700,
  colorSpecialTextMain: colors.violet50,
  colorSpecialTextSecondary: colors.violet200,
  colorSpecialTextTertiary: colors.violet1100,
  colorSpecialBackground: colors.violet1100, // Consider moving this to EXTRA

  // EXTRA
  trainMapTopology: colors.primaryGreen,
  osloGrey: colors.osloGrey,
  colorSelected: colors.darkTeal,
  skeletonElementColor: colors.jungle,
  boxShadowColor: "#010b0a99",
  boxShadow: "0px 2px 12px #010b0a99",
  dropShadow: "drop-shadow(0px 2px 12px #010b0a99)",
  surfaceDisabled: colors.whiteAlpha["100"],
  popoverColor: colors.jungle,
  overlayColor: "#000000b3", // Aka rgba(0, 0, 0, 0.7). Keep as hex as it is used in calculation
  trainMapStretchBuilder: colors.jungle,
  colorTabHover: colors.greenHaze,
  trainSVGStrokeColor: colors.white,
};

export type DarkTheme = typeof darkTheme;
