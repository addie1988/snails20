import sponsors_content_img_area from './images/sponsors_content_img_area.webp'
import Manufacturers from './Manufacturers'

const Sponsors = () => {
  return (
    <div className='sponsors'>
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