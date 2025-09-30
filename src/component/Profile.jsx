import React from "react";
 import { Profiler } from "react";
import Tata from "../../public/kamunanya.jpg"

function Profil() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Profil Pengguna</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
        
        <img
          src={Tata}
          alt=""
          className="w-32 h-32 rounded-full border ml-50 mr-50"
        />

        
        <div>
          <p className="text-2xl font-bold">Tata selebew</p>
          <p className="text-gray-600">Tiktok:Tatamrc7</p>
          <p className="text-gray-600">Ig: Tata jawa</p>
          <p className="text-gray-600">Jalan kuda,ngaliyan</p>
        </div>
      </div>

      
      <div className="mt-6 bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Tentang Saya</h3>
        <p className="text-gray-700 leading-relaxed">
          Saya adalah Baca selengkapnya.

        </p>
      </div>
      
    </div>
  );
}

export default Profil;