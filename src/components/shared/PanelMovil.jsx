import React from "react";
import { BsMenuUp } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { CiBrightnessUp, CiCircleChevDown } from "react-icons/ci";
import { LuPackageSearch } from "react-icons/lu";
import { VscChromeClose } from "react-icons/vsc";
import { MdOutlineDeleteSweep } from "react-icons/md";

export const PanelMovil = ({ miMenu, miOrden, Menu, Orden }) => {
  return (
    <div>
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <FaUserPlus />
        </button>
        <button className="p-2">
          <TbCircleDashedPercentage />
        </button>
        <button onClick={miOrden} className="p-2">
          <CiBrightnessUp />
        </button>
        <button onClick={miMenu} className="text-white p-2">
          {Menu ? <VscChromeClose /> : <BsMenuUp />}
        </button>
      </nav>
      <main className="lg:pl-25 grid grid-cols-1 lg:grid-cols-8 pb-10">
        <div className="lg:col-span-6 md:p-8 p-5 bg-[#262837] lg:bg-transparent">
          <header>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Tienda Online</h1>
                <p className="text-gray-500">20 de junio del 2025</p>
              </div>
              <form action="">
                <div className="w-full relative">
                  <LuPackageSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Buscar"
                  />
                </div>
              </form>
            </div>
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-10 border-b mb-6">
              <a
                href="#"
                className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
              >
                Hot dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Cold dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Soup
              </a>
              <a href="#" className="py-2">
                Grill
              </a>
            </nav>
          </header>
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-b-lg">
              <CiCircleChevDown /> Dine in
            </button>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="img1.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned seafood nodles</p>
              <span>$2.29</span>
              <p>20 Bolws available</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="img1.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned seafood nodles</p>
              <span>$2.29</span>
              <p>20 Bolws available</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="img1.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned seafood nodles</p>
              <span>$2.29</span>
              <p>20 Bolws available</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="img1.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned seafood nodles</p>
              <span>$2.29</span>
              <p>20 Bolws available</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="img1.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned seafood nodles</p>
              <span>$2.29</span>
              <p>20 Bolws available</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="img1.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned seafood nodles</p>
              <span>$2.29</span>
              <p>20 Bolws available</p>
            </div>
          </div>
        </div>
        <div
          className={`lg:col-span-2 fixed  top-0 bg-[#1F1D2B] w-full lg:w-90 lg:right-0 h-full transition-all ${
            Orden ? "right-0" : "-right-full"
          }`}
        >
          <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
            <VscChromeClose
              onClick={miOrden}
              className="lg:hidden absolute left-5 top-5 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
            />
            <h1 className="text-2xl my-4">Orders #151473</h1>
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
                Dine In
              </button>
              <button className="text-[#ec7c6a]  py-2 px-4 rounded-xl border border-gray-500">
                Dine In
              </button>
              <button className="text-[#ec7c6a]  py-2 px-4 rounded-xl border border-gray-500">
                Dine In
              </button>
            </div>
            <div>
              <div className="grid grid-cols-7 mb-4 p-3">
                <h5 className="col-span-4">Item</h5>
                <h5 className="text-center scroll-pr-5">Qty</h5>
                <h5 className=" text-right">Price</h5>
              </div>
              <div className="h-[400px] md:h-[700px] lg:h-[500px] overflow-scroll ">
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    <div className=" col-span-4 flex items-center gap-3">
                      <img
                        src="img1.png"
                        alt=""
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <h5 className="text-sm">Spaicy seaso...</h5>
                        <p className="text-xs">$2.29</p>
                      </div>
                    </div>
                    <div>
                      <span>2</span>
                    </div>
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 items-center md:gap-13">
                    <form action="" className="col-span-5 md:col-span-4">
                      <input
                        type="text"
                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none w-full"
                        placeholder="Order note"
                      />
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <MdOutlineDeleteSweep className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    <div className=" col-span-4 flex items-center gap-3">
                      <img
                        src="img1.png"
                        alt=""
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <h5 className="text-sm">Spaicy seaso...</h5>
                        <p className="text-xs">$2.29</p>
                      </div>
                    </div>
                    <div>
                      <span>2</span>
                    </div>
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 items-center md:gap-13">
                    <form action="" className="col-span-5 md:col-span-4">
                      <input
                        type="text"
                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none w-full"
                        placeholder="Order note"
                      />
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <MdOutlineDeleteSweep className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    <div className=" col-span-4 flex items-center gap-3">
                      <img
                        src="img1.png"
                        alt=""
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <h5 className="text-sm">Spaicy seaso...</h5>
                        <p className="text-xs">$2.29</p>
                      </div>
                    </div>
                    <div>
                      <span>2</span>
                    </div>
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 items-center md:gap-13">
                    <form action="" className="col-span-5 md:col-span-4">
                      <input
                        type="text"
                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none w-full"
                        placeholder="Order note"
                      />
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <MdOutlineDeleteSweep className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    <div className=" col-span-4 flex items-center gap-3">
                      <img
                        src="img1.png"
                        alt=""
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <h5 className="text-sm">Spaicy seaso...</h5>
                        <p className="text-xs">$2.29</p>
                      </div>
                    </div>
                    <div>
                      <span>2</span>
                    </div>
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 items-center md:gap-4">
                    <form action="" className="col-span-5 md:col-span-4">
                      <input
                        type="text"
                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none w-full"
                        placeholder="Order note"
                      />
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <MdOutlineDeleteSweep className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Discount</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Subtotal</span>
                <span>$201.03</span>
              </div>
              <div>
                <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                  Continue to payment
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
