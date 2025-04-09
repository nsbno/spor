import { DialogBody, DialogContent, DialogRoot } from "@vygruppen/spor-react";
import { SearchDocsInput } from "./SearchDocsInput";

type Props = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};

export const SearchDocs = ({ onOpenChange, open }: Props) => {
  return (
    <DialogRoot
      open={open}
      onOpenChange={(d) => onOpenChange(d.open)}
      size={"lg"}
    >
      <DialogContent rounded="sm">
        <DialogBody padding="2">
          <SearchDocsInput
            onSearchSelect={() => onOpenChange(false)}
            onClose={() => onOpenChange(false)}
          />
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};
