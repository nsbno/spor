module Spor.TravelTag exposing (..)

{-| A component for displaying travel tags


## Config

@docs init, withHeadingLevel, withTextStyle, withString


## Display

@docs toHtml

-}

import Css exposing (Color)
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attributes
import Spor.Common.Types exposing (Size(..), Variant(..))
import Spor.LineTagIcon as LineTagIcon
import Spor.Text as Text
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
    , children : Maybe String
    }



-- CONFIG


{-| Create an initial configuration for a `TravelTag` component.
-}
init : TravelTag
init =
    TravelTag
        { variant = LocalTrain
        , size = Sm
        , title = ""
        , children = Nothing
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


{-| Set the text to be displayed
-}
withTitle : String -> TravelTag -> TravelTag
withTitle title (TravelTag options) =
    TravelTag { options | title = title }


{-| Set the children to be displayed
-}
withChildren : Maybe String -> TravelTag -> TravelTag
withChildren children (TravelTag options) =
    TravelTag { options | children = children }



-- DISPLAY


{-| Convert configuration to HTML
-}
toHtml : TravelTag -> Html a
toHtml (TravelTag options) =
    let
        lineTagIcon =
            LineTagIcon.init
                |> LineTagIcon.withVariant options.variant
                |> LineTagIcon.withSize options.size
                |> LineTagIcon.withAdditionalStyle
                    (Css.batch
                        [ Css.borderRadius <| Css.px <| iconRadius options.size
                        , Css.marginRight <| Css.px <| marginRight options.size
                        ]
                    )
                |> LineTagIcon.toHtml

        lineTagText =
            options.children
                |> Maybe.map
                    (\item ->
                        [ Html.span
                            [ Attributes.css
                                [ Css.color <| Alias.toCss Alias.darkGrey ]
                            ]
                            [ Text.init
                                |> Text.withString item
                                |> Text.toHtml
                            ]
                        ]
                    )
                |> Maybe.withDefault []
    in
    Html.div
        [ Attributes.css
            [ Css.displayFlex
            , Css.flexDirection Css.row
            , Css.justifyContent Css.center
            , Css.backgroundColor <| backgroundColor options.variant
            , Css.borderRadius <| Css.px <| containerRadius options.size
            , Css.padding <| Spacing.toCss Spacing.xs
            ]
        ]
        ([ lineTagIcon ] ++ lineTagText)


containerRadius : Size -> Float
containerRadius size =
    case size of
        Sm ->
            9

        Md ->
            12

        Lg ->
            12


iconRadius : Size -> Float
iconRadius size =
    case size of
        Sm ->
            6

        Md ->
            9

        Lg ->
            9


marginRight : Size -> Float
marginRight size =
    case size of
        Sm ->
            1

        Md ->
            1.5

        Lg ->
            1.5


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
