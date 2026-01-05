import React from 'react';
import './Projects.css';
import construction from '../assets/construction.gif';
import nomad from '../assets/nomad.png';
import SoleSwitch from '../assets/SoleSwitch.png';
import ShakespearenMonkeys from '../assets/ShakespearenMonkeys.png';
import MoodSing from '../assets/MoodSing.png';
import PsiFlow from '../assets/PsiFlow.png';
import GridironGuide from '../assets/GridironGuide.png';
import RatioAdjuster from '../assets/RatioAdjuster.png';
import Dagger from '../assets/Dagger.png';
import prodplex from '../assets/prodplex.png';
import phoniverse from '../assets/phoniverse.png';

const projects = [
  {
    id: 1,
    title: 'ProdPlex',
    description: 'Agentic AI platform for PMs to iterate faster and generate a cohesive Product Requirement Document for all parts of the Product Life Cycle',
    imageUrl: prodplex,
    githubUrl: 'https://devpost.com/software/prodify-94vbpk'
  },
  {
    id: 2,
    title: 'Phoniverse',
    description: 'Gamified Speech Therapy utilizing AI to help people overcome speech impediments by reciting excersises based on their own voice ',
    imageUrl: phoniverse,
    githubUrl: 'https://devpost.com/software/phoniverse'
  },
  {
    id: 3,
    title: 'Nomad',
    description: 'Website for users to find remote workspaces. Presented to the brothers of the Mu Rho chapter of Alpha Kappa Psi during Court of Honor.',
    imageUrl: nomad,
    githubUrl: 'https://nomad-green.vercel.app/'
  },
  {
    id: 4,
    title: 'SoleSwitch',
    description: 'Slideshow of a hypothetical new product that allows users to switch between different soles of their shoes with ease. Presented to the brothers of the Mu Rho chapter of Alpha Kappa Psi during MidCourt.',
    imageUrl: SoleSwitch,
    githubUrl: 'https://www.canva.com/design/DAGis6LgZ9g/NhTBUdKIlHmozzzBWw9k0g/edit?utm_content=DAGis6LgZ9g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  },
  {
    id: 5,
    title: 'Shakespearen Monkeys',
    description: "Generates realistic English text by analyzing character sequence patterns from Shakespeare's 'The Merchant of Venice' and recreating them using a probabilistic model. It also demonstrates custom implementations of the Map ADT using both a binary search tree and a hash table.",
    imageUrl: ShakespearenMonkeys,
    githubUrl: 'https://github.com/A-Sarpall/DSA_Project'
  },
  {
    id: 6,
    title: 'Dagger',
    description: 'Real-time credit card transaction analyzer used to detect fraudulent transactions based on behavioral analysis',
    imageUrl: Dagger,
    githubUrl: 'https://github.com/A-Sarpall/Dagger'
  },
  {
    id: 7,
    title: 'MoodSing',
    description: 'Facial recognition software powered by AI to detect your mood based on your current face structure and change the song if your mood is negative.',
    imageUrl: MoodSing,
    githubUrl: 'https://github.com/A-Sarpall/MoodSing'
  },
  {
    id: 8,
    title: 'PsiFlow',
    description: 'Financial dashboard for UTD Alpha Kappa Psi Fraternity to view and edit budgets, and create custom Stripe payment links for pledges, brothers, and corporate sponsors to pay for services/dues.',
    imageUrl: PsiFlow,
    githubUrl: 'https://github.com/a-sarpall/psiflow'
  },
  {
    id: 9,
    title: 'GridironGuide',
    description: 'Interactive platform to help football fans easily track and visualize the upcoming schedule for their favorite teams and rivals.',
    imageUrl: GridironGuide,
    githubUrl: 'https://gridironguide.netlify.app/'
  },
  {
    id: 10,
    title: 'RatioAdjuster',
    description: "Users can manage their Instagram following ratio by seeing which accounts don't follow them back.",
    imageUrl: RatioAdjuster,
    githubUrl: 'https://ratioadjuster.streamlit.app/'
  },
  {
    id: 11,
    title: 'Under Construction',
    description: "More projects coming soon!",
    imageUrl: construction
  }
];

const ProjectCard = ({ project }) => {
  const isAwardWinner = project.title === 'ProdPlex' || project.title === 'PsiFlow';
  
  return (
    <div className={`project-card ${isAwardWinner ? 'award-winner' : ''}`}>
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        <div className="project-image-container">
          {isAwardWinner && (
            <div className="award-ribbon">
              <span>3rd Place</span>
            </div>
          )}
          <img src={project.imageUrl} alt={project.title} className="project-image" />
        </div>
        <h3 className={isAwardWinner ? 'bronze-text' : ''}>{project.title}</h3>
        <p>{project.description}</p>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;