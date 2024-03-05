import { MdOutlineAddToQueue } from "react-icons/md";
import Button from "../../Components/common/Button/Button";
import Avatar from "../../Components/common/Avatar/Avatar";
import { organizations, links } from "../../data/data";
import { Organization, Link } from "../../types/types";
import Image from '../../assets/me.jpg';
import './Networks.css'; 

const SectionHeader = ({ title, onNewClick }) => (
  <div className="flex w-full border-b pb-[.7rem] border-gray-600 items-center justify-between">
    <h2 className="font-medium text-gray-200">
      {title}
    </h2>
    <Button customStyle="mr-16" text="New" icon={MdOutlineAddToQueue} onClick={onNewClick} />
  </div>
);

const OrganizationCard = ({ org }:{org:Organization}) => (
  <div className="organization-card">
    <div className="avatar">
    <Avatar src={Image} name={org.name} />
    </div>
    <span className="name">@{org.name}</span>
  </div>
);

const LinkCard = ({ link }:{link:Link}) => (
  <div className="link-card">
    <div className="avatar">
    <Avatar src={Image} name="project-link" />
    </div>
    <span className="type">{link.type}</span>
    <span className="name">{link.name}</span>
  </div>
);

const Networks = () => {
  return (
    <div className='networks-container'>
      <h2 className="section-title">Networks</h2>

      <div className="section">
        <SectionHeader title="Organizations" onNewClick={() => {}} />
        <div className="cards-container">
          {organizations && organizations.length > 0 ? organizations.map((org) => (
            <OrganizationCard key={org.id} org={org} />
          )) : (
            <div className="placeholder-text">You don't belong to any Organization</div>
          )}
        </div>
      </div>

      <div className="section">
        <SectionHeader title="Links" onNewClick={() => {}} />
        <div className="cards-container">
          {links && links.length > 0 ? links.map((link) => (
            <LinkCard key={link.id} link={link} />
          )) : (
            <div className="placeholder-text">You don't have any Links</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Networks;
