module Spor.Internal.TextStyle exposing (toCss)

import Css
import Css.Media
import Spor.TextStyle as TextStyle exposing (TextStyle)
import Spor.Token.Size.Breakpoint as Breakpoint exposing (Breakpoint)


toCss : TextStyle -> List Css.Style
toCss textStyle =
    case textStyle of
        TextStyle.DoubleExtraLarge ->
            [ Css.fontFamilies [ "VyDisplay" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 3.375)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 2.25) ]
            ]

        TextStyle.ExtraLargeDisplay ->
            [ Css.fontFamilies [ "VyDisplay" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 2.5)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 1.875) ]
            ]

        TextStyle.ExtraLargeSans ->
            [ Css.fontFamilies [ "VySans" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 2.5)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 1.875) ]
            ]

        TextStyle.Large ->
            [ Css.fontFamilies [ "VySans" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 1.875)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 1.5) ]
            ]

        TextStyle.Medium ->
            [ Css.fontFamilies [ "VySans" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 1.5)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 1.125) ]
            ]

        TextStyle.Small ->
            [ Css.fontFamilies [ "Vy Sans" ]
            , Css.lineHeight (Css.num 1.333)
            , Css.fontSize (Css.rem 1.125)
            , mediaQuery Breakpoint.sm
                [ Css.fontSize (Css.rem 1) ]
            ]

        TextStyle.ExtraSmall ->
            [ Css.fontFamilies [ "VySans" ]
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
