module Spor.LineTag.LineText exposing
    ( LineText
    , init, withTitle, withDescription
    , toHtml
    )

{-| A component for displaying line text

@docs LineText


## Config

@docs init, withTitle, withDescription


## Display

@docs toHtml

-}

import Css
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attributes
import Spor.Internal.TextStyle as TextStyle
import Spor.TextStyle as TextStyle exposing (TextStyle(..))
import Spor.Token.Color.Alias as Alias


{-| A component for displaying line text
-}
type LineText
    = LineText Options


type alias Options =
    { title : String
    , description : Maybe String
    }


{-| Create an initial configuration for a `LineText` component.
-}
init : LineText
init =
    LineText
        { title = ""
        , description = Nothing
        }


{-| Set the title to be displayed
-}
withTitle : String -> LineText -> LineText
withTitle title (LineText options) =
    LineText { options | title = title }


{-| Set the text to be displayed
-}
withDescription : Maybe String -> LineText -> LineText
withDescription description_ (LineText options) =
    LineText { options | description = description_ }



-- DISPLAY


{-| Convert configuration to HTML
-}
toHtml : LineText -> Html a
toHtml (LineText options) =
    Html.span
        [ Attributes.css
            [ Css.displayFlex
            , Css.flexDirection Css.row
            , Css.alignItems Css.center
            ]
        ]
        [ Html.span
            [ Attributes.css <|
                [ Css.color <| Alias.toCss Alias.darkGrey
                , Css.fontWeight Css.bold
                ]
                    ++ TextStyle.toCss TextStyle.ExtraSmall
            ]
            [ Html.text options.title ]
        , description options
        ]


description : Options -> Html a
description options =
    options.description
        |> Maybe.map
            (\item ->
                Html.span
                    [ Attributes.css <|
                        [ Css.color <| Alias.toCss Alias.darkGrey
                        , Css.marginLeft <| Css.px 3
                        ]
                            ++ TextStyle.toCss TextStyle.ExtraSmall
                    ]
                    [ Html.text item ]
            )
        |> Maybe.withDefault (Html.text "")
