import React from "react";

const Manufacturers = () => {
  // 製造商 logo 資料
  const manufacturers = [
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66cdddcef0b8c5f12b9dc8f7_webflow-logo.svg', alt: 'Webflow' },
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66cf5ea8d3fc5413082bd832_logo-relume.svg', alt: 'Relume' },
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66d0dcc7510fd281e9476813_f3logo.svg', alt: 'F3' },
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66e195c9d573158fb20ee8f4_LF_Primary_Full%20Color_White.svg', alt: 'LF' },
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66d1eeda4427e9c56d39b3dc_ophelia.svg', alt: 'Ophelia' },
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66e195cb623c7971b9860806_638104a2c9bc1a8ac3eb8560_Finsweet-logo-full-black-transparent.svg', alt: 'Finsweet' },
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66df2049d89355318bfc2a8a_full%20white%20logo.svg', alt: 'Full White' },
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66e086ee7074f5f862cc599a_one-page-love-logo-transparent-dark.png', alt: 'One Page Love' },
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66e330b536552037e2d554bc_wordmark.svg', alt: 'Wordmark' },
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66e330b9857c25cdc93ffde8_Design%20Champs.svg', alt: 'Design Champs' },
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66e330c02ac995d335d8800e_Lummi.svg', alt: 'Lummi' }
  ];

  // 響應式計算重複次數和動畫速度
  const calculateResponsiveSettings = () => {
    const screenWidth = window.innerWidth;
    let itemWidth, duplicatesNeeded, animationDuration;
    
    if (screenWidth <= 480) {
      // 小螢幕手機
      itemWidth = 80;
      animationDuration = '25s';
    } else if (screenWidth <= 768) {
      // 大螢幕手機/小平板
      itemWidth = 100;
      animationDuration = '28s';
    } else if (screenWidth <= 1024) {
      // 平板
      itemWidth = 120;
      animationDuration = '30s';
    } else {
      // 桌面
      itemWidth = 120;
      animationDuration = '35s';
    }
    
    const itemsNeeded = Math.ceil(screenWidth / itemWidth) + 2;
    duplicatesNeeded = Math.ceil(itemsNeeded / manufacturers.length);
    
    return {
      duplicatedItems: Array(duplicatesNeeded).fill(manufacturers).flat(),
      animationDuration
    };
  };

  const [responsiveSettings, setResponsiveSettings] = React.useState(() => calculateResponsiveSettings());

  React.useEffect(() => {
    const handleResize = () => {
      setResponsiveSettings(calculateResponsiveSettings());
    };

    // 使用防抖動來優化性能
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="manufacturers">
      <div className="manufacturers_content">
        <div className="manufacturers_slider">
          <div 
            className="manufacturers_track"
            style={{
              animationDuration: responsiveSettings.animationDuration
            }}
          >
            {responsiveSettings.duplicatedItems.map((manufacturer, index) => (
              <div key={index} className="manufacturer_item">
                <img 
                  src={manufacturer.src} 
                  alt={manufacturer.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturers;
