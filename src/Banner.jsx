import { useState, useEffect } from 'react'
import banner_img_1 from './images/banner_img_1.svg'
import banner_img_2 from './images/banner_img_2.svg'
import banner_img_3 from './images/banner_img_3.svg'

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // 圖片陣列
  const images = [
    { src: banner_img_1, alt: "banner_img_1" },
    { src: banner_img_2, alt: "banner_img_2" },
    { src: banner_img_3, alt: "banner_img_3" },
    { src: 'https://cdn.prod.website-files.com/66a94d56fc2836a600b25d27/66cf75b0dc03d7a483df28f1_logo-big.svg', alt: "banner_img_4" }
  ]

  // 自動輪播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // 每3秒切換一次

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className='banner'>
        <div className='banner_content'>
            <div className='banner_img'>
                <div className='banner_img_content'>
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            src={image.src} 
                            alt={image.alt}
                            className={`banner_slide ${index === currentIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
                {/* 輪播指示器 */}
                <div className='banner_indicators'>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
            <div className='banner_text'>
                <div className='banner_text_content'>
                    <p>Watch the world's best web designers unleash their skills in a 2v2 design tournament</p>
                </div>
            </div>
            <div className='banner_button'>
                <div className='banner_button_content'>
                    <a href="#">watch now</a>
                    <a href="#">sign up</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner