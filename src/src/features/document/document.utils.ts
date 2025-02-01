import { Layouts } from "react-grid-layout";
import { LayoutSize } from "@shared/types";

export const setLayoutEditMode = (
  layouts: Layouts,
  isEditable: boolean,
): Layouts => {
  const updatedLayouts: Layouts = { ...layouts };

  Object.keys(updatedLayouts).forEach((key) => {
    updatedLayouts[key as LayoutSize] = updatedLayouts[key as LayoutSize].map(
      (layout) => ({
        ...layout,
        static: !isEditable,
      }),
    );
  });

  return updatedLayouts;
};
