import React from 'react';
import styled from 'styled-components';

const Logo = () => {
    return (
        <>
            <div className="items-center justify-center w-full p-8 flex flex-col">
                <div class="bg-slate-700 items-center justify-center w-full shadow-md p-5 h-auto rounded-lg blur-3 bg-opacity-5 flex flex-col col-span-12">
                    <h4 className="w-48 border-t-4 border-solid border-red-500 h-20">
                    </h4>
                    <img src="https://github.com/HieysonS/tprojetcsimgs/blob/main/logolagartostore.png?raw=true" alt="Logo" />
                    <a 
                        href='/shop'
                        className="hover:text-gray-300 bg-[#ffd814] text-black hover:bg-black w-56 p-4 text-2xl font-bold font-Barlow text-center"
                    >Go Shop</a>
                </div>
            </div>
        </>
    );
}

export default Logo;