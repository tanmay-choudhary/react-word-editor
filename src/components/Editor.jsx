import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import React, { useState } from "react"

export default function Editor() {
    const  [text,setText] = useState("");
  return (
    <div>
        <h1>abc</h1>
        <CKEditor editor={ClassicEditor} data={text} />
    </div>
  )
}
