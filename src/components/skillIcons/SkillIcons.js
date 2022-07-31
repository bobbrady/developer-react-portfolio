import React from 'react';
import './SkillIcons.css';

const SkillIcons = ({ skillItems }) => {
  return (
    <div className='icon-grid'>
      {skillItems.map((skill, idx) => {
        return (
          <div key={`${skill.skillName}-${idx}`} className='skill-icon'>
            <span
              className='iconify'
              data-icon={skill.classname}
              style={skill.style}
              data-inline='false'
            ></span>
            <p>{skill.skillName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillIcons;
