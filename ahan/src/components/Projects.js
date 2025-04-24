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

const projects = [
  {
    id: 1,
    title: 'Nomad',
    description: 'Website for users to find remote workspaces. Presented to the brothers of the Mu Rho chapter of Alpha Kappa Psi during Court of Honor.',
    imageUrl: nomad,
    githubUrl: 'https://nomad-green.vercel.app/'
  },
  {
    id: 2,
    title: 'SoleSwitch',
    description: 'Slideshow of a hypothetical new product that allows users to switch between different soles of their shoes with ease. Presented to the brothers of the Mu Rho chapter of Alpha Kappa Psi during MidCourt.',
    imageUrl: SoleSwitch,
    githubUrl: 'https://www.canva.com/design/DAGis6LgZ9g/NhTBUdKIlHmozzzBWw9k0g/edit?utm_content=DAGis6LgZ9g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  },
  {
    id: 3,
    title: 'Shakespearen Monkeys',
    description: "Generates realistic English text by analyzing character sequence patterns from Shakespeare's 'The Merchant of Venice' and recreating them using a probabilistic model. It also demonstrates custom implementations of the Map ADT using both a binary search tree and a hash table.",
    imageUrl: ShakespearenMonkeys,
    githubUrl: 'https://github.com/A-Sarpall/DSA_Project'
  },
  {
    id: 4,
    title: 'Dagger',
    description: 'Real-time credit card transaction analyzer used to detect fraudulent transactions based on behavioral analysis',
    imageUrl: Dagger,
    githubUrl: 'https://github.com/A-Sarpall/Dagger'
  },
  {
    id: 5,
    title: 'MoodSing',
    description: 'Facial recognition software powered by AI to detect your mood based on your current face structure and change the song if your mood is negative.',
    imageUrl: MoodSing,
    githubUrl: 'https://github.com/A-Sarpall/MoodSing'
  },
  {
    id: 6,
    title: 'PsiFlow',
    description: 'Financial dashboard for UTD Alpha Kappa Psi Fraternity to view and edit budgets, and create custom Stripe payment links for pledges, brothers, and corporate sponsors to pay for services/dues.',
    imageUrl: PsiFlow,
    githubUrl: 'https://github.com/a-sarpall/psiflow'
  },
  {
    id: 7,
    title: 'GridironGuide',
    description: 'Interactive platform to help football fans easily track and visualize the upcoming schedule for their favorite teams and rivals.',
    imageUrl: GridironGuide,
    githubUrl: 'https://gridironguide.netlify.app/'
  },
  {
    id: 8,
    title: 'RatioAdjuster',
    description: "Users can manage their Instagram following ratio by seeing which accounts don't follow them back.",
    imageUrl: RatioAdjuster,
    githubUrl: 'https://ratioadjuster.streamlit.app/'
  },
  {
    id: 9,
    title: 'Under Construction',
    description: "More projects coming soon!",
    imageUrl: construction
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        <div className="project-image-container">
          <img src={project.imageUrl} alt={project.title} className="project-image" />
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;