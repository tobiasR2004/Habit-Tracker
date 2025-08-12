import React from 'react';
import { CalendarPage }  from '../Calendar';
import Header from './Header';


export default function ManageHabits() {
    return (
        <section>
             <Header />
            <div className="bg-[#6060608e] rounded-2xl max-h-[95vh] overflow-auto">
                <CalendarPage />
            </div>        
        </section>
    );
}   