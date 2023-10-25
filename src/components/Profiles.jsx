import "../styles/Profiles.css";
import emptyImgIcon from "../assets/profile-icon-9.png";

const Profiles = ({ profiles }) => {
  // console.log(profiles);
  return (
    <div className="profiles">
      <div className="row gap">
        {profiles.map((profile) => {
          const { full_name, id, community_name, image } = profile;
          return (
            <div key={id} className="profile-card col-lg-3 col-md-6 col-sm-12">
              <div className="profile-card-container">
                <div className="profile-card-image">
                  <img src={image ? image : emptyImgIcon} alt="" />
                </div>
                <p className="profile-card-name">{full_name}</p>
                <p className="profile-card-community ">{community_name}</p>
                <p className="profile-card-cohort">Cohort - August, 2023.</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profiles;
