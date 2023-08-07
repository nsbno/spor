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
        trainIcon size_ =
            Icon.icon size_ Icon.Fill Icon.Train

        expressBusIcon size_ =
            Icon.icon size_ Icon.Fill Icon.ExpressBus

        busIcon size_ =
            Icon.icon size_ Icon.Fill Icon.Bus

        ferryIcon size_ =
            Icon.icon size_ Icon.Fill Icon.Ferry

        subwayIcon size_ =
            Icon.icon size_ Icon.Fill Icon.Subway

        tramIcon size_ =
            Icon.icon size_ Icon.Fill Icon.Tram

        altTransportIcon size_ =
            Icon.icon size_ Icon.Fill Icon.AltTransport

        walkIcon size_ =
            Icon.icon size_ Icon.Fill Icon.Walk
    in
    Icon.toHtml <|
        case ( variant, size ) of
            ( LocalTrain, Sm ) ->
                trainIcon Icon.Size18

            ( LocalTrain, Md ) ->
                trainIcon Icon.Size24

            ( LocalTrain, Lg ) ->
                trainIcon Icon.Size30

            ( RegionTrain, Sm ) ->
                trainIcon Icon.Size18

            ( RegionTrain, Md ) ->
                trainIcon Icon.Size24

            ( RegionTrain, Lg ) ->
                trainIcon Icon.Size30

            ( RegionExpressTrain, Sm ) ->
                trainIcon Icon.Size18

            ( RegionExpressTrain, Md ) ->
                trainIcon Icon.Size24

            ( RegionExpressTrain, Lg ) ->
                trainIcon Icon.Size30

            ( LongDistanceTrain, Sm ) ->
                trainIcon Icon.Size18

            ( LongDistanceTrain, Md ) ->
                trainIcon Icon.Size24

            ( LongDistanceTrain, Lg ) ->
                trainIcon Icon.Size30

            ( AirportExpressTrain, Sm ) ->
                trainIcon Icon.Size18

            ( AirportExpressTrain, Md ) ->
                trainIcon Icon.Size24

            ( AirportExpressTrain, Lg ) ->
                trainIcon Icon.Size30

            ( VyBus, Sm ) ->
                expressBusIcon Icon.Size18

            ( VyBus, Md ) ->
                expressBusIcon Icon.Size24

            ( VyBus, Lg ) ->
                expressBusIcon Icon.Size30

            ( LocalBus, Sm ) ->
                busIcon Icon.Size18

            ( LocalBus, Md ) ->
                busIcon Icon.Size24

            ( LocalBus, Lg ) ->
                busIcon Icon.Size30

            ( Ferry, Sm ) ->
                ferryIcon Icon.Size18

            ( Ferry, Md ) ->
                ferryIcon Icon.Size24

            ( Ferry, Lg ) ->
                ferryIcon Icon.Size30

            ( Subway, Sm ) ->
                subwayIcon Icon.Size18

            ( Subway, Md ) ->
                subwayIcon Icon.Size24

            ( Subway, Lg ) ->
                subwayIcon Icon.Size30

            ( Tram, Sm ) ->
                tramIcon Icon.Size18

            ( Tram, Md ) ->
                tramIcon Icon.Size24

            ( Tram, Lg ) ->
                tramIcon Icon.Size30

            ( AlternativeTransport, Sm ) ->
                altTransportIcon Icon.Size18

            ( AlternativeTransport, Md ) ->
                altTransportIcon Icon.Size24

            ( AlternativeTransport, Lg ) ->
                altTransportIcon Icon.Size30

            ( Walk, Sm ) ->
                walkIcon Icon.Size18

            ( Walk, Md ) ->
                walkIcon Icon.Size24

            ( Walk, Lg ) ->
                walkIcon Icon.Size30


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
