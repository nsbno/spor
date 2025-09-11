import { Flex, Grid, GridItem, useDisclosure } from "@vygruppen/spor-react";

import { BlockHeading } from "~/features/portable-text/components/BlockHeading";
import { FileItem } from "~/features/portable-text/components/FileItem";
import { ShowMoreButton } from "~/features/portable-text/components/ShowMoreButton";

type FileListSerializerProps = {
  value: {
    title: string;
    description?: string;
    files: {
      title: string;
      url: string;
      size: number;
      format: string;
      _id: string;
    }[];
  };
};

type FileItemType = {
  title: string;
  url: string;
  size: number;
  format: string;
  _id: string;
};

export const FileListSerializer = ({ value }: FileListSerializerProps) => {
  const isExpandable = value.files?.length > 6;
  const { open, onToggle } = useDisclosure();
  const filesToShow =
    open || !isExpandable ? value.files : value.files?.slice(0, 4);
  return (
    <Grid
      templateColumns={{
        base: "repeat(3,1fr)",
        sm: "repeat(6,1fr)",
        lg: "repeat(12,1fr)",
      }}
      width="100%"
      gridColumnStart={{ base: 1, lg: 3 }}
      gridColumnEnd={{ base: 7, lg: 11 }}
      data-testid="file-list"
    >
      <GridItem colStart={{ base: 1, lg: 3 }} colSpan={{ base: 6, lg: 8 }}>
        <BlockHeading heading={value.title} subheading={value.description} />
      </GridItem>
      <GridItem colStart={{ base: 1, lg: 3 }} colSpan={{ base: 6, lg: 8 }}>
        <Flex direction="column" gap={2}>
          {filesToShow.map((file: FileItemType) => (
            <FileItem
              key={file._id}
              title={file.title}
              fileSize={file.size}
              fileType={file.format}
              href={file.url}
            />
          ))}
          {isExpandable && <ShowMoreButton isOpen={open} onToggle={onToggle} />}
        </Flex>
      </GridItem>
    </Grid>
  );
};
