import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

function TextEditor() {

    const editorRef = useRef()
    return (
        <div className='h200'>
            <Editor onInit={(evt,editor)=>editorRef.current=editor} init={{height:200}} />
        </div>
    )
}

export default TextEditor