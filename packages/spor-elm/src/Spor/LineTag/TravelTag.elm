module Spor.LineTag.TravelTag exposing
    ( TravelTag
    , init, withVariant, withSize, withTitle, withDescription, withDeviationLevel, withColor, withBackgroundColor
    , toHtml
    )

{-| A component for displaying travel tags

@docs TravelTag


## Config

@docs init, withVariant, withSize, withTitle, withDescription, withDeviationLevel, withColor, withBackgroundColor


## Display

@docs toHtml

-}

import Css exposing (Color, Style)
import Css.Global
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attributes
import Spor.Icon as Icon
import Spor.LineTag.LineIcon as LineIcon
import Spor.LineTag.LineText as LineText
import Spor.LineTag.Types exposing (DeviationLevel(..), Size(..), Variant(..))
import Spor.Token.Color.Alias as Alias
import Spor.Token.Color.Linjetag as Linjetag
import Spor.Token.Size.Spacing as Spacing


{-| A component for displaying travel tags
-}
type TravelTag
    = TravelTag Options


type alias Options =
    { variant : Variant
    , size : Size
    , title : String
    , description : Maybe String
    , deviationLevel : Maybe DeviationLevel
    , color : Maybe Color
    , backgroundColor : Maybe Color
    }



-- CONFIG


{-| Create an initial configuration for a `TravelTag` component.
-}
init : TravelTag
init =
    TravelTag
        { variant = LocalTrain
        , size = Md
        , title = ""
        , description = Nothing
        , deviationLevel = Nothing
        , color = Nothing
        , backgroundColor = Nothing
        }


{-| Set the variant
-}
withVariant : Variant -> TravelTag -> TravelTag
withVariant variant (TravelTag options) =
    TravelTag { options | variant = variant }


{-| Set the size
-}
withSize : Size -> TravelTag -> TravelTag
withSize size (TravelTag options) =
    TravelTag { options | size = size }


{-| Set the title to be displayed
-}
withTitle : String -> TravelTag -> TravelTag
withTitle title (TravelTag options) =
    TravelTag { options | title = title }


{-| Set the description to be displayed
-}
withDescription : Maybe String -> TravelTag -> TravelTag
withDescription description (TravelTag options) =
    TravelTag { options | description = description }


{-| Set the deviation level
-}
withDeviationLevel : Maybe DeviationLevel -> TravelTag -> TravelTag
withDeviationLevel deviationLevel (TravelTag options) =
    TravelTag { options | deviationLevel = deviationLevel }


{-| Set the color
-}
withColor : Maybe Color -> TravelTag -> TravelTag
withColor color (TravelTag options) =
    TravelTag { options | color = color }


{-| Set the background color
-}
withBackgroundColor : Maybe Color -> TravelTag -> TravelTag
withBackgroundColor color (TravelTag options) =
    TravelTag { options | backgroundColor = color }



-- DISPLAY


{-| Convert configuration to HTML
-}
toHtml : TravelTag -> Html a
toHtml (TravelTag options) =
    let
        backgroundColor_ =
            options.backgroundColor
                |> Maybe.withDefault (backgroundColor options.variant)
    in
    Html.div
        [ Attributes.css
            [ Css.position Css.relative
            , Css.displayFlex
            , Css.lineHeight Css.zero
            , Css.flexDirection Css.row
            , Css.justifyContent Css.center
            , Css.alignItems Css.center
            , Css.backgroundColor backgroundColor_
            , Css.borderRadius <| Css.px 12
            , deviationBorderStyle options.deviationLevel
            , if options.variant /= Walk then
                Css.padding4
                    (Spacing.toCss Spacing.i0_5)
                    (Spacing.toCss Spacing.i1)
                    (Spacing.toCss Spacing.i0_5)
                    (Spacing.toCss Spacing.i0_5)

              else
                Css.batch []
            ]
        ]
        [ lineIcon options, deviationIcon options.deviationLevel, lineText options ]


lineIcon : Options -> Html a
lineIcon options =
    let
        additionalStyle =
            if options.variant == Walk then
                Css.batch
                    [ Css.borderStyle Css.none
                    , Css.after
                        [ Css.property "content" <| "\"" ++ options.title ++ "\""
                        , Css.marginLeft <| Css.px -6
                        , Css.fontSize <| Css.px 14
                        ]
                    ]

            else
                Css.batch
                    [ Css.borderRadius <| Css.px <| iconRadius options.size
                    , Css.marginRight <| Css.px <| rightMargin options.size
                    , Css.padding <| Spacing.toCss Spacing.i0_5
                    ]
    in
    LineIcon.init
        |> LineIcon.withVariant options.variant
        |> LineIcon.withSize options.size
        |> LineIcon.withAdditionalStyle additionalStyle
        |> LineIcon.withColor options.color
        |> LineIcon.toHtml


lineText : Options -> Html a
lineText options =
    if options.variant == Walk then
        Html.text ""

    else
        LineText.init
            |> LineText.withTitle options.title
            |> LineText.withDescription options.description
            |> LineText.toHtml


iconRadius : Size -> Float
iconRadius size =
    case size of
        Sm ->
            6

        Md ->
            9

        Lg ->
            9


rightMargin : Size -> Float
rightMargin size =
    case size of
        Sm ->
            6

        Md ->
            9

        Lg ->
            9


backgroundColor : Variant -> Color
backgroundColor variant =
    case variant of
        LocalTrain ->
            Linjetag.toCss Linjetag.lokaltogLight

        RegionTrain ->
            Linjetag.toCss Linjetag.regiontogLight

        RegionExpressTrain ->
            Linjetag.toCss Linjetag.regionEkspressLight

        LongDistanceTrain ->
            Linjetag.toCss Linjetag.fjerntogLight

        AirportExpressTrain ->
            Linjetag.toCss Linjetag.flytogLight

        VyBus ->
            Linjetag.toCss Linjetag.vyBussLight

        LocalBus ->
            Linjetag.toCss Linjetag.lokalbussLight

        Ferry ->
            Linjetag.toCss Linjetag.fergeLight

        Subway ->
            Linjetag.toCss Linjetag.tbaneLight

        Tram ->
            Linjetag.toCss Linjetag.trikkLight

        AlternativeTransport ->
            Linjetag.toCss Linjetag.altTransportLight

        Walk ->
            Alias.toCss Alias.white


deviationIcon : Maybe DeviationLevel -> Html msg
deviationIcon maybeDeviationLevel =
    let
        feedbackIcon type_ =
            Icon.icon Icon.Size18 Icon.Fill type_
    in
    case maybeDeviationLevel of
        Just deviationLevel ->
            Html.span
                [ Attributes.css [ deviationStyle deviationLevel ] ]
                [ Icon.toHtml <|
                    case deviationLevel of
                        Critical ->
                            feedbackIcon Icon.Error

                        Major ->
                            feedbackIcon Icon.Warning

                        Minor ->
                            feedbackIcon Icon.Warning

                        Info ->
                            feedbackIcon Icon.Information
                ]

        Nothing ->
            Html.text ""


deviationStyle : DeviationLevel -> Style
deviationStyle deviationLevel =
    let
        iconFillColor =
            if deviationLevel == Info then
                [ Css.fill <| Alias.toCss Alias.ocean ]

            else
                []

        {- TODO: Update this part of the code when the icons are updated in Spor.
           The new icon version is used directly until further.
        -}
        iconSymbolColor =
            if deviationLevel == Major || deviationLevel == Minor then
                Alias.toCss Alias.darkGrey

            else
                Alias.toCss Alias.white

        svgStyle =
            if deviationLevel == Major || deviationLevel == Minor then
                Css.Global.descendants
                    [ Css.Global.path iconFillColor
                    ]

            else
                Css.batch
                    [ Css.property "paint-order" "stroke"
                    , Css.property "stroke" "white"
                    , Css.property "stroke-width" "2"
                    , Css.Global.descendants
                        [ Css.Global.path iconFillColor
                        , Css.Global.typeSelector "path:first-child" [ Css.fill iconSymbolColor ]
                        ]
                    ]
    in
    Css.batch
        [ Css.position Css.absolute
        , Css.top <| Css.px -7
        , Css.right <| Css.px -8
        , Css.zIndex <| Css.int 1
        , svgStyle
        ]


deviationBorderStyle : Maybe DeviationLevel -> Style
deviationBorderStyle maybeDeviationLevel =
    case maybeDeviationLevel of
        Just deviationLevel ->
            deviationBorderColor deviationLevel
                |> Maybe.map (Css.boxShadow6 Css.inset Css.zero Css.zero Css.zero <| Css.px 1)
                |> Maybe.withDefault (Css.batch [])

        Nothing ->
            Css.batch []


deviationBorderColor : DeviationLevel -> Maybe Color
deviationBorderColor deviationLevel =
    case deviationLevel of
        Critical ->
            Just <| Alias.toCss Alias.brightRed

        Major ->
            Just <| Alias.toCss Alias.golden

        _ ->
            Nothing
