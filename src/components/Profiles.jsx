import { Link, useParams, useNavigate } from 'react-router-dom';


const Profile = (props) => {
  const id = useParams();
  console.log(props);
  const navigate = useNavigate();

  const navigation = () => {
    navigate('/');
  };

  return (
    <>
      <Link to={{
        pathname: `/Posts/${id}`
      }}>
        posts of profile
      </Link>
      <hr />
      {/* <button onClick={navigation}>Redirect</button> */}
      <button onClick={navigation}>Redirect</button>
    </>


  );
};

export default Profile;
