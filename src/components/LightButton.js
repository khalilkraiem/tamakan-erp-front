import React from 'react'

function LightButton({content,fn,ws}) {
  return (
    <div className='bgLightBlue br5 blue cCenter fzs h40 w100 mar5 fzm fwb pointer' onClick={fn}><p style={{wordSpacing:ws}}>{content}</p></div>
  )
}

export default LightButton