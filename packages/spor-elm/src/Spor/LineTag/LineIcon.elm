module Spor.LineTag.LineIcon exposing
    ( LineIcon
    , init, withVariant, withSize, withAdditionalStyle, withColor
    , toHtml
    )

{-| A component for displaying line icons

@docs LineIcon


## Config

@docs init, withVariant, withSize, withAdditionalStyle, withColor


## Display

@docs toHtml

-}

import Css exposing (Color, Style)
import Css.Global
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attributes
import Spor.Icon as Icon
import Spor.LineTag.Types exposing (Size(..), Variant(..))
import Spor.Token.Color.Alias as Alias
import Spor.Token.Color.Linjetag as Linjetag
import Svg.Styled as Svg exposing (Svg)


{-| A component for displaying line icons
-}
type LineIcon
    = LineIcon Options


type alias Options =
    { variant : Variant
    , size : Size
    , additionalStyle : Style
    , color : Maybe Color
    }



-- CONFIG


{-| Create an initial configuration for a `LineIcon` component.
-}
init : LineIcon
init =
    LineIcon
        { variant = LocalTrain
        , size = Sm
        , additionalStyle = Css.batch []
        , color = Nothing
        }


{-| Set the variant
-}
withVariant : Variant -> LineIcon -> LineIcon
withVariant variant (LineIcon options) =
    LineIcon { options | variant = variant }


{-| Set the size
-}
withSize : Size -> LineIcon -> LineIcon
withSize size (LineIcon options) =
    LineIcon { options | size = size }


{-| Set the additonal style
-}
withAdditionalStyle : Style -> LineIcon -> LineIcon
withAdditionalStyle style (LineIcon options) =
    LineIcon { options | additionalStyle = style }


{-| Set the colour
-}
withColor : Maybe Color -> LineIcon -> LineIcon
withColor color (LineIcon options) =
    LineIcon { options | color = color }



-- DISPLAY


{-| Convert configuration to HTML
-}
toHtml : LineIcon -> Html a
toHtml (LineIcon options) =
    let
        borderColor_ =
            borderColor options.variant
                |> Maybe.map Css.borderColor
                |> Maybe.withDefault (Css.borderColor Css.transparent)

        borderWidth_ =
            borderColor options.variant
                |> Maybe.map (\_ -> Css.borderWidth <| Css.px 1)
                |> Maybe.withDefault (Css.borderWidth <| Css.zero)

        backgroundColor_ =
            options.color
                |> Maybe.withDefault (backgroundColor options.variant)
    in
    Html.span
        [ Attributes.css
            [ Css.backgroundColor backgroundColor_
            , borderColor_
            , borderWidth_
            , Css.borderStyle Css.solid
            , options.additionalStyle
            , Css.color <| iconColor options.variant
            , Css.Global.descendants
                [ Css.Global.path [ Css.fill <| iconColor options.variant ] ]
            ]
        ]
        [ icon options.variant options.size ]


borderColor : Variant -> Maybe Color
borderColor variant =
    case variant of
        Walk ->
            Just <| Alias.toCss Alias.osloGrey

        _ ->
            Nothing


iconColor : Variant -> Color
iconColor variant =
    case variant of
        Walk ->
            Alias.toCss Alias.darkGrey

        AlternativeTransport ->
            Alias.toCss Alias.darkGrey

        _ ->
            Alias.toCss Alias.white


icon : Variant -> Size -> Svg msg
icon variant size =
    let
        sizeToIconSize =
            case size of
                Sm ->
                    Icon.Size18

                Md ->
                    Icon.Size24

                Lg ->
                    Icon.Size30

        trainIcon size_ =
            Icon.icon size_ Icon.Fill Icon.Train
    in
    Icon.toHtml <|
        case variant of
            LocalTrain ->
                trainIcon sizeToIconSize

            RegionTrain ->
                trainIcon sizeToIconSize

            RegionExpressTrain ->
                trainIcon sizeToIconSize

            LongDistanceTrain ->
                trainIcon sizeToIconSize

            AirportExpressTrain ->
                trainIcon sizeToIconSize

            VyBus ->
                Icon.icon sizeToIconSize Icon.Fill Icon.ExpressBus

            LocalBus ->
                Icon.icon sizeToIconSize Icon.Fill Icon.Bus

            Ferry ->
                Icon.icon sizeToIconSize Icon.Fill Icon.Ferry

            Subway ->
                Icon.icon sizeToIconSize Icon.Fill Icon.Subway

            Tram ->
                Icon.icon sizeToIconSize Icon.Fill Icon.Tram

            AlternativeTransport ->
                Icon.icon sizeToIconSize Icon.Fill Icon.AltTransport

            Walk ->
                Icon.icon sizeToIconSize Icon.Fill Icon.Walk


backgroundColor : Variant -> Color
backgroundColor variant =
    case variant of
        LocalTrain ->
            Linjetag.toCss Linjetag.lokaltog

        RegionTrain ->
            Linjetag.toCss Linjetag.regiontog

        RegionExpressTrain ->
            Linjetag.toCss Linjetag.regionEkspress

        LongDistanceTrain ->
            Linjetag.toCss Linjetag.fjerntog

        AirportExpressTrain ->
            Linjetag.toCss Linjetag.flytog

        VyBus ->
            Linjetag.toCss Linjetag.vyBuss

        LocalBus ->
            Linjetag.toCss Linjetag.lokalbuss

        Ferry ->
            Linjetag.toCss Linjetag.ferge

        Subway ->
            Linjetag.toCss Linjetag.tbane

        Tram ->
            Linjetag.toCss Linjetag.trikk

        AlternativeTransport ->
            Linjetag.toCss Linjetag.altTransport

        Walk ->
            Alias.toCss Alias.white
