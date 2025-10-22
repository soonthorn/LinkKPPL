import React from 'react';

interface ProfileProps {
  avatarUrl: string;
  name: string;
  handle: string;
}

const Profile: React.FC<ProfileProps> = ({ avatarUrl, name, handle }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <img
        src={avatarUrl}
        alt="Profile Avatar"
        className="w-24 h-24 rounded-full mb-4 border-2 border-slate-900/10 shadow-lg"
      />
      <h1 className="text-2xl font-bold text-slate-900">{name}</h1>
      <p className="text-md text-slate-600">{handle}</p>
    </div>
  );
};

export default Profile;