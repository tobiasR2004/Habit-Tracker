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
            <div>
                <CalendarPage />
            </div>        
        <button className='border-1 mt-10 text-white font-bold py-2 px-10 rounded hover:bg-[#ffffff2e] hover:scale-110 origin-bottom-left transition-all duration-150' onClick={handleMenu}> Volver </button>
        </section>
    );
}