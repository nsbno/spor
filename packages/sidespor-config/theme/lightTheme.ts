import colors from "./colors";

/**
 * This file is copied from drops-frontend
 */
export const lightTheme = {
  themeName: "light",

  /// ///////////////////////////////////////
  // Use SPOR components and it's color variables if possible
  // If component is custom or overwritten, use the following color variables
  // Don't create color variables inside your custom components;
  // Create them here, supported by appPalette.ts
  // Don't even think about using a color without a variable
  /// ///////////////////////////////////////

  // BACKGROUND
  colorBackgroundBase: colors.platinum,
  colorBackgroundMain: colors.white,
  colorBackgroundSecondary: colors.tealGrey50,
  colorBackgroundTertiary: colors.teal25,
  colorBackgroundQuaternary: colors.green50,
  filterHover: "brightness(0.9) contrast(1.1)",

  // TEXT
  colorTextMain: colors.jungle,
  colorTextSecondary: colors.blackAlpha["600"],
  colorTextTertiary: colors.dimGrey,
  colorTextDisabled: colors.blackAlpha["300"],
  colorSelectedText: colors.jungle,

  // OUTLINES
  colorSeparationLine: colors.blackAlpha["200"],
  colorOutline: colors.blackAlpha["200"],
  colorOutlineFocus: colors.azure,
  colorOutlineDisabled: colors.blackAlpha["200"],
  colorBorder: colors.blackAlpha["100"],

  // Icons
  iconSecondary: colors.darkTeal,

  // SEMANTICS
  // Alarm 1
  colorAlarm: colors.raspberry,
  colorAlarmPulse: colors.wine,
  colorAlarmFill: colors.pink,
  colorAlarmFillPulse: colors.lightRed,
  colorAlarmOutline: colors.salmon,
  colorAlarmTextMain: colors.maroon,
  colorAlarmTextSecondary: colors.burgundy,
  colorAlarmTextTertiary: colors.pink,

  // Alarm 2
  colorSecondaryAlarm: colors.autumn,
  colorSecondaryAlarmPulse: colors.russet,
  colorSecondaryAlarmFill: colors.bisque,
  colorSecondaryAlarmFillPulse: colors.champagne,
  colorSecondaryAlarmOutline: colors.rajah,
  colorSecondaryAlarmTextMain: colors.chocolate,
  colorSecondaryAlarmTextSecondary: colors.wood,
  colorSecondaryAlarmTextTertiary: colors.bisque,

  // Warning
  colorWarning: colors.mustard,
  colorWarningPulse: colors.bronze,
  colorWarningFill: colors.cornsilk,
  colorWarningFillPulse: colors.blonde,
  colorWarningOutline: colors.banana,
  colorWarningTextMain: colors.coffee,
  colorWarningTextSecondary: colors.cigar,
  colorWarningTextTertiary: colors.cornsilk,

  // Success
  colorSuccess: colors.primaryGreen,
  colorSuccessPulse: colors.pine,
  colorSuccessFill: colors.mint,
  colorSuccessFillPulse: colors.seaMist,
  colorSuccessOutline: colors.coralGreen,
  colorSuccessTextMain: colors.jungle,
  colorSuccessTextSecondary: colors.darkTeal,
  colorSuccessTextTertiary: colors.mint,

  // Info
  colorInfo: colors.blueberry,
  colorInfoPulse: colors.darkBlue,
  colorInfoFill: colors.lightBlue,
  colorInfoFillPulse: colors.cloudy,
  colorInfoOutline: colors.sky,
  colorInfoTextMain: colors.navy,
  colorInfoTextSecondary: colors.darkBlue,
  colorInfoTextTertiary: colors.icyBlue,

  // Neutral
  colorNeutral: colors.dimGrey,
  colorNeutralPulse: colors.iron,
  colorNeutralFill: colors.platinum,
  colorNeutralFillPulse: colors.silver,
  colorNeutralOutline: colors.steel,
  colorNeutralTextMain: colors.darkGrey,
  colorNeutralTextSecondary: colors.carbon,
  colorNeutralTextTertiary: colors.lightGrey,

  // Ghost
  colorGhostFill: "transparent",
  colorGhostOutline: colors.blackAlpha["100"],
  colorGhostTextMain: colors.jungle,

  // Special
  colorSpecial: colors.violet600,
  colorSpecialPulse: colors.violet700,
  colorSpecialFill: colors.violet50,
  colorSpecialFillPulse: colors.violet100,
  colorSpecialOutline: colors.violet200,
  colorSpecialTextMain: colors.violet900,
  colorSpecialTextSecondary: colors.violet800,
  colorSpecialTextTertiary: colors.violet50,
  colorSpecialBackground: colors.platinum, // Consider moving this to EXTRA

  // EXTRA
  trainMapTopology: colors.silver,
  osloGrey: colors.osloGrey,
  colorSelected: colors.seaMist,
  skeletonElementColor: colors.platinum,
  boxShadowColor: "#0126221a",
  boxShadow: "0px 2px 18px 1px #0126221a",
  dropShadow: "drop-shadow(0px 2px 18px #0126221a)",
  surfaceDisabled: colors.blackAlpha["100"],
  popoverColor: colors.white,
  overlayColor: "#000000b3", // Aka rgba(0, 0, 0, 0.7). Keep as hex as it is used in calculation
  trainMapStretchBuilder: colors.seaMist,
  colorTabHover: colors.coralGreen,
  trainSVGStrokeColor: colors.teal1000,
};

export type LightTheme = typeof lightTheme;
