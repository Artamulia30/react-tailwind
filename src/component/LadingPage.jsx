import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
return (
    <>
    <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-center font-bold text-black text-3xl md:text-5xl uppercase mb-10 drop-shadow-lg">
        SMK Binusa
        </h1>
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxkpnviMakfhLP_e90cl_5F4ISDsjbdF0YA&s"
        alt="Logo SMK Binusa"
        />
    </div>

    <div className="flex justify-center mt-10">
        <div className="bg-blue-600 rounded-full p-4 md:p-6 shadow-xl w-full max-w-xs">
        <h2 className="text-center text-white font-extrabold text-xl md:text-2xl mb-4">
            Pendaftaran SMK Binusa
        </h2>
        <Link to="/p">
            <button className="bg-white text-blue-600 font-bold px-6 py-2 rounded-full shadow hover:bg-gray-100 w-full">
            Masuk & Daftar Sekarang
            </button>
        </Link>
        </div>
    </div>
    </>

    
);
}

export default LandingPage;
