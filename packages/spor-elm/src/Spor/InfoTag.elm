module Spor.InfoTag exposing (..)

{-| A component for displaying info tags


## Config

@docs init, withVariant, withSize, withSize, withTitle, withChildren


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


{-| A component for displaying info tags
-}
type InfoTag
    = InfoTag Options


type alias Options =
    { variant : Variant
    , size : Size
    , title : String
    , children : Maybe String
    }



-- CONFIG


{-| Create an initial configuration for a `InfoTag` component.
-}
init : InfoTag
init =
    InfoTag
        { variant = LocalTrain
        , size = Sm
        , title = ""
        , children = Nothing
        }


{-| Set the variant
-}
withVariant : Variant -> InfoTag -> InfoTag
withVariant variant (InfoTag options) =
    InfoTag { options | variant = variant }


{-| Set the size
-}
withSize : Size -> InfoTag -> InfoTag
withSize size (InfoTag options) =
    InfoTag { options | size = size }


{-| Set the text to be displayed
-}
withTitle : String -> InfoTag -> InfoTag
withTitle title (InfoTag options) =
    InfoTag { options | title = title }


{-| Set the children to be displayed
-}
withChildren : Maybe String -> InfoTag -> InfoTag
withChildren children (InfoTag options) =
    InfoTag { options | children = children }



-- DISPLAY


{-| Convert configuration to HTML
-}
toHtml : InfoTag -> Html a
toHtml (InfoTag options) =
    let
        lineTagIcon =
            LineTagIcon.init
                |> LineTagIcon.withVariant options.variant
                |> LineTagIcon.withSize options.size
                |> LineTagIcon.withAdditionalStyle
                    (Css.batch
                        [ Css.borderRadius <| Css.px <| tagRadius options.size
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
            ]
        ]
        ([ lineTagIcon ] ++ lineTagText)


tagRadius : Size -> Float
tagRadius size =
    case size of
        Sm ->
            9

        Md ->
            12

        Lg ->
            12


marginRight : Size -> Float
marginRight size =
    case size of
        Sm ->
            1

        Md ->
            1.5

        Lg ->
            2
