import React from "react";
import "./resume.css"; // Import the CSS file
import Information from "./information";
import Values from "./datas";

const Resume = ({id,userName,location,Bio}) => {
  return (
    <div className="resumeContainer">
      <div className="separate">
        <div className="upperTop">
          <div className="profilePic">
            <img
              src={`https://picsum.photos/${id}/1/160/160`}
              alt="Katherine Johnson"
            />
            <div className="resumeLink"><href src="abc">https;//resumeLink</href></div>
          </div>
          <div className="profileCont">
            <div className="name">{userName}</div>
            <div className="description">{Bio}</div>
            <div className="location">📍{location}</div>
            <div className="twitter">
              <a href="sdf">twitterLink</a>
            </div>
          </div>
        </div>
        <div className="info">
        {
        Values.map(item=><Information
          key={item.id}
          Name = {item.Name}
          Description={item.Discription}
          location={item.location}
          skill1={item.skill1}
          skill2={item.skill2}
          skill4={item.skill4}
          skill3={item.skill3}
        ></Information>)
      }
        </div>
      </div>
    </div>
  );
};

export default Resume;
