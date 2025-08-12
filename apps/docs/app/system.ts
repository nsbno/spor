import { createSystem, defineConfig, themes } from "@vygruppen/spor-react";

const config = defineConfig({
  theme: {
    recipes: {
      button: {
        base: {
          background: "red",
        },
        variants: {
          variant: {
            primary: {
              background: "green",
            },
          },
        },
      },
      staticCard: {
        base: {
          border: "1px solid red",
        },
      },
    },
    slotRecipes: {
      datePicker: {
        slots: [],
        base: {
          calendarTriggerButton: {
            background: "blue",
            color: "white",
          },
        },
      },
    },
  },
});

export const system = createSystem(themes.VyDigital._config, config);
