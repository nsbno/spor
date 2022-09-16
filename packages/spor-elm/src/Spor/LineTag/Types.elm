module Spor.LineTag.Types exposing (Variant(..), Size(..))

{-| The `Variant` type is used for configuring the variant of the line tag component (LocalTrain is default).
The size is used to configure the size of the line tag (Md is default).

@docs Variant, Size

-}


{-| -}
type Variant
    = LocalTrain
    | RegionTrain
    | RegionExpressTrain
    | LongDistanceTrain
    | AirportExpressTrain
    | VyBus
    | LocalBus
    | Ferry
    | Subway
    | Tram
    | AlternativeTransport
    | Walk


{-| -}
type Size
    = Sm
    | Md
    | Lg
