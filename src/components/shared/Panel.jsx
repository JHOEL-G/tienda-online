import React from 'react'
import { RiHomeSmile2Fill } from "react-icons/ri";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { GrPieChart } from "react-icons/gr";
import { IoMailUnreadOutline, IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";


export const Panel = (props) => {

    const { Menu } = props

    return (
        <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-24 h-full flex flex-col justify-between py-1 rounded-tr-xl rounded-br-xl z-50 transition-all duration-300 ${Menu ? "left-0" : "-left-full"} lg:left-0`}>
            <div>
                <ul className='pl-4'>
                    <li>
                        <h1 className='text-2xl text-gray-100 uppercase font-bold text-center my-1 p-1'>
                            <img src="img1.png" alt="Logo" />
                        </h1>
                    </li>
                    <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
                        <a href="#" className='bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white'>
                            <RiHomeSmile2Fill className='text-2xl' />
                        </a>
                    </li>
                    <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                        <a href="#"
                            className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                            <TbCircleDashedPercentage className='text-2xl' />
                        </a>
                    </li>
                    <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                        <a href="#"
                            className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                            <GrPieChart className='text-2xl' />
                        </a>
                    </li>
                    <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                        <a href="#"
                            className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                            <IoMailUnreadOutline className='text-2xl' />
                        </a>
                    </li>
                    <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                        <a href="#"
                            className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                            <IoSettingsOutline className='text-2xl' />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='pl-4'>
                    <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                        <a href="#"
                            className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                            <IoMdLogOut className='text-2xl' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
