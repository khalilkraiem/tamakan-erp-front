import React from 'react'
import userPhoto from "../../../assets/images/userPhoto.jpg";
import { TiAttachment } from 'react-icons/ti'

function ChatBox() {
    return (
        <div className='bgLightGray row'>
            <div className='br5 borderGray bgWhite w-100 h500 chatBox'>
                <div className='borderbGray h50'>
                    <div className='row Center mar10'>
                        <div className="h40 w40 br20  mar5"
                            style={{ backgroundImage: `url(${userPhoto})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}
                        ></div>
                        <p className='mar10 blue' >Riadh</p>
                    </div>
                </div>
                <div className='fzs scroll-y h400'>
                    <div className='spaceBetween'>
                        <div className='mar20'>
                            <div className='row h30 Center'>
                                <p className='w100'>Name Surname</p>
                                <p className='w100'>11:20Am,Today</p>
                            </div>
                            <div className='bgBlue cCenter white pad20'>
                                Sed di eiusmod tempor.
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='mar20'>
                            <div className='h30 Center right'>
                                <p className='w100 right'>11:20Am,Today</p>
                                <p className='w20 right'>Me</p>
                            </div>
                            <div className='bgLightBlue cCenter pad20'>
                                Sed di eiusmod tempor.
                            </div>
                        </div>
                    </div>
                    <div className='spaceBetween'>
                        <div className='maxw300 mar20'>
                            <div className='row h30  Center'>
                                <p className='w100'>Name Surname</p>
                                <p className='w100'>11:20Am,Today</p>
                            </div>
                            <div className='bgBlue cCenter white pad20'>
                                Sed di eiusmod tempor.
                            </div>
                        </div>
                    </div>
                    <div className='spaceBetween'>
                        <div className='maxw300 mar20'>
                            <div className='row h30  Center'>
                                <p className='w100'>Name Surname</p>
                                <p className='w100'>11:20Am,Today</p>
                            </div>
                            <div className='bgBlue cCenter white pad20'>
                                Sed di eiusmod tempor.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footerChatBox h50 w-100 bordertGray Center spaceBetween bgWhite'>
                    <div className='cCenter w70 h30 mar10'>
                        <TiAttachment color='gray' size={30} />
                    </div>
                    <div className='cCenter w-100 mar10 h40'>
                        <input placeholder='Say somthing...' className='sendZone w-100 h-100 borderGray br5' />
                    </div>
                    <div className='cCenter w100 mar10 bgBlue white h40 br5'>
                        <p>Send</p>
                    </div>
                </div>
            </div>
            <div className=' marl10 w400'>
                <div className='bgWhite h50 br5 spaceBetween mar10 line'>
                    <div className='row Center mar10'>
                        <div className="h40 w40 br20  mar5"
                            style={{ backgroundImage: `url(${userPhoto})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}
                        ></div>
                        <p className='mar10'>Riadh</p>
                    </div>
                    <div className='cCenter mar10'>
                        <div className='bgHardRed h20 w30 br10 cCenter'>
                            <p className='white fzs'>11</p>
                        </div>
                    </div>
                </div>
                <div className='bgWhite h50 br5 spaceBetween mar10 line'>
                    <div className='row Center mar10'>
                        <div className="h40 w40 br20  mar5"
                            style={{ backgroundImage: `url(${userPhoto})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}
                        ></div>
                        <p className='mar10'>Riadh</p>
                    </div>
                    <div className='cCenter mar10'>
                        <div className='bgHardRed h20 w30 br10 cCenter'>
                            <p className='white fzs'>11</p>
                        </div>
                    </div>
                </div>
                <div className='bgWhite h50 br5 spaceBetween mar10 line'>
                    <div className='row Center mar10'>
                        <div className="h40 w40 br20  mar5"
                            style={{ backgroundImage: `url(${userPhoto})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}
                        ></div>
                        <p className='mar10'>Riadh</p>
                    </div>
                    <div className='cCenter mar10'>
                        <div className='bgHardRed h20 w30 br10 cCenter'>
                            <p className='white fzs'>11</p>
                        </div>
                    </div>
                </div>
                <div className='bgWhite h50 br5 spaceBetween mar10 line'>
                    <div className='row Center mar10'>
                        <div className="h40 w40 br20  mar5"
                            style={{ backgroundImage: `url(${userPhoto})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}
                        ></div>
                        <p className='mar10'>Riadh</p>
                    </div>
                    <div className='cCenter mar10'>
                        <div className='bgHardRed h20 w30 br10 cCenter'>
                            <p className='white fzs'>11</p>
                        </div>
                    </div>
                </div>
                <div className='bgWhite h50 br5 spaceBetween mar10 line'>
                    <div className='row Center mar10'>
                        <div className="h40 w40 br20  mar5"
                            style={{ backgroundImage: `url(${userPhoto})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}
                        ></div>
                        <p className='mar10'>Riadh</p>
                    </div>
                    <div className='cCenter mar10'>
                        <div className='bgHardRed h20 w30 br10 cCenter'>
                            <p className='white fzs'>11</p>
                        </div>
                    </div>
                </div>
                <div className='bgWhite h50 br5 spaceBetween mar10 line'>
                    <div className='row Center mar10'>
                        <div className="h40 w40 br20  mar5"
                            style={{ backgroundImage: `url(${userPhoto})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}
                        ></div>
                        <p className='mar10'>Riadh</p>
                    </div>
                    <div className='cCenter mar10'>
                        <div className='bgHardRed h20 w30 br10 cCenter'>
                            <p className='white fzs'>11</p>
                        </div>
                    </div>
                </div>
                <div className='bgWhite h50 br5 spaceBetween mar10 line'>
                    <div className='row Center mar10'>
                        <div className="h40 w40 br20  mar5"
                            style={{ backgroundImage: `url(${userPhoto})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}
                        ></div>
                        <p className='mar10'>Riadh</p>
                    </div>
                    <div className='cCenter mar10'>
                        <div className='bgHardRed h20 w30 br10 cCenter'>
                            <p className='white fzs'>11</p>
                        </div>
                    </div>
                </div>
                <div className='bgWhite h50 br5 spaceBetween mar10 line'>
                    <div className='row Center mar10'>
                        <div className="h40 w40 br20  mar5"
                            style={{ backgroundImage: `url(${userPhoto})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}
                        ></div>
                        <p className='mar10'>Riadh</p>
                    </div>
                    <div className='cCenter mar10'>
                        <div className='bgHardRed h20 w30 br10 cCenter'>
                            <p className='white fzs'>11</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBox