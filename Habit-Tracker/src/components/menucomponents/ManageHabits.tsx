import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarPage }  from '../Calendar';


export default function ManageHabits() {
        const navigate = useNavigate();
        const handleMenu = () => {
            navigate('/Menu');
        }
    return (
        <section className="object-top-left">
             <button className='border-1 mb-10 text-white font-bold py-2 px-10 rounded hover:bg-[#ffffff2e] hover:scale-110 origin-bottom-left transition-all duration-150' onClick={handleMenu}> Volver </button>
            <div className="bg-[#6060608e] rounded-2xl max-h-[95vh] overflow-auto">
                <CalendarPage />
            </div>        
        </section>
    );
}