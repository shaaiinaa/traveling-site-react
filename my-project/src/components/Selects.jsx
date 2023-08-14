import React from "react";
import bb from "../assets/bb.jpg";
import bs from "../assets/bs.jpg";
import mk from "../assets/mk.jpg";
import nn from "../assets/nn.jpg";
import vv from "../assets/vv.jpg";
import SelectsCard from "../components/SelectsCard";


const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto  gap-4 px-4 py-16 grid  sm:grid-cols-2 lg:grid-cols-3">
     <SelectsCard bg={bb} text='Bora Bora' />
     <SelectsCard bg={bs} text='Maldives'/>
     <SelectsCard bg={mk} text='Fiji'/>
     <SelectsCard bg={nn} text='Amalfi Coast'/>
     <SelectsCard bg={vv} text='Mauritius'/>
     
      
    </div>
  );
};

export default Selects
