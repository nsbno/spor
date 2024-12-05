import { createSystem, defineConfig, defineTokens } from "@chakra-ui/react";
import * as foundations from "./foundations";
import tokens from "@vygruppen/spor-design-tokens";
import { drawerSlotRecipe } from "./components/drawer";
import { buttonRecipe } from "./components/button";
import {
  dialogSlotRecipe,
  staticCardRecipe,
  pressableCardRecipe,
  breadcrumbRecipe,
  switchRecipe,
  accordionSlotRecipe,
  alertExpandableSlotRecipe,
  serviceAlertSlotRecipe,
  checkboxSlotRecipe,
  codeRecipie,
  infoTagSlotRecipe,
  nativeSelectSlotRecipe,
  popoverSlotRecipe,
  progressBarRecipe,
  progressIndicatorRecipe,
  radioCardSlotRecipe,
  selectSlotRecipe,
  stepperSlotRecipe,
  tableSlotRecipe,
  tabsSlotRecipe,
  textareaRecipe,
  toastRecipe,
  travelTagSlotRecipe,
  badgeRecipie,
} from "./components";
import { lineIconSlotRecipe } from "./components/line-icon";
import { listSlotRecipe } from "./components/list";
import { alertSlotRecipe } from "./components/alert";
import { fieldSlotRecipe } from "./components/field";
import { separatorRecipe } from "./components/separator";

export type ColorsType = typeof tokens.color.alias &
  typeof tokens.color.palette &
  typeof tokens.color.vyDigital & { linjetag: typeof tokens.color.linjetag };

const tokensConfig = defineTokens({
  colors: {
    ...(tokens.color.alias as any),
    ...(tokens.color.palette as any),
    ...(tokens.color.vyDigital as any),
    linjetag: tokens.color.linjetag,
  },
});

export const config = defineConfig({
  theme: {
    breakpoints: {
      ...foundations.breakpoints,
    },
    tokens: {
      ...tokensConfig,
    },
    semanticTokens: {
      colors: {
        ...(tokens.color.vyDigital as any),
      },
      fonts: {
        ...foundations.fonts,
      },
    },
    recipes: {
      button: buttonRecipe,
      badge: badgeRecipie,
      staticCard: staticCardRecipe,
      pressableCard: pressableCardRecipe,
      switch: switchRecipe,
      breadcrumb: breadcrumbRecipe,
      code: codeRecipie,
      textarea: textareaRecipe,
      toast: toastRecipe,
      separator: separatorRecipe,
    },
    slotRecipes: {
      drawer: drawerSlotRecipe,
      dialog: dialogSlotRecipe,
      lineIcon: lineIconSlotRecipe,
      list: listSlotRecipe,
      alert: alertSlotRecipe,
      accordion: accordionSlotRecipe,
      alertExpandable: alertExpandableSlotRecipe,
      serviceAlert: serviceAlertSlotRecipe,
      checkbox: checkboxSlotRecipe,
      field: fieldSlotRecipe,
      infoTag: infoTagSlotRecipe,
      nativeSelect: nativeSelectSlotRecipe,
      popover: popoverSlotRecipe,
      progressBar: progressBarRecipe,
      progressIndicator: progressIndicatorRecipe,
      radioCard: radioCardSlotRecipe,
      radio: radioCardSlotRecipe,
      select: selectSlotRecipe,
      stepper: stepperSlotRecipe,
      table: tableSlotRecipe,
      tabs: tabsSlotRecipe,
      travelTag: travelTagSlotRecipe,
    },
  },
});

export const system = createSystem(config);
