module Spor.Text exposing
    ( Text
    , addString
    , init
    , toHtml
    , withString
    , withTextStyle
    )

import Css
import Css.Media
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attribute
import Spor.Internal.TextStyle as TextStyleInternal
import Spor.TextStyle as TextStyle exposing (TextStyle)
import Spor.Token.Size.Breakpoint as Breakpoint exposing (Breakpoint)


type Text
    = Text Options


type alias Options =
    { style : TextStyle
    , text : String
    }


init : Text
init =
    Text
        { style = TextStyle.Medium
        , text = ""
        }


withTextStyle : TextStyle -> Text -> Text
withTextStyle style (Text options) =
    Text { options | style = style }


withString : String -> Text -> Text
withString text (Text options) =
    Text { options | text = text }


addString : String -> Text -> Text
addString text (Text options) =
    Text { options | text = options.text ++ text }


toHtml : Text -> Html a
toHtml (Text options) =
    Html.p
        [ Attribute.css <| TextStyleInternal.toCss options.style ]
        [ Html.text options.text ]
