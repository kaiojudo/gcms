import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";

export default function Editor() {
  const editorRef = useRef();
  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        placeholder: "Ấn vào đây để tạo nội dung",

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
        },
      });

      editorRef.current = editor;
    }
    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
      }
    };
  }, []);
  return (
    <>
      
    </>
  );
}
