import React from 'react';
import './Skills.css';
import SkillIcons from '../../components/skillIcons/SkillIcons';
import { skills } from '../../website-data';
import UndrawProgramming from '../../components/undrawProgramming/UndrawProgramming';

const getSkillImage = (skillKey) => {
  if (skills[skillKey].image === 'UndrawProgramming') {
    return <UndrawProgramming hairColor='#a7a7a7' height='75%' />;
  }
  // See https://stackoverflow.com/questions/62192049/how-do-i-dynamically-import-images-in-react
  const title = skills[skillKey].title;
  const image = skills[skillKey].image;
  return (
    <img
      alt={`${title} skills`}
      src={require(`../../assets/images/${image}`)}
    />
  );
};

const Skills = ({ burgerActive, skillKey, leadSkill }) => {
  return (
    <section className={burgerActive ? 'scroll-burger' : ''} id={skillKey}>
      {leadSkill && <h1>What I do</h1>}
      <div className='skills-main-div'>
        <div className='skills-image-div'>{getSkillImage(skillKey)}</div>
        <div className='skills-text-div'>
          <h1 className='skills-heading'>{skills[skillKey].title} </h1>
          <p className='subTitle skills-text-subtitle'>
            {skills[skillKey].subtitle}
          </p>
          <SkillIcons skillItems={skills[skillKey].skillItems} />
          <div>
            {skills[skillKey].skillBullets.map((skill, idx) => {
              return <p key={`${skillKey}-${idx}`}>{skill}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
