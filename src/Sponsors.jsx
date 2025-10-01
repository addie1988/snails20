import { useEffect, useRef } from 'react'
import sponsors_content_img_area from './images/sponsors_content_img_area.webp'
import Manufacturers from './Manufacturers'

const Sponsors = () => {
  const sponsorsRef = useRef(null)

  useEffect(() => {
    const sponsorsElement = sponsorsRef.current
    if (!sponsorsElement) return

    let animationFrameId
    let lastMousePosition = { x: 0, y: 0 }
    let currentOffsets = {}

    const handleMouseMove = (e) => {
      const rect = sponsorsElement.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // 計算滑鼠相對於元素中心的位置
      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY
      
      // 計算距離和角度
      const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY)
      const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2
      
      // 正規化距離 (0-1)
      const normalizedDistance = Math.min(distance / maxDistance, 1)
      
      // 只有當滑鼠位置有顯著變化時才更新
      const deltaX = Math.abs(mouseX - lastMousePosition.x)
      const deltaY = Math.abs(mouseY - lastMousePosition.y)
      
      if (deltaX > 10 || deltaY > 10) {
        lastMousePosition = { x: mouseX, y: mouseY }
        
        // 為每個偽元素生成不同的隨機偏移量
        const pseudoElements = [
          'sponsors-content-img-before',
          'sponsors-content-img-after',
          'sponsors-content-img-content-before',
          'sponsors-content-img-content-after',
          'sponsors-content-img-area-before',
          'sponsors-content-img-area-after'
        ]
        
        pseudoElements.forEach(elementName => {
          // 為每個元素生成獨立的隨機偏移量，增加移動範圍
          const randomOffsetX = (Math.random() - 0.5) * 80 * normalizedDistance
          const randomOffsetY = (Math.random() - 0.5) * 80 * normalizedDistance
          
          currentOffsets[elementName] = {
            x: randomOffsetX,
            y: randomOffsetY
          }
        })
        
        // 使用 requestAnimationFrame 來平滑更新
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
        }
        
        animationFrameId = requestAnimationFrame(() => {
          pseudoElements.forEach(elementName => {
            const offset = currentOffsets[elementName]
            if (offset) {
              sponsorsElement.style.setProperty(`--${elementName}-x`, `${offset.x}px`)
              sponsorsElement.style.setProperty(`--${elementName}-y`, `${offset.y}px`)
            }
          })
        })
      }
    }

    const handleMouseLeave = () => {
      // 取消未完成的動畫
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      
      // 滑鼠離開時重置所有偽元素的位置
      const pseudoElements = [
        'sponsors-content-img-before',
        'sponsors-content-img-after',
        'sponsors-content-img-content-before',
        'sponsors-content-img-content-after',
        'sponsors-content-img-area-before',
        'sponsors-content-img-area-after'
      ]
      
      pseudoElements.forEach(elementName => {
        sponsorsElement.style.setProperty(`--${elementName}-x`, '0px')
        sponsorsElement.style.setProperty(`--${elementName}-y`, '0px')
      })
      
      // 重置狀態
      lastMousePosition = { x: 0, y: 0 }
      currentOffsets = {}
    }

    sponsorsElement.addEventListener('mousemove', handleMouseMove)
    sponsorsElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      sponsorsElement.removeEventListener('mousemove', handleMouseMove)
      sponsorsElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className='sponsors' ref={sponsorsRef}>
        <div className='sponsors_content'>
            <div className='sponsors_content_img'>
                <div className='sponsors_content_img_content'>
                    <div className='sponsors_content_img_area'>
                        <div className='sponsors_content_img_area_content'>
                            <img src={sponsors_content_img_area} alt="sponsors_content_img_area" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='sponsors_content_p'>
                <div className='sponsors_content_p_content'>
                    <p>our sponsors </p>
                </div>
            </div>
            <Manufacturers />
        </div>
    </div>
  )
}

export default Sponsors