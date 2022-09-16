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
import Spor.Icon.Transportation as Transportation
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
                |> Maybe.map identity
                |> Maybe.withDefault (backgroundColor options.variant)
    in
    Html.div
        [ Attributes.css
            [ Css.backgroundColor backgroundColor_
            , borderColor_
            , borderWidth_
            , Css.borderStyle Css.solid
            , options.additionalStyle
            ]
        ]
        [ Html.span
            [ Attributes.css
                [ Css.color <| iconColor options.variant
                , Css.displayFlex
                , Css.Global.descendants
                    [ Css.Global.path [ Css.fill <| iconColor options.variant ] ]
                ]
            ]
            [ icon options.variant options.size ]
        ]


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
    case ( variant, size ) of
        ( LocalTrain, Sm ) ->
            Svg.fromUnstyled <| Transportation.trainFill18X18 []

        ( LocalTrain, Md ) ->
            Svg.fromUnstyled <| Transportation.trainFill24X24 []

        ( LocalTrain, Lg ) ->
            Svg.fromUnstyled <| Transportation.trainFill30X30 []

        ( RegionTrain, Sm ) ->
            Svg.fromUnstyled <| Transportation.trainFill18X18 []

        ( RegionTrain, Md ) ->
            Svg.fromUnstyled <| Transportation.trainFill24X24 []

        ( RegionTrain, Lg ) ->
            Svg.fromUnstyled <| Transportation.trainFill30X30 []

        ( RegionExpressTrain, Sm ) ->
            Svg.fromUnstyled <| Transportation.trainFill18X18 []

        ( RegionExpressTrain, Md ) ->
            Svg.fromUnstyled <| Transportation.trainFill24X24 []

        ( RegionExpressTrain, Lg ) ->
            Svg.fromUnstyled <| Transportation.trainFill30X30 []

        ( LongDistanceTrain, Sm ) ->
            Svg.fromUnstyled <| Transportation.trainFill18X18 []

        ( LongDistanceTrain, Md ) ->
            Svg.fromUnstyled <| Transportation.trainFill24X24 []

        ( LongDistanceTrain, Lg ) ->
            Svg.fromUnstyled <| Transportation.trainFill30X30 []

        ( AirportExpressTrain, Sm ) ->
            Svg.fromUnstyled <| Transportation.trainFill18X18 []

        ( AirportExpressTrain, Md ) ->
            Svg.fromUnstyled <| Transportation.trainFill24X24 []

        ( AirportExpressTrain, Lg ) ->
            Svg.fromUnstyled <| Transportation.trainFill30X30 []

        ( VyBus, Sm ) ->
            Svg.fromUnstyled <| Transportation.expressBusFill18X18 []

        ( VyBus, Md ) ->
            Svg.fromUnstyled <| Transportation.expressBusFill24X24 []

        ( VyBus, Lg ) ->
            Svg.fromUnstyled <| Transportation.expressBusFill30X30 []

        ( LocalBus, Sm ) ->
            Svg.fromUnstyled <| Transportation.busFill18X18 []

        ( LocalBus, Md ) ->
            Svg.fromUnstyled <| Transportation.busFill24X24 []

        ( LocalBus, Lg ) ->
            Svg.fromUnstyled <| Transportation.busFill30X30 []

        ( Ferry, Sm ) ->
            Svg.fromUnstyled <| Transportation.ferryFill18X18 []

        ( Ferry, Md ) ->
            Svg.fromUnstyled <| Transportation.ferryFill24X24 []

        ( Ferry, Lg ) ->
            Svg.fromUnstyled <| Transportation.ferryFill30X30 []

        ( Subway, Sm ) ->
            Svg.fromUnstyled <| Transportation.subwayFill18X18 []

        ( Subway, Md ) ->
            Svg.fromUnstyled <| Transportation.subwayFill24X24 []

        ( Subway, Lg ) ->
            Svg.fromUnstyled <| Transportation.subwayFill30X30 []

        ( Tram, Sm ) ->
            Svg.fromUnstyled <| Transportation.trainFill18X18 []

        ( Tram, Md ) ->
            Svg.fromUnstyled <| Transportation.tramFill24X24 []

        ( Tram, Lg ) ->
            Svg.fromUnstyled <| Transportation.trainFill30X30 []

        ( AlternativeTransport, Sm ) ->
            Svg.fromUnstyled <| Transportation.altTransportFill18X18 []

        ( AlternativeTransport, Md ) ->
            Svg.fromUnstyled <| Transportation.altTransportFill24X24 []

        ( AlternativeTransport, Lg ) ->
            Svg.fromUnstyled <| Transportation.altTransportFill30X30 []

        ( Walk, Sm ) ->
            Svg.fromUnstyled <| Transportation.walkFill18X18 []

        ( Walk, Md ) ->
            Svg.fromUnstyled <| Transportation.walkFill24X24 []

        ( Walk, Lg ) ->
            Svg.fromUnstyled <| Transportation.walkFill30X30 []


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
