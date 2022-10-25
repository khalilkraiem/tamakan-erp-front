import React, { useState } from 'react'
import data from '../../../constants/foldersData'

import { FaFolder } from 'react-icons/fa'
import {BsFillFileEarmarkFill} from 'react-icons/bs'


function FoldersList({ setViewFolderIsOpen }) {
  const [selectedFolder, setSelectedFolder] = useState(data)

  return (
    <div className='bgLightGray pad30 h500 '>
      {selectedFolder.filter((elem, i) => elem.type === 'folder').length < 1 && selectedFolder.filter((elem, i) => elem.type === 'file').length < 1 &&
        <div>
          <p>Folder is empty</p>
        </div>
      }
     {selectedFolder.filter((elem, i) => elem.type === 'folder').length>0 &&
        <div>
          <div>
            <p>Folder</p>
          </div>
          <div className='fzm row wrap'>

            {selectedFolder.map((elem, i) => (
              <div key={i} className={` row line borderGray h40 mar20 w200 br10 pointer`} onClick={() => {
                elem.children ? setSelectedFolder(elem.children) : setSelectedFolder([])
              }}>
                <div className='cCenter marl20 marr20 '>
                  <FaFolder color='gray' size={30} />
                </div>
                <div className='cCenter '>
                  <p>{elem.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>}
      
     {selectedFolder.filter((elem, i) => elem.type === 'file').length>0 &&
        <div>
          <div className='mar20'>
            <p>Files</p>
          </div>
          <div className='fzm row wrap'>

            {selectedFolder.map((elem, i) => (
              <div key={i} className={` row line borderGray h40 mar20 w200 br10 pointer`} onClick={() => {
                elem.children ? setSelectedFolder(elem.children) : setSelectedFolder([])
              }}>
                <div className='cCenter marl20 marr20 '>
                  <BsFillFileEarmarkFill color='gray' size={30} />
                </div>
                <div className='cCenter '>
                  <p>{elem.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>}


    </div>
  )
}

export default FoldersList