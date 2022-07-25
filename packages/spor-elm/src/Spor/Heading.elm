module Spor.Heading exposing
    ( Heading
    , HeadingLevel(..)
    , addString
    , init
    , toHtml
    , withHeadingLevel
    , withString
    , withTextStyle
    )

import Css
import Html.Styled as Html exposing (Attribute, Html)
import Html.Styled.Attributes as Attribute
import Spor.Internal.TextStyle as TextStyleInternal
import Spor.TextStyle as TextStyle exposing (TextStyle)
import Spor.Token.Size.Breakpoint as Breakpoint exposing (Breakpoint)


type Heading
    = Heading Options


type alias Options =
    { style : TextStyle
    , level : HeadingLevel
    , text : String
    }


type HeadingLevel
    = H1
    | H2
    | H3
    | H4
    | H5
    | H6


init : Heading
init =
    Heading
        { style = TextStyle.Medium
        , level = H2
        , text = ""
        }


withTextStyle : TextStyle -> Heading -> Heading
withTextStyle style (Heading options) =
    Heading { options | style = style }


withHeadingLevel : HeadingLevel -> Heading -> Heading
withHeadingLevel level (Heading options) =
    Heading { options | level = level }


withString : String -> Heading -> Heading
withString text (Heading options) =
    Heading { options | text = text }


addString : String -> Heading -> Heading
addString text (Heading options) =
    Heading { options | text = options.text ++ text }


toHtml : Heading -> Html a
toHtml (Heading options) =
    constructorForLevel options.level
        [ Attribute.css <| TextStyleInternal.toCss options.style ]
        [ Html.text options.text ]


constructorForLevel : HeadingLevel -> List (Attribute a) -> List (Html a) -> Html a
constructorForLevel level =
    case level of
        H1 ->
            Html.h1

        H2 ->
            Html.h2

        H3 ->
            Html.h3

        H4 ->
            Html.h4

        H5 ->
            Html.h5

        H6 ->
            Html.h6
