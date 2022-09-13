module Spor.Common.Types exposing (Component(..), Size(..), Variant(..))


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


type Component
    = TravelTag
    | InfoTag
