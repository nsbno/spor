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
import Spor.LineTagText as LineTagText exposing (LineTagText)
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
    Html.div
        [ Attributes.css
            [ Css.displayFlex
            , Css.flexDirection Css.row
            , Css.justifyContent Css.center
            , Css.alignItems Css.center
            ]
        ]
        (lineTagIcon options :: lineTagText options)


lineTagIcon : Options -> Html a
lineTagIcon options =
    LineTagIcon.init
        |> LineTagIcon.withVariant options.variant
        |> LineTagIcon.withSize options.size
        |> LineTagIcon.withAdditionalStyle
            (Css.batch
                [ Css.borderRadius <| Css.px <| iconRadius options.size
                , Css.marginRight <| Css.px <| marginRight options.size
                , Css.padding <| Spacing.toCss Spacing.xs
                ]
            )
        |> LineTagIcon.toHtml


lineTagText : Options -> List (Html a)
lineTagText options =
    options.children
        |> Maybe.map
            (\item ->
                [ LineTagText.init
                    |> LineTagText.withTitle options.title
                    |> LineTagText.withChildren (Just item)
                    |> LineTagText.toHtml
                ]
            )
        |> Maybe.withDefault []


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
            9

        Md ->
            9

        Lg ->
            9
