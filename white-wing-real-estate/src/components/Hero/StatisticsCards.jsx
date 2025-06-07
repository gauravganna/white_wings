import React from 'react';

const StatisticsCards = () => {
  const statistics = [
    {
      category: 'Commercial',
      value: '6,40,000 SQ.FT'
    },
    {
      category: 'Residential', 
      value: '1,334,000 SQ.FT'
    },
    {
      category: 'Land Development',
      value: '14,00,000 SQ.FT'
    }
  ];

  return (
    <div className="hidden lg:flex gap-4 mb-6 z-15">
      {statistics.map((stat, index) => (
        <div 
          key={index}
          className="
            flex items-center 
            bg-[#EBF4FE] 
            rounded-[15px] 
            px-0 pr-[8px] 
            gap-[6.5px]
            h-auto
          "
        >
          {/* Category Badge */}
          <div className="
            bg-[#1C5693] 
            text-white 
            px-4 py-[7px] 
            rounded-[12px]
            text-[13.44px] 
            font-medium 
            leading-[1.27] 
            tracking-[-0.0045em]
            whitespace-nowrap
          ">
            {stat.category}
          </div>
          
          {/* Value Text */}
          <div className="
            text-[#3493F2] 
            text-[13.44px] 
            font-medium 
            leading-[1.27] 
            tracking-[-0.0045em]
            whitespace-nowrap
          ">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards; 