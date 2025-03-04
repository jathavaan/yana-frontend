import { Layouts } from "react-grid-layout";
import { LayoutSize, TileLayout } from "@shared/types";

export const createReactGridLayouts = (
  tileLayout: Record<LayoutSize, TileLayout[]>,
): Layouts => {
  const layouts: Layouts = {
    lg: tileLayout["lg"].map((tile) => ({
      i: tile.tileId,
      x: tile.xPosition,
      y: tile.yPosition,
      h: tile.height,
      w: tile.width,
    })),
    md: tileLayout["md"].map((tile) => ({
      i: tile.tileId,
      x: tile.xPosition,
      y: tile.yPosition,
      h: tile.height,
      w: tile.width,
    })),
    sm: tileLayout["sm"].map((tile) => ({
      i: tile.tileId,
      x: tile.xPosition,
      y: tile.yPosition,
      h: tile.height,
      w: tile.width,
    })),
    xs: tileLayout["xs"].map((tile) => ({
      i: tile.tileId,
      x: tile.xPosition,
      y: tile.yPosition,
      h: tile.height,
      w: tile.width,
    })),
    xxs: tileLayout["xxs"].map((tile) => ({
      i: tile.tileId,
      x: tile.xPosition,
      y: tile.yPosition,
      h: tile.height,
      w: tile.width,
    })),
  };

  return setLayoutEditMode(layouts, false);
};

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
