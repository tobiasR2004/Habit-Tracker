import Login from './Login';

export default function InitComponent() {

    return(
    <section className="flex w-full min-h-98vh">
        <div className='mb-7 object-top-left mt-50 ml-32 hover:scale-110 origin-top-right transition-all duration-150 cursor-default'>
            <h1 className='text-gray-200 font-kanit-bold text-7xl'>Habit Tracker</h1>
            <p className='text-gray-400 font-kanit-medium text-bold w-xl mt-2'> Podras definir que habitos deseas tener, realizar un seguimiento de los mismos y ademas ver tu puntuacion semanal, mensual y anual</p>
        </div>
        <div className='flex mt-30 justify-center items-center flex-1 h-full'>
            <Login />
        </div>
    </section>
  )
}