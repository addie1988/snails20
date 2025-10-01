import team_li_img_1 from './images/team_li_img_1.png'
import team_li_img_2 from './images/team_li_img_2.png'
import team_li_img_3 from './images/team_li_img_3.png'
import team_li_img_4 from './images/team_li_img_4.png'



const Team = () => {
  return (
    <div className='team'>
        <div className='team_content'>
            <div className='team_content_title'>
                <div className='team_content_title_content'>
                     <h2>The Rules</h2>
                </div>
            </div>
            <div className='team_ul'>
                <div className='team_ul_content'>
                    <ul>
                        <li>
                            <div className='team_li_title'>
                                <div className='team_li_title_content'>
                                    <h4>8 teams</h4>
                                </div>
                            </div>
                            <div className='team_li_img'>
                                <div className='team_li_img_content'>
                                    <img src={team_li_img_1} alt="team_li_img" />
                                </div>
                            </div>
                            <div className='team_li_p'>
                                <div className='team_li_p_content'>
                                    <p>8 teams from around the world competing for glory</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='team_li_title'>
                                <div className='team_li_title_content'>
                                    <h4>2v2</h4>
                                </div>
                            </div>
                            <div className='team_li_img'>
                                <div className='team_li_img_content'>
                                    <img src={team_li_img_2} alt="team_li_img" />
                                </div>
                            </div>
                            <div className='team_li_p'>
                                <div className='team_li_p_content'>
                                    <p>two teams, one arena, zero mercy</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='team_li_title'>
                                <div className='team_li_title_content'>
                                    <h4>themes</h4>
                                </div>
                            </div>
                            <div className='team_li_img'>
                                <div className='team_li_img_content'>
                                    <img src={team_li_img_3} alt="team_li_img" />
                                </div>
                            </div>
                            <div className='team_li_p'>
                                <div className='team_li_p_content'>
                                    <p>Unique subjects, styles, and scope in every match</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='team_li_title'>
                                <div className='team_li_title_content'>
                                    <h4>30 mins</h4>
                                </div>
                            </div>
                            <div className='team_li_img'>
                                <div className='team_li_img_content'>
                                    <img src={team_li_img_4} alt="team_li_img" />
                                </div>
                            </div>
                            <div className='team_li_p'>
                                <div className='team_li_p_content'>
                                    <p>Just 30 mins to create a masterpiece - no pressure</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team