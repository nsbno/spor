import MuxVideo from "@mux/mux-video-react";
import {
  Box,
  ColorSpinner,
  createTexts,
  Flex,
  IconButton,
  Text,
  useTranslation,
} from "@vygruppen/spor-react";
import {
  PauseMediaControllerOutline18Icon,
  PauseMediaControllerOutline24Icon,
  PlayMediaControllerOutline18Icon,
  PlayMediaControllerOutline24Icon,
} from "@vygruppen/spor-react/icons";
import { useEffect, useRef, useState } from "react";

import { PortableText } from "~/features/portable-text/PortableText";
import { VideoPlayerValue } from "~/features/portable-text/serializers/VideoPlayerSerializer";

export function VideoPlayer({ value }: { value: VideoPlayerValue }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlay) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlay(!isPlay);
    }
  };
  console.log("VideoPlayer value:", value);
  return (
    <Flex direction="column" gap={[1, 1.5]} marginTop="4">
      <Box position="relative" height="100%" width="100%">
        <Box
          marginLeft={value.isFullWidth ? "calc(50% - 50vw)" : "0"}
          width={value.isFullWidth ? "100vw" : "100%"}
          height="100%"
          position="relative"
          className={value.isDarkMedia ? "dark" : "light"}
        >
          {isLoading && (
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex="10"
            >
              <Box width="58px">
                <ColorSpinner />
              </Box>
            </Box>
          )}
          <MuxVideo
            ref={videoRef}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: isLoading ? 0.3 : 1,
              transition: "opacity 0.3s ease",
              borderRadius: value.isFullWidth ? "0" : "1.125rem",
            }}
            playbackId={value.video?.playbackId}
            metadata={{
              video_id: value.video?._id || "",
              video_title: value.title || "",
              viewer_user_id: value.video?._id || "",
            }}
            preload="auto"
            loop
            autoPlay={false}
            muted
            playsInline
            onLoadStart={() => setIsLoading(true)}
            onCanPlay={() => setIsLoading(false)}
            onLoadedData={() => setIsLoading(false)}
            title={`${value.title}, ${t(texts.video)}`}
          />
          <Box position="absolute" bottom={4} left={4} zIndex="10">
            <IconButton
              display={["none", null, null, "flex"]}
              variant="primary"
              icon={
                isPlay ? (
                  <PauseMediaControllerOutline24Icon />
                ) : (
                  <PlayMediaControllerOutline24Icon />
                )
              }
              aria-label={
                isPlay ? t(texts.ariaLabelPause) : t(texts.ariaLabelPlay)
              }
              onClick={handlePlayPause}
            />
            <IconButton
              display={["flex", null, null, "none"]}
              variant="primary"
              icon={
                isPlay ? (
                  <PauseMediaControllerOutline18Icon />
                ) : (
                  <PlayMediaControllerOutline18Icon />
                )
              }
              aria-label={
                isPlay ? t(texts.ariaLabelPause) : t(texts.ariaLabelPlay)
              }
              onClick={handlePlayPause}
            />
          </Box>
        </Box>
      </Box>
      {value.caption && <Text>{value.caption}</Text>}
      {value.transcript && <PortableText value={value.transcript} />}
    </Flex>
  );
}

const texts = createTexts({
  ariaLabelPause: {
    nb: "Pause",
    en: "Pause",
    nn: "Pause",
    sv: "Paus",
  },
  ariaLabelPlay: {
    nb: "Spill",
    en: "Play",
    nn: "Spill",
    sv: "Spela",
  },
  video: {
    nb: "Video",
    en: "Video",
    nn: "Video",
    sv: "Video",
  },
});
