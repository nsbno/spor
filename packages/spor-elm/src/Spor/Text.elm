module Spor.Text exposing
    ( Text
    , init, withTextStyle, withString
    , toHtml
    )

{-| A component for displaying text.

@docs Text


## Configuration

@docs init, withTextStyle, withString


## Display

@docs toHtml

-}

import Css
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
        }


{-| Set the text style to use
-}
withTextStyle : TextStyle -> Text -> Text
withTextStyle style (Text options) =
    Text { options | style = style }


{-| Set the text to be displayed
-}
withString : String -> Text -> Text
withString text (Text options) =
    Text { options | text = text }



-- DISPLAY


{-| Render `Text` component to `Html`
-}
toHtml : Text -> Html a
toHtml (Text options) =
    Html.p
        [ Attribute.css <|
            TextStyleInternal.toCss options.style
                ++ [ Css.margin Css.zero ]
        ]
        [ Html.text options.text ]
