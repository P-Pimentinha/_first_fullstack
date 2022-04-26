import './UserOverView.css';
import profileImg from './profile_picture.jpg'

const UserOverView = () => {
  return (
   <div class='userOverView'>
       <img alt="profile" src={profileImg}/>
       <div>
           <h1>Good Morning, User</h1>
           <p>info</p>
       </div>
   </div>
  )
};

export default UserOverView;
