module Spor.LineTag.InfoTag exposing
    ( InfoTag
    , init, withVariant, withSize, withTitle, withDescription, withColor
    , toHtml
    )

{-| A component for displaying info tags

@docs InfoTag


## Config

@docs init, withVariant, withSize, withTitle, withDescription, withColor


## Display

@docs toHtml

-}

import Css exposing (Color)
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attributes
import Spor.LineTag.LineIcon as LineIcon
import Spor.LineTag.LineText as LineText
import Spor.LineTag.Types exposing (Size(..), Variant(..))
import Spor.Token.Size.Spacing as Spacing


{-| A component for displaying info tags
-}
type InfoTag
    = InfoTag Options


type alias Options =
    { variant : Variant
    , size : Size
    , title : String
    , description : Maybe String
    , color : Maybe Color
    }



-- CONFIG


{-| Create an initial configuration for a `InfoTag` component.
-}
init : InfoTag
init =
    InfoTag
        { variant = LocalTrain
        , size = Md
        , title = ""
        , description = Nothing
        , color = Nothing
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


{-| Set the title to be displayed
-}
withTitle : String -> InfoTag -> InfoTag
withTitle title (InfoTag options) =
    InfoTag { options | title = title }


{-| Set the description to be displayed
-}
withDescription : Maybe String -> InfoTag -> InfoTag
withDescription description (InfoTag options) =
    InfoTag { options | description = description }


{-| Set the color
-}
withColor : Maybe Color -> InfoTag -> InfoTag
withColor color (InfoTag options) =
    InfoTag { options | color = color }



-- DISPLAY


{-| Convert configuration to HTML
-}
toHtml : InfoTag -> Html a
toHtml (InfoTag options) =
    Html.div
        [ Attributes.css
            [ Css.displayFlex
            , Css.lineHeight Css.zero
            , Css.flexDirection Css.row
            , Css.justifyContent Css.center
            , Css.alignItems Css.center
            ]
        ]
        [ lineIcon options, lineText options ]


lineIcon : Options -> Html a
lineIcon options =
    LineIcon.init
        |> LineIcon.withVariant options.variant
        |> LineIcon.withSize options.size
        |> LineIcon.withAdditionalStyle
            (Css.batch
                [ Css.borderRadius <| Css.px <| iconRadius options.size
                , Css.marginRight <| Css.px <| rightMargin options.size
                , if options.variant == Walk then
                    Css.padding <| Css.px 4

                  else
                    Css.padding <| Spacing.toCss Spacing.i2xs
                ]
            )
        |> LineIcon.withColor options.color
        |> LineIcon.toHtml


lineText : Options -> Html a
lineText options =
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
            12
