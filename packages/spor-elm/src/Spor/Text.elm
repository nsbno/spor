module Spor.Text exposing
    ( Text
    , TextStyle(..)
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
import Spor.Token.Size.Breakpoint as Breakpoint exposing (Breakpoint)


type Text
    = Text Options


type alias Options =
    { style : TextStyle
    , text : String
    }


type TextStyle
    = DoubleExtraLarge
    | ExtraLargeDisplay
    | ExtraLargeSans
    | Large
    | Medium
    | Small
    | ExtraSmall


init : Text
init =
    Text
        { style = Medium
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
        [ Attribute.css <| textStyleCss options.style ]
        [ Html.text options.text ]


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
