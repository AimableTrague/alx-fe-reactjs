import { useParams } from 'react-router-dom';
import {React} from 'react';

function ProfileDetails() {
  const { userId } = useParams();

  return (
    <div>
      <h2>Profile Details for User: {userId}</h2>
    </div>
  );
}

export default ProfileDetails;
