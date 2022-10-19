import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

function TextEditor() {
    const editorRef = useRef()
    return (
        <div>
            <Editor onInit={(evt,editor)=>editorRef.current=editor} />
        </div>
    )
}

export default TextEditor