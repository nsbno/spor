import { DownloadOutline24Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  Button,
  createTexts,
  Flex,
  Image,
  StaticCard,
  Text,
  useTranslation,
} from "@vygruppen/spor-react";

type FileItemProps = {
  title: string;
  fileSize?: number;
  fileType?: string;
  href: string;
  previewUrl?: string;
};
export const FileItem = ({
  previewUrl,
  title,
  fileSize,
  fileType,
  href,
}: FileItemProps) => {
  const { t } = useTranslation();
  return (
    <StaticCard colorPalette="grey" padding={3}>
      <Flex
        gap={3}
        flexDirection={["column", "row"]}
        alignItems={["flex-start", "center"]}
      >
        {previewUrl && (
          <Image src={previewUrl} alt={title} boxSize={40} borderRadius="sm" />
        )}
        <Text width="100%" flex={1}>
          {title}
        </Text>

        <Flex
          alignItems="center"
          gap={3}
          justifyContent={["space-between", "flex-end", null, null]}
          width={["100%", "unset", null, null]}
        >
          <Text>
            {fileType?.replace(".", "")?.toUpperCase()}{" "}
            {fileSize && fileSize > 0 && formatBytes(fileSize)}
          </Text>
          <Box>
            <Button
              flex={1.5}
              leftIcon={<DownloadOutline24Icon />}
              variant="tertiary"
              size="sm"
              asChild
            >
              <a target="_blank" href={href} rel="noreferrer">
                {t(texts.download)}
              </a>
            </Button>
          </Box>
        </Flex>
      </Flex>
    </StaticCard>
  );
};

const texts = createTexts({
  download: {
    nb: "Last ned",
    nn: "Last ned",
    en: "Download",
    sv: "Ladda ned",
  },
});

/** Utility that turns a number of bytes into a human readable string */
function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const decimals = 1;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return (
    Number.parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) +
    " " +
    sizes[i]
  );
}
