import React, { useState } from 'react'
import data from '../../../constants/foldersData'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import trash from '../../../assets/images/delete.svg'
import edit from '../../../assets/images/edit.svg'

import { FaFolder } from 'react-icons/fa'


function FoldersTable({ setViewFolderIsOpen }) {
  const [selectedFolder, setSelectedFolder] = useState(data)



  return (
    <div className='bgLightGray pad30 h500 '>
      {selectedFolder.filter((elem, i) => elem.type === 'folder').length<1&&selectedFolder.filter((elem, i) => elem.type === 'file').length<1&&
      <div>
        <p>Folder is empty</p>
      </div>
      }
      {selectedFolder.filter((elem, i) => elem.type === 'folder').length>0 &&
      <div className='fzm'>
        <div className='spaceBetween h50 gray borderbGray bgWhite '>
          <div className='row'>
            <div className='w200 Center mar20'>
              <div className='mar10'>
                <p>Folder Name</p>
              </div>

            </div>
            <div className='w200 Center'><p>User</p></div>
            <div className='w200 Center'><p>Last modified date</p></div>

          </div>
          <div className='cCenter w100 mar20'>
            <div className='mar10'><p>Action</p></div>

          </div>
        </div>
        {selectedFolder.filter((elem, i) => elem.type === 'folder').map((elem, i) => (
          <div key={i} className={`spaceBetween h50 ${i % 2 === 1 ? "bgWhite" : "bgLightGray "} line pointer`} onClick={() => {
            elem.children ? setSelectedFolder(elem.children) : setSelectedFolder([])

          }} >
            <div className='row'>
              <div className='w200 Center fzm mar20 '>
                <FaFolder color='gray' size={30} />
                <p className='mar20'>{elem.name}</p>
              </div>
              <div className='w200 Center fzm'><p>{elem.user}</p></div>
              <div className='w200 Center fzm'><p>{elem.lastModifiedDate}</p></div>

            </div>
            <div className='w100 cCenter mar20'>

              <div className='h20 w20 br5 bgLightOrange cCenter mar5 pointer' onClick={() => setViewFolderIsOpen(true)} >
                <AiOutlineInfoCircle size={20} color={'orange'} />
              </div>


              <div className='h20 w20 br5 bgLightBlue cCenter  pointer' >
                <img alt='edit' src={edit} className='' />
              </div>


              <div className='h20 w20 br5 bgLightRed cCenter mar5 pointer'  >
                <img alt='delete' src={trash} className='' />
              </div>

            </div>
          </div>
        ))}
      </div>
      }
      {selectedFolder.filter((elem, i) => elem.type === 'file').length>0 &&
        <div className='fzm mart50'>
          <div className='spaceBetween h50 gray borderbGray bgWhite '>
            <div className='row'>
              <div className='w200 Center mar20'>
                <div className='mar10'>
                  <p>Folder Name</p>
                </div>

              </div>
              <div className='w200 Center'><p>User</p></div>
              <div className='w200 Center'><p>Last modified date</p></div>

            </div>
            <div className='cCenter w100 mar20'>
              <div className='mar10'><p>Action</p></div>

            </div>
          </div>
          {selectedFolder.filter((elem, i) => elem.type === 'file').map((elem, i) => (
            <div key={i} className={`spaceBetween h50 ${i % 2 === 1 ? "bgWhite" : "bgLightGray "} line`} >
              <div className='row'>
                <div className='w200 Center fzm mar20 '>
                  <FaFolder color='gray' size={30} />
                  <p className='mar20'>{elem.name}</p>
                </div>
                <div className='w200 Center fzm'><p>{elem.user}</p></div>
                <div className='w200 Center fzm'><p>{elem.lastModifiedDate}</p></div>

              </div>
              <div className='w100 cCenter mar20'>

                <div className='h20 w20 br5 bgLightOrange cCenter mar5 pointer' onClick={() => setViewFolderIsOpen(true)} >
                  <AiOutlineInfoCircle size={20} color={'orange'} />
                </div>


                <div className='h20 w20 br5 bgLightBlue cCenter  pointer' >
                  <img alt='edit' src={edit} className='' />
                </div>


                <div className='h20 w20 br5 bgLightRed cCenter mar5 pointer'  >
                  <img alt='delete' src={trash} className='' />
                </div>

              </div>
            </div>
          ))}
        </div>}

    </div>
  )
}

export default FoldersTable