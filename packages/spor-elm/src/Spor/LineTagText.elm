module Spor.LineTagText exposing (..)

{-| A component for displaying line tag text


## Config

@docs init, withTitle, withText


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
    , description : Maybe String
    }


{-| Create an initial configuration for a `LineTagText` component.
-}
init : LineTagText
init =
    LineTagText
        { title = ""
        , description = Nothing
        }


{-| Set the title to be displayed
-}
withTitle : String -> LineTagText -> LineTagText
withTitle title (LineTagText options) =
    LineTagText { options | title = title }


{-| Set the text to be displayed
-}
withDescription : Maybe String -> LineTagText -> LineTagText
withDescription description (LineTagText options) =
    LineTagText { options | description = description }



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
                [ Css.color <| toCss Alias.darkGrey
                , Css.fontWeight Css.bold
                ]
            ]
            [ Text.init
                |> Text.withText options.title
                |> Text.withTextStyle TextStyle.ExtraSmall
                |> Text.withAdditionalStyle (Css.batch [ Css.margin Css.zero ])
                |> Text.toHtml
            ]
            :: textContent options


textContent : Options -> List (Html a)
textContent options =
    options.description
        |> Maybe.map
            (\item ->
                [ Html.span
                    [ Attributes.css
                        [ Css.color <| toCss Alias.darkGrey
                        , Css.marginLeft <| Css.px 3
                        ]
                    ]
                    [ Text.init
                        |> Text.withText item
                        |> Text.withTextStyle TextStyle.ExtraSmall
                        |> Text.withAdditionalStyle (Css.batch [ Css.margin Css.zero ])
                        |> Text.toHtml
                    ]
                ]
            )
        |> Maybe.withDefault []
