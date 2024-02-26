import React, { useState } from 'react';
import { FaSave, FaUserCircle, FaTwitter, FaFacebook, FaLinkedin, FaGlobe, FaImage } from 'react-icons/fa';
import { useRef } from 'react';

// Simulated current user data
const currentUserData = {
  name: 'John Doe',
  bio: 'Software Developer',
  selectedEmail: 'user@example.com',
  website: 'https://www.example.com',
  twitter: '@johndoe',
  facebook: 'facebook.com/johndoe',
  linkedin: 'linkedin.com/in/johndoe',
  company: 'Tech Solutions',
};

// Define a type for the profile form state
type ProfileFormState = {
  name: string;
  bio: string;
  selectedEmail: string;
  emails: string[];
  website: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  company: string;
  profilePicture: string | ArrayBuffer | null;
};

const ProfileSettings: React.FC = () => {
  const [formState, setFormState] = useState<ProfileFormState>({
    ...currentUserData,
    emails: ['user@example.com', 'another@example.com'], // Example emails connected to the account
    profilePicture: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, files } = target;
    if (name === 'profilePicture' && files) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState(prevState => ({ ...prevState, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormState(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated with:', formState);
    alert('Profile updated successfully!');
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full  min-h-full text-white p-4">
      <h2 className="text-2xl w-full border-b pb-[.5rem] border-gray-600 font-semibold">Profile Settings</h2>

      <div className="flex mt-2 items-center gap-2 mb-6">
        <span>@maiki</span>
      </div>

      <form onSubmit={handleSubmit} className="flex">

        <div className='flex w-full flex-col flex-1 gap-4'>
          <label className="block">
            <span className="text-gray-300">Name</span>
            <input type="text" name="name" value={formState.name} onChange={handleChange} className="mt-1 block w-full max-w-[20rem] bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white" />
          </label>
          <label className="block">
            <span className="text-gray-300">Bio</span>
            <textarea name="bio" value={formState.bio} onChange={handleChange} className="mt-1 block w-full max-w-[20rem] bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white" />
          </label>
          <label className="block">
            <span className="text-gray-300">Display Email</span>
            <select name="selectedEmail" value={formState.selectedEmail} onChange={handleChange} className="mt-1 block w-full max-w-[20rem] bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white">
              {formState.emails.map((email, index) => (
                <option key={index} value={email}>{email}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-gray-300">Website:</span>
            <input type="text" name="website" value={formState.website} onChange={handleChange} className="mt-1 block w-full max-w-[20rem] bg-gray-800 rounded-md shadow-sm py-2 px-3 text-white" />
          </label>
          <div className="flex flex-col max-w-[25rem] gap-2">
            <SocialLinkInput label="Twitter" icon={<FaTwitter />} name="twitter" value={formState.twitter} onChange={handleChange} />
            <SocialLinkInput label="Facebook" icon={<FaFacebook />} name="facebook" value={formState.facebook} onChange={handleChange} />
            <SocialLinkInput label="LinkedIn" icon={<FaLinkedin />} name="linkedin" value={formState.linkedin} onChange={handleChange} />
          </div>
          <label className="block">
            <span className="text-gray-300">Company:</span>
            <input type="text" name="company" value={formState.company} onChange={handleChange} className="mt-1 block w-full max-w-[20rem] bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white" />
          </label>
          <button type="submit" className="inline-flex items-center w-[10rem] justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4">
            <FaSave />
            Save Changes
          </button>
        </div>


        <div className="block  w-[15rem] h-[15rem] flex items-center justify-center rounded-sm border-gray-400">
          <div className="mt-1 flex relative items-center">
            {formState.profilePicture ? (
              <img src={formState.profilePicture as string} alt="Profile" className="w-[8rem] h-[8rem] object-cover center border border-2 rounded-full" />
            ) : (
              <FaUserCircle className="text-[8rem]" />
            )}

            <button type="button" onClick={handleClick} className="absolute flex items-center text-sm gap-2 bg-gray-800 rounded-md bottom-[-.10rem] left-0 p-2">
              <span>
                Edit
              </span>
              <FaImage />
            </button>

            <input
              type="file"
              name="profilePicture"
              ref={fileInputRef}
              onChange={handleChange}
              className="hidden"
            />
          </div>
        </div>

      </form>
    </div>
  );
};

// Social Link Input Component
const SocialLinkInput: React.FC<{ label: string, icon: JSX.Element, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, icon, name, value, onChange }) => (
  <label className="flex items-center gap-2">
    <span className="text-gray-300">{icon}</span>
    <input type="text" name={name} value={value} onChange={onChange} placeholder={label} className="mt-1 flex-1 bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white" />
  </label>
);

export default ProfileSettings;
