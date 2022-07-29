module Spor.Heading exposing
    ( Heading, HeadingLevel(..)
    , init, withHeadingLevel, withTextStyle, withString
    , toHtml
    )

{-| A component for displaying headers

@docs Heading, HeadingLevel


## Config

@docs init, withHeadingLevel, withTextStyle, withString


## Display

@docs toHtml

-}

import Html.Styled as Html exposing (Attribute, Html)
import Html.Styled.Attributes as Attribute
import Spor.Internal.TextStyle as TextStyleInternal
import Spor.TextStyle as TextStyle exposing (TextStyle)


{-| A component for displaying headers
-}
type Heading
    = Heading Options


type alias Options =
    { style : TextStyle
    , level : HeadingLevel
    , text : String
    }


{-| What `Html` element to use for the header.
Use `H1` for most important, `H2` for second most important etc.
-}
type HeadingLevel
    = H1
    | H2
    | H3
    | H4
    | H5
    | H6



-- CONFIG


{-| Create an initial configuration for a `Heading` component.
By default, the `H2` level is used, along with the `Medium` text style.
-}
init : Heading
init =
    Heading
        { style = TextStyle.Medium
        , level = H2
        , text = ""
        }


{-| Set the text style
-}
withTextStyle : TextStyle -> Heading -> Heading
withTextStyle style (Heading options) =
    Heading { options | style = style }


{-| Set the heading level
-}
withHeadingLevel : HeadingLevel -> Heading -> Heading
withHeadingLevel level (Heading options) =
    Heading { options | level = level }


{-| Set the text to be displayed
-}
withString : String -> Heading -> Heading
withString text (Heading options) =
    Heading { options | text = text }



-- DISPLAY


{-| Convert configuration to HTML
-}
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
