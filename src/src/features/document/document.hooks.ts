import { useDispatch, useSelector } from "react-redux";
import {
  selectIsEditable,
  selectLayouts,
  setLayoutSize,
  setTileLayout,
  toggleIsEditable,
} from "@features/document/document.slice.ts";
import { AppDispatch } from "@shared/stores";
import { useDocumentQuery } from "@features/document/document.query.ts";
import { useEffect } from "react";
import { LayoutSize, Tile } from "@shared/types";
import { Layouts } from "react-grid-layout";
import { setLayoutEditMode } from "@features/document/document.utils.ts";

export const useDocument = (documentId: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const isDocumentEditable = useSelector(selectIsEditable);
  const layouts = useSelector(selectLayouts);

  const { data: document, isLoading, isError } = useDocumentQuery(documentId);

  const onEditDocumentClick = () => {
    dispatch(toggleIsEditable());
  };

  useEffect(() => {
    if (document) {
      dispatch(
        setTileLayout(convertDocumentToLayout(document.tileLayout.layouts)),
      );
    }
  }, [dispatch, document]);

  return {
    document,
    layouts,
    isDocumentEditable,
    isLoading,
    isError,
    onEditDocumentClick,
  };
};

export const useDocumentGrid = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLayoutChange = (layout: Layouts) => {
    dispatch(setTileLayout(layout));
  };

  const handleBreakPointChange = (breakPoint: LayoutSize) => {
    dispatch(setLayoutSize(breakPoint));
  };

  return {
    handleLayoutChange,
    handleBreakPointChange,
  };
};

const convertDocumentToLayout = (
  tileLayout: Record<LayoutSize, Tile[]>,
): Layouts => {
  const layouts: Layouts = {
    lg: tileLayout["lg"].map((tile) => ({
      i: tile.id,
      x: tile.xPosition,
      y: tile.yPosition,
      h: tile.height,
      w: tile.width,
    })),
    md: tileLayout["md"].map((tile) => ({
      i: tile.id,
      x: tile.xPosition,
      y: tile.yPosition,
      h: tile.height,
      w: tile.width,
    })),
    sm: tileLayout["sm"].map((tile) => ({
      i: tile.id,
      x: tile.xPosition,
      y: tile.yPosition,
      h: tile.height,
      w: tile.width,
    })),
    xs: tileLayout["xs"].map((tile) => ({
      i: tile.id,
      x: tile.xPosition,
      y: tile.yPosition,
      h: tile.height,
      w: tile.width,
    })),
    xxs: tileLayout["xxs"].map((tile) => ({
      i: tile.id,
      x: tile.xPosition,
      y: tile.yPosition,
      h: tile.height,
      w: tile.width,
    })),
  };

  return setLayoutEditMode(layouts, false);
};
