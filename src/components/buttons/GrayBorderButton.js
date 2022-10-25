import React from 'react'

function GrayBorderButton({fn,ws,content}) {
  return (
    <div className='bgLightGray borderBlue br5 blue cCenter fzs h30 w200 mar5 fzm pointer' onClick={fn}><p style={{wordSpacing:ws}}>{content}</p></div>
  )
}

export default GrayBorderButton