module Spor.TextStyle exposing (TextStyle(..))

{-| Houses the [TextStyle] type, used for configuring text appareance in other components.

@docs TextStyle

-}


{-| Represents a set of font type, size and line height for some text.
Used in components such as [Text] and [Heading].
This setting scales according to the size of the user device.
-}
type TextStyle
    = DoubleExtraLarge
    | ExtraLargeDisplay
    | ExtraLargeSans
    | Large
    | Medium
    | Small
    | ExtraSmall
