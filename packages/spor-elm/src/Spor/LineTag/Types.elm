module Spor.LineTag.Types exposing (Variant(..), Size(..), DeviationLevel(..))

{-|

@docs Variant, Size, DeviationLevel

-}


{-| Used to configure the variant of the line tag (LocalTrain is default).
-}
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


{-| Used to configure the size of the line tag (Md is default).
-}
type Size
    = Sm
    | Md
    | Lg


{-| Used to configure what deviation (if any) exists for a line (Nothing is default).
-}
type DeviationLevel
    = Critical
    | Major
    | Minor
    | Info
