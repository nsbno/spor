module Spor.Heading exposing
    ( Heading
    , HeadingLevel(..)
    , TextStyle(..)
    , addString
    , init
    , toHtml
    , withHeadingLevel
    , withString
    , withTextStyle
    )

import Css
import Css.Media
import Html.Styled as Html exposing (Attribute, Html)
import Html.Styled.Attributes as Attribute
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


type TextStyle
    = DoubleExtraLarge
    | ExtraLargeDisplay
    | ExtraLargeSans
    | Large
    | Medium
    | Small
    | ExtraSmall


init : Heading
init =
    Heading
        { style = Medium
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
        [ Attribute.css <| textStyleCss options.style ]
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


textStyleCss : TextStyle -> List Css.Style
textStyleCss textStyle =
    case textStyle of
        DoubleExtraLarge ->
            [ Css.fontFamilies [ "Vy Display" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 3.375)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 2.25) ]
            ]

        ExtraLargeDisplay ->
            [ Css.fontFamilies [ "Vy Display" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 2.5)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 1.875) ]
            ]

        ExtraLargeSans ->
            [ Css.fontFamilies [ "Vy Sans" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 2.5)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 1.875) ]
            ]

        Large ->
            [ Css.fontFamilies [ "Vy Sans" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 1.875)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 1.5) ]
            ]

        Medium ->
            [ Css.fontFamilies [ "Vy Sans" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 1.5)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 1.125) ]
            ]

        Small ->
            [ Css.fontFamilies [ "Vy Sans" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 1.125)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 1) ]
            ]

        ExtraSmall ->
            [ Css.fontFamilies [ "Vy Sans" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 1)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 0.875) ]
            ]


mediaQuery : Breakpoint -> List Css.Style -> Css.Style
mediaQuery breakpoint styles =
    Css.Media.withMedia
        [ Css.Media.only Css.Media.screen
            [ Css.Media.maxWidth (Breakpoint.toCss breakpoint) ]
        ]
        styles
