import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px]  mx-auto gap-4 lg:grid-cols-3 grid px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h1>LUXURY INCLUDED VACATION FOR TWO PEOPLE</h1>
          <p className="py-4">
            Come experience the very pinnacle of luxury Caribbean all-inclusiv
            vacations for couples atBEACHES Resorts.Our luxury beach resorts,set
            along the most gorgeous tropical settings and exquisite beaches iin
            Saint Lucia,Jamaica,Antigua,The Bahamas,Grenad,Barbados and Curacao,
            feature unlimited gourmet dining,unique bars serving premium liquors
            and wines, and every land and water sport,includung complimentary
            green fees at our golf resorts and certified scuba diving at most
            resorts.If you are planning a wedding, BEACHES is the leader in
            Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">AUTOMATED BOOKINGS</h3>
              <p className="py-1">
                ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className=" text-center border p-4">
            <p>GET AN ADDITIONAL 10% OFF</p>
            <p className="py-4">12 HOURS LEFT</p>
            <p className="bg-gray-800 text-yellow-50 p-1">BOOK NOW AND SAVE</p>
          </div>
          <form >
            <div className="flex flex-col ">
              <label>Destination</label>
              <select className="p-1 mb-2 border-2 rounded-md">
                <option>Bora Bora</option>
                <option>Maldives</option>
                <option>Fiji</option>
                <option>Amalfi Coast</option>
                <option>Mauritius</option>
              </select>
            </div>
            <div>
              <label>Check-in</label><br />
              <input className="p-1 mb-2 border-2 w-full rounded-md" type="date" />
            </div>
            <div>
              <label>Check-out</label><br />
              <input className="p-1 mb-2 border-2 w-full rounded-md" type="date" />

            </div>
            <div>
                <button className="w-full my-4">Rates & Availabilities</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
