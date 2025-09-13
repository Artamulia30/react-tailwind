import React from 'react';

function LandingPage() {
return (
    <>
    <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center font-bold text-black text-3xl md:text-5xl uppercase mb-10">
        <h1 className="drop-shadow-lg">SMK Binusa</h1>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvbN_1gEgBSpctreqxt2pQHkz1L9gzTFPhQ&s" alt="" />
</div>

    <div className="flex justify-center mt-10">
        <div className="bg-[blue] rounded-full p-4 md:p-6 shadow-xl w-full max-w-xs">
        <div className="text-center text-white font-extrabold text-xl md:text-3xl">
            Pendaftaran SMK Binusa
        </div>
        </div>
</div>
    </>
);
}

export default LandingPage;
