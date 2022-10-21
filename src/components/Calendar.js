import React from 'react'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';


function Calendar() {
    'timeGridWeek'
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="timeGridDay"
                headerToolbar={{left:'prev,next,today',
                center: 'title',
                right: 'timeGridWeek,timeGridDay,dayGridMonth'}}
            />
        </>
    )

}
export default Calendar