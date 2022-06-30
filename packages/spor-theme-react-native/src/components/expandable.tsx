import { shadows } from "../foundations/shadows";

export const expandableVariant = {
    defaults: {
        borderRadius: "sm",
        padding: 2,
    },

    outline: {
        borderColor: "osloGrey",
        borderStyle: "solid",
        borderWidth: 1,

    },
    card: {
        backgroundColor: "white",
        elevation: shadows.elevation.md,
        shadowColor: "black",
        shadowOffset: shadows.offset.md,
        shadowRadius: shadows.radius.md,
        shadowOpacity: shadows.opacity.md,

    },

}
export const expandableVariantPressed = {
    defaults: {
        borderRadius: "sm",
        padding: 2,
        backgroundColor: "mint",
    },

    outline: {
        borderColor: "darkGrey",
        borderStyle: "solid",
        borderWidth: 1,
    },
    card: {
        backgroundColor: "mint",
        elevation: shadows.elevation.md,
        shadowColor: "black",
        shadowOffset: shadows.offset.md,
        shadowRadius: shadows.radius.md,
        shadowOpacity: shadows.opacity.md,
    },
}

export const expandableSize = {
    sm: {

    },
    md: {

    },
    lg: {

    }
}