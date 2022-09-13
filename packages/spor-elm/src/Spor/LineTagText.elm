module Spor.LineTagText exposing (..)

{-| A component for displaying line tag text


## Config

@docs init, withTitle, withChildren


## Display

@docs toHtml

-}

import Css
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attributes
import Spor.Common.Types exposing (Size(..), Variant(..))
import Spor.Text as Text
import Spor.TextStyle as TextStyle exposing (TextStyle(..))
import Spor.Token.Color.Alias as Alias
import Spor.Token.Size.Spacing as Spacing


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


{-| Set the title
-}
withTitle : String -> LineTagText -> LineTagText
withTitle title (LineTagText options) =
    LineTagText { options | title = title }


{-| Set the children
-}
withChildren : Maybe String -> LineTagText -> LineTagText
withChildren children (LineTagText options) =
    LineTagText { options | children = children }



-- DISPLAY


{-| Convert configuration to HTML
-}
toHtml : LineTagText -> Html a
toHtml (LineTagText options) =
    Html.div
        [ Attributes.css
            [ Css.displayFlex
            , Css.flexDirection Css.row
            , Css.alignItems Css.center
            , Css.lineHeight <| Spacing.toCss Spacing.sm
            ]
        ]
    <|
        Html.span
            [ Attributes.css
                [ Css.color <| Alias.toCss Alias.darkGrey
                , Css.fontWeight Css.bold
                ]
            ]
            [ Text.init
                |> Text.withString options.title
                |> Text.withTextStyle TextStyle.ExtraSmall
                |> Text.toHtml
            ]
            :: childText options


childText : Options -> List (Html a)
childText options =
    options.children
        |> Maybe.map
            (\item ->
                [ Html.span
                    [ Attributes.css
                        [ Css.color <| Alias.toCss Alias.darkGrey
                        , Css.marginLeft <| Css.px 3
                        ]
                    ]
                    [ Text.init
                        |> Text.withString item
                        |> Text.withTextStyle TextStyle.ExtraSmall
                        |> Text.toHtml
                    ]
                ]
            )
        |> Maybe.withDefault []
