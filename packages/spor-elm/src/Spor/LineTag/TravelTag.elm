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
import Spor.Icon.Feedback as Feedback
import Spor.LineTag.LineIcon as LineIcon
import Spor.LineTag.LineText as LineText
import Spor.LineTag.Types exposing (DeviationLevel(..), Size(..), Variant(..))
import Spor.Token.Color.Alias as Alias
import Spor.Token.Color.Linjetag as Linjetag
import Spor.Token.Size.Spacing as Spacing
import Svg.Styled as Svg


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
                |> Maybe.map identity
                |> Maybe.withDefault (backgroundColor options.variant)
    in
    Html.div
        [ Attributes.css
            [ Css.position Css.relative
            , Css.displayFlex
            , Css.flexDirection Css.row
            , Css.justifyContent Css.center
            , Css.alignItems Css.center
            , Css.backgroundColor backgroundColor_
            , Css.borderRadius <| Css.px 12
            , deviationBorderStyle options.deviationLevel
            , if options.variant /= Walk then
                Css.padding4
                    (Spacing.toCss Spacing.i3xs)
                    (Spacing.toCss Spacing.i2xs)
                    (Spacing.toCss Spacing.i3xs)
                    (Spacing.toCss Spacing.i3xs)

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
                Css.batch [ Css.borderStyle Css.none ]

            else
                Css.batch
                    [ Css.borderRadius <| Css.px <| iconRadius options.size
                    , Css.marginRight <| Css.px <| rightMargin options.size
                    , Css.padding <| Spacing.toCss Spacing.px3
                    ]

        icon =
            LineIcon.init
                |> LineIcon.withVariant options.variant
                |> LineIcon.withSize options.size
                |> LineIcon.withAdditionalStyle additionalStyle
                |> LineIcon.withColor options.color
                |> LineIcon.toHtml
    in
    if options.variant == Walk then
        Html.span [ Attributes.css [ Css.position Css.relative ] ]
            [ icon
            , Html.span
                [ Attributes.css <|
                    [ Css.position Css.absolute
                    , Css.left <| Css.px 18
                    , Css.bottom <| Css.px -6
                    , Css.fontSize <| Css.px 14
                    , Css.lineHeight <| Css.px 19
                    ]
                ]
                [ Html.text options.title ]
            ]

    else
        icon


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
    case maybeDeviationLevel of
        Just deviationLevel ->
            Html.span
                [ Attributes.css [ deviationStyle deviationLevel ] ]
                [ Svg.fromUnstyled <|
                    case deviationLevel of
                        Critical ->
                            Feedback.errorFill18X18 []

                        Major ->
                            Feedback.warningFill18X18 []

                        Minor ->
                            Feedback.warningFill18X18 []

                        Info ->
                            Feedback.informationFill18X18 []
                ]

        Nothing ->
            Html.text ""


deviationStyle : DeviationLevel -> Style
deviationStyle deviationLevel =
    let
        fillColor =
            if deviationLevel == Info then
                [ Css.fill <| Alias.toCss Alias.ocean ]

            else
                []
    in
    Css.batch
        [ Css.position Css.absolute
        , Css.top <| Css.px -7
        , Css.right <| Css.px -8
        , Css.zIndex <| Css.int 1
        , Css.property "paint-order" "stroke"
        , Css.property "stroke" "white"
        , Css.property "stroke-width" "2"
        , Css.Global.descendants
            [ Css.Global.path fillColor
            , Css.Global.typeSelector "path:first-child" [ Css.fill <| Alias.toCss Alias.white ]
            ]
        ]


deviationBorderStyle : Maybe DeviationLevel -> Style
deviationBorderStyle maybeDeviationLevel =
    case maybeDeviationLevel of
        Just deviationLevel ->
            deviationBorderColor deviationLevel
                |> Maybe.map
                    (Css.boxShadow6 Css.inset Css.zero Css.zero Css.zero <| Css.px 1)
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
