import { shadows } from "../foundations/shadows";
import { colors } from "../foundations/colors";


export const expandableVariant = {
    defaults: {
        borderRadius: "sm",
        padding: 2,
    },
    text: {

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
export function getExpandableVariantPressedState(variant: "card" | "outline" | "text") {
    return { ...expandableVariantPressed.defaults, ...expandableVariantPressed[variant] }
}
const expandableVariantPressed = {
    defaults: {
        backgroundColor: colors.mint,
    },
    text: {

    },

    outline: {
        borderColor: colors.darkGrey,
    },
    card: {
        elevation: shadows.elevation.sm,
        shadowColor: colors.black,
        shadowOffset: shadows.offset.sm,
        shadowRadius: shadows.radius.sm,
        shadowOpacity: shadows.opacity.sm,
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