import { Button, ButtonGroup, IconButton, Stack, Tooltip } from "@features/ui";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import { useDocumentTableToolbar } from "@features/documentTableToolbar/documentTableToolbar.hooks.ts";

export const DocumentTableToolbar = () => {
  const { isPending, onCreateDocumentClick } = useDocumentTableToolbar();
  return (
    <Stack direction="row-reverse">
      <ButtonGroup size="small">
        <Button
          buttonText="New Document"
          disabled={isPending}
          onClick={() => onCreateDocumentClick()}
        />
        <IconButton
          size="small"
          sx={(theme) => ({
            borderLeft: `1px solid ${theme.palette.secondary.contrastText}`,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.secondary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
            },
            "&.Mui-disabled": {
              backgroundColor: theme.palette.action.disabled,
              color: theme.palette.primary.contrastText,
            },

            "&.MuiButton-icon": {
              alignItems: "center",
              pl: 2,
            },
          })}
          disabled={isPending}
        >
          <ArrowDropDownIcon />
        </IconButton>
      </ButtonGroup>
      <Tooltip title="Edit documents">
        <IconButton>
          <EditIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};
