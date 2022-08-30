module Spor.LineTagText exposing (..)

{-| A component for displaying line tag text


## Config

@docs init, withVariant, withSize


## Display

@docs toHtml

-}

import Css exposing (Color, Style)
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attributes
import Spor.Common.Types exposing (Size(..), Variant(..))
import Spor.Icon.Transportation as Transportation
import Spor.Text as Text
import Spor.Token.Color.Alias as Alias
import Spor.Token.Color.Linjetag as Linjetag
import Spor.Token.Size.Spacing as Spacing
import Svg exposing (Svg)


{-| A component for displaying line tag text
-}
type LineTagText
    = LineTagText Options


type alias Options =
    { title : String
    , children : Maybe String
    }


{-| Create an initial configuration for a `LineTagText` component.
-}
init : LineTagText
init =
    LineTagText
        { title = ""
        , children = Nothing
        }


{-| Set the variant
-}
withVariant : String -> LineTagText -> LineTagText
withVariant title (LineTagText options) =
    LineTagText { options | title = title }


{-| Set the size
-}
withSize : Maybe String -> LineTagText -> LineTagText
withSize children (LineTagText options) =
    LineTagText { options | children = children }



-- DISPLAY


{-| Convert configuration to HTML
-}
toHtml : LineTagText -> Html a
toHtml (LineTagText options) =
    let
        children =
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
            , Css.lineHeight <| Spacing.toCss Spacing.sm
            ]
        ]
        ([ Html.span
            [ Attributes.css
                [ Css.color <| Alias.toCss Alias.darkGrey
                , Css.fontWeight Css.bold
                ]
            ]
            [ Text.init
                |> Text.withString options.title
                |> Text.toHtml
            ]
         ]
            ++ children
        )
