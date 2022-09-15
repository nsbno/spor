module Spor.Text exposing
    ( Text
    , init, withTextStyle, withText, withAdditionalStyle
    , toHtml
    )

{-| A component for displaying text.

@docs Text


## Configuration

@docs init, withTextStyle, withText, withAdditionalStyle


## Display

@docs toHtml

-}

import Css exposing (Style)
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attribute
import Spor.Internal.TextStyle as TextStyleInternal
import Spor.TextStyle as TextStyle exposing (TextStyle)


{-| A component for displaying text.
-}
type Text
    = Text Options


type alias Options =
    { style : TextStyle
    , text : String
    , additionalStyle : Style
    }



-- CONFIG


{-| Create an initial config for the `Text` component.
Defaults to the `Medium` text style, and no text.
-}
init : Text
init =
    Text
        { style = TextStyle.Medium
        , text = ""
        , additionalStyle = Css.batch []
        }


{-| Set the text style to use
-}
withTextStyle : TextStyle -> Text -> Text
withTextStyle style (Text options) =
    Text { options | style = style }


{-| Set the text to be displayed
-}
withText : String -> Text -> Text
withText text (Text options) =
    Text { options | text = text }


{-| Set the additional style
-}
withAdditionalStyle : Style -> Text -> Text
withAdditionalStyle style (Text options) =
    Text { options | additionalStyle = style }



-- DISPLAY


{-| Render `Text` component to `Html`
-}
toHtml : Text -> Html a
toHtml (Text options) =
    Html.p
        [ Attribute.css <|
            TextStyleInternal.toCss options.style
                ++ [ options.additionalStyle ]
        ]
        [ Html.text options.text ]
