module Spor.Token.Color exposing (Color, toCss)

import Css
import Spor.Token.Internal.Types as Types


type alias Color =
    Types.Color


toCss : Color -> Css.Color
toCss (Types.Color value) =
    value
