import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import Header from "@editorjs/header";

export default function Editor() {
  const ejInstance = useRef();
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      onChange: async () => {
        let content = await editor.saver.save();
        console.log(content);
      },
      tools: {
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "http://localhost:3030/upload_image_editorjs",
              byUrl: "http://localhost:3030/upload_image_editorjs",
            },

            field: "image",
            types: "image/*",
          },
        },
        header: Header,
      },
    });
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }
    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return (
    <>
      <div id="editorjs"></div>
    </>
  );
}
