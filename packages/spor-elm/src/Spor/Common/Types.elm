module Spor.Common.Types exposing (Size(..), Variant(..))


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


type Size
    = Sm
    | Md
    | Lg
