import { FaYoutube } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

const Schedule_list_link = () => {
  return (
    <div className="schedule_list_link_content">
      <ol className="schedule_list_link_ol">
        <li>
          <FaYoutube />
        </li>
        <li>
          <IoLogoFigma />
        </li>
        <li>
          <FaFileDownload />
        </li>
      </ol>
    </div>
  );
};

export default Schedule_list_link;
