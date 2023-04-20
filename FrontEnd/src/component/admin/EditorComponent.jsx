import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import Header from "@editorjs/header";

export default function Editor() {
  const editorRef = useRef();
  // const ejInstance = useRef();
  // const initEditor = () => {
  //   const editor = new EditorJS({
  //     holder: "editorjs",
  //     onReady: () => {
  //       ejInstance.current = editor;
  //     },
  //     autofocus: true,
  //     onChange: async () => {
  //       let content = await editor.saver.save();
  //       console.log(content);
  //     },
  //     tools: {
  //       image: {
  //         class: ImageTool,
  //         config: {
  //           endpoints: {
  //             byFile: "http://localhost:3030/upload_image_editorjs",
  //             byUrl: "http://localhost:3030/upload_image_editorjs",
  //           },

  //           field: "image",
  //           types: "image/*",
  //         },
  //       },
  //       header: Header,
  //     },
  //   });
  // };

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
      <div id="editorjs"></div>
    </>
  );
}
