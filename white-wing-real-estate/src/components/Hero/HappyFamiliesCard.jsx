import React from 'react';

const HappyFamiliesCard = () => {
  return (
    <div className="hidden lg:block mt-15">
      <div className="
        absolute
        left-0
        bottom-0
        w-[198px] 
        h-[87px]
        overflow-hidden
      ">
        {/* Main Banner Shape - White background with arrow */}
        <div className="
          absolute 
          inset-0
          bg-white
          flex
          items-center
        " style={{
          clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%, 0 0)'
        }}>
          {/* Content Container */}
          <div className="
            flex 
            flex-col 
            justify-center
            pl-[14px]
            h-full
          ">
            {/* 2022+ Text */}
            <div className="
              text-[#3493F2] 
              text-[25.89px] 
              font-extrabold 
              leading-[1.27] 
              tracking-[-0.027em]
            ">
              2022+
            </div>
            
            {/* HAPPY FAMILIES Text */}
            <div className="
              text-[#1C5693] 
              text-[20.35px] 
              font-extrabold 
              leading-[1.27] 
              tracking-[-0.026em]
            ">
              HAPPY FAMILIES
            </div>
          </div>
        </div>
        
        {/* Border/Shadow effect */}
        <div className="
          absolute 
          inset-0
          border-2 
          border-gray-300
        " style={{
          clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%, 0 0)'
        }}></div>
      </div>
    </div>
  );
};

export default HappyFamiliesCard; 