module Spor.LineTagIcon exposing (..)

{-| A component for displaying line tag icons


## Config

@docs init, withVariant, withSize, withAdditionalStyle


## Display

@docs toHtml

-}

import Css exposing (Color, Style)
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attributes
import Spor.Common.Types exposing (Size(..), Variant(..))
import Spor.Icon.Transportation as Transportation
import Spor.Token.Color.Alias as Alias
import Spor.Token.Color.Linjetag as Linjetag
import Svg exposing (Svg)


{-| A component for displaying line tag icons
-}
type LineTagIcon
    = LineTagIcon Options


type alias Options =
    { variant : Variant
    , size : Size
    , additionalStyle : Style
    }



-- CONFIG


{-| Create an initial configuration for a `LineTagIcon` component.
-}
init : LineTagIcon
init =
    LineTagIcon
        { variant = LocalTrain
        , size = Sm
        , additionalStyle = Css.batch []
        }


{-| Set the variant
-}
withVariant : Variant -> LineTagIcon -> LineTagIcon
withVariant variant (LineTagIcon options) =
    LineTagIcon { options | variant = variant }


{-| Set the size
-}
withSize : Size -> LineTagIcon -> LineTagIcon
withSize size (LineTagIcon options) =
    LineTagIcon { options | size = size }


{-| Set the additonal style
-}
withAdditionalStyle : Style -> LineTagIcon -> LineTagIcon
withAdditionalStyle style (LineTagIcon options) =
    LineTagIcon { options | additionalStyle = style }



-- DISPLAY


{-| Convert configuration to HTML
-}
toHtml : LineTagIcon -> Html a
toHtml (LineTagIcon options) =
    let
        borderColor_ =
            borderColor options.variant
                |> Maybe.map Css.borderColor
                |> Maybe.withDefault (Css.borderColor Css.transparent)

        borderWidth_ =
            borderColor options.variant
                |> Maybe.map (\_ -> Css.width <| Css.px 1)
                |> Maybe.withDefault (Css.width <| Css.zero)
    in
    Html.div
        [ Attributes.css
            [ Css.backgroundColor <| backgroundColor options.variant
            , borderColor_
            , borderWidth_
            , Css.borderStyle Css.solid
            , options.additionalStyle
            ]
        ]
        [ Html.span [ Attributes.css [ Css.color <| iconColor options.variant ] ]
            [ Html.fromUnstyled <|
                Svg.svg []
                    [ icon options.variant options.size ]
            ]
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
            Transportation.trainFill18X18 []

        ( LocalTrain, Md ) ->
            Transportation.trainFill24X24 []

        ( LocalTrain, Lg ) ->
            Transportation.trainFill30X30 []

        ( RegionTrain, Sm ) ->
            Transportation.trainFill18X18 []

        ( RegionTrain, Md ) ->
            Transportation.trainFill24X24 []

        ( RegionTrain, Lg ) ->
            Transportation.trainFill30X30 []

        ( RegionExpressTrain, Sm ) ->
            Transportation.trainFill18X18 []

        ( RegionExpressTrain, Md ) ->
            Transportation.trainFill24X24 []

        ( RegionExpressTrain, Lg ) ->
            Transportation.trainFill30X30 []

        ( LongDistanceTrain, Sm ) ->
            Transportation.trainFill18X18 []

        ( LongDistanceTrain, Md ) ->
            Transportation.trainFill24X24 []

        ( LongDistanceTrain, Lg ) ->
            Transportation.trainFill30X30 []

        ( AirportExpressTrain, Sm ) ->
            Transportation.trainFill18X18 []

        ( AirportExpressTrain, Md ) ->
            Transportation.trainFill24X24 []

        ( AirportExpressTrain, Lg ) ->
            Transportation.trainFill30X30 []

        ( VyBus, Sm ) ->
            Transportation.expressBusFill18X18 []

        ( VyBus, Md ) ->
            Transportation.expressBusFill24X24 []

        ( VyBus, Lg ) ->
            Transportation.expressBusFill30X30 []

        ( LocalBus, Sm ) ->
            Transportation.busFill18X18 []

        ( LocalBus, Md ) ->
            Transportation.busFill24X24 []

        ( LocalBus, Lg ) ->
            Transportation.busFill30X30 []

        ( Ferry, Sm ) ->
            Transportation.ferryFill18X18 []

        ( Ferry, Md ) ->
            Transportation.ferryFill24X24 []

        ( Ferry, Lg ) ->
            Transportation.ferryFill30X30 []

        ( Subway, Sm ) ->
            Transportation.subwayFill18X18 []

        ( Subway, Md ) ->
            Transportation.subwayFill24X24 []

        ( Subway, Lg ) ->
            Transportation.subwayFill30X30 []

        ( Tram, Sm ) ->
            Transportation.trainFill18X18 []

        ( Tram, Md ) ->
            Transportation.tramFill18X18 []

        ( Tram, Lg ) ->
            Transportation.trainFill24X24 []

        ( AlternativeTransport, Sm ) ->
            Transportation.altTransportFill18X18 []

        ( AlternativeTransport, Md ) ->
            Transportation.altTransportFill24X24 []

        ( AlternativeTransport, Lg ) ->
            Transportation.altTransportFill30X30 []

        ( Walk, Sm ) ->
            Transportation.wagonFill18X18 []

        ( Walk, Md ) ->
            Transportation.wagonFill24X24 []

        ( Walk, Lg ) ->
            Transportation.walkFill30X30 []


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
