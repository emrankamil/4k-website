import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TeamMember } from "../types/types";
import Image from "next/image";

interface TeamMemberCardProps {
  memberData: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ memberData }) => {
  const { name, position, description, image, socialLinks } = memberData;

  return (
    <div className="card  shadow-md w-64 hover:shadow-2xl  bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-start pb-10">
        <Image
          src={image}
          width={150}
          height={150}
          className="w-full h-48   border-b-2 p-1"
          alt={`${name} image`}
        />
        <h5 className="mb-1 pl-5 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm pl-5 text-gray-500 dark:text-gray-400">
          {position}
        </span>
        <span className="text-sm pl-5 text-start text-gray-500 dark:text-gray-400">
          {description}
        </span>
        <div className="pl-5 mt-5 flex row gap-4">
          {socialLinks.map((socialLink, index) => (
            <a key={index} href={socialLink.url}>
              <FontAwesomeIcon
                icon={socialLink.icon}
                className={socialLink.iconClass}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
