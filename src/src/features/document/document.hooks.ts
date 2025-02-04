import { useDispatch, useSelector } from "react-redux";
import {
  addTile,
  selectContent,
  selectIsEditable,
  selectLayouts,
  setIsEditable,
  setLayoutSize,
  setTileLayout,
  setTileLayoutOnLayoutChange,
  toggleIsEditable,
} from "@features/document/document.slice.ts";
import { AppDispatch } from "@shared/stores";
import { useDocumentQuery } from "@features/document/document.query.ts";
import { useEffect } from "react";
import { EditorType, LayoutSize, TileContent } from "@shared/types";
import { Layout, Layouts } from "react-grid-layout";

export const useDocument = (documentId: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const isDocumentEditable = useSelector(selectIsEditable);
  const layouts = useSelector(selectLayouts);
  const content = useSelector(selectContent);

  const { data: document, isLoading, isError } = useDocumentQuery(documentId);

  const onEditDocumentClick = () => {
    dispatch(toggleIsEditable());
  };

  useEffect(() => {
    if (document) {
      const layouts = document.tileLayout.layouts;
      const content = document.tileLayout.content;
      dispatch(setTileLayout({ layouts, content }));
    }
  }, [dispatch, document]);

  return {
    content,
    layouts,
    isDocumentEditable,
    isLoading,
    isError,
    onEditDocumentClick,
  };
};

export const useDocumentGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isDocumentEditable = useSelector(selectIsEditable);

  const handleLayoutChange = (layouts: Layouts) => {
    dispatch(setTileLayoutOnLayoutChange(layouts));
  };

  const handleBreakPointChange = (breakPoint: LayoutSize) => {
    dispatch(setLayoutSize(breakPoint));
  };

  const onNewTileClick = (type: EditorType) => {
    dispatch(setIsEditable(true));
    const tile: Layout = {
      i: crypto.randomUUID().toString(),
      x: 0,
      y: Infinity,
      w: 2,
      h: 2,
      static: !isDocumentEditable,
    };

    const content: TileContent = {
      editorType: type,
    };

    dispatch(addTile({ tile, content }));
  };

  return {
    handleLayoutChange,
    handleBreakPointChange,
    onNewTileClick,
  };
};
