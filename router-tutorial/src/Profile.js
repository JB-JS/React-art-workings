import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
  JB: {
    id: 1,
    name: '정범수',
    description: '애니를 좋아하는 개발자',
  },
  akame: {
    id: 2,
    name: 'アカメ',
    kr_name: '아카메',
    en_name: 'Akame',
    description: '먹는것을 좋아하고 암살을 잘하는 주인공',
  },
};

const Profile = ({
  match: {
    params: { username },
  },
}) => {
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}: ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
