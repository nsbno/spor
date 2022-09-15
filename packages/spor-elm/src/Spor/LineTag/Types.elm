module Spor.LineTag.Types exposing (Size(..), Variant(..))


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
    | Walk WithBorder


type alias WithBorder =
    Bool


type Size
    = Sm
    | Md
    | Lg
