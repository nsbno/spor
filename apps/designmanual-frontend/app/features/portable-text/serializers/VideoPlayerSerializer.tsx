import {
  ArbitraryTypedObject,
  PortableTextBlock,
  PortableTextMarkDefinition,
  PortableTextSpan,
} from "@portabletext/types";

import { type SanityImage } from "~/features/cms/sanity/query";
import { VideoPlayer } from "~/features/portable-text/components/VideoPlayer";

export type VideoPlayerValue = {
  title: string;
  isFullWidth: boolean;
  isMaxHeight: boolean;
  isDarkMedia: boolean;
  video?: Video;
  coverImage?: SanityImage;
  credits?: string;
  transcript?:
    | PortableTextBlock<
        PortableTextMarkDefinition,
        ArbitraryTypedObject | PortableTextSpan,
        string,
        string
      >[]
    | undefined;
  caption?: string;
};

export type Video = {
  assetId: string;
  playbackId: string;
  status: string;
  uploadId: string;
  _createdAt: Date;
  _id: string;
  _type: string;
  _updatedAt: Date;
  data: VideoDataType;
};

export type VideoDataType = {
  aspect_ratio: string;
  created_at: string;
  duration: number;
  encoding_tier: string;
  id: string;
  ingest_type: string;
  master_access: string;
  max_resolution_tier: string;
  max_stored_frame_rate: number;
  max_stored_resolution: string;
  mp4_support: string;
  non_standard_input_reasons: NonStandardInputReasons;
  passthrough: string;
  playback_ids: PlaybackId[];
  progress: Progress;
  resolution_tier: string;
  status: string;
  tracks: Track[];
  upload_id: string;
  video_quality: string;
};

export interface NonStandardInputReasons {
  video_resolution: string;
}

export interface PlaybackId {
  id: string;
  policy: string;
}

export interface Progress {
  progress: number;
  state: string;
}

export interface Track {
  duration: number;
  id: string;
  max_frame_rate: number;
  max_height: number;
  max_width: number;
  type: string;
}

export function VideoPlayerSerializer({ value }: { value: VideoPlayerValue }) {
  return <VideoPlayer value={value} />;
}
