import showdown_img_1 from "./images/showdown_img_1.webp";

const Showdown = () => {
  return (
    <div className="showdown">
      <div className="showdown_content">
        <div className="showdown_title">
          <div className="showdown_title_content">
            <h2>Bracket</h2>
          </div>
        </div>
        <div className="showdown_img">
          <div className="showdown_img_content">
            <img src={showdown_img_1} alt="showdown_img" />
          </div>
        </div>
        <div className="showdown_input">
          <div className="showdown_input_content">
            <div className="showdown_input_area">
              <div className="showdown_input_area_content">
                <div className="showdown_input_area_title">
                  <div className="showdown_input_area_title_content">
                    <h4>Get reminded</h4>
                  </div>
                </div>
                <div className="showdown_input_area_p">
                  <div className="showdown_input_area_p_content">
                    <p>
                      Don’t Miss the Action <br /> Sign Up for Live Match Reminders
                    </p>
                  </div>
                </div>
                <div className="showdown_input_area_input">
                  <div className="showdown_input_area_input_content">
                    <form action="">
                      <input type="text" placeholder="Enter your email" />
                      <button type="submit" placeholder="Sign up">Sign up</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showdown;
