"use client"

import React, { createContext, useContext, useState } from 'react';
import { ProjectDetails, projects } from '../data/projects';

type ProjectContextType = {
  filteredProjects: ProjectDetails[];
  setFilterTechnology: (tech: string) => void;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [filterTech, setFilterTech] = useState<string>('');

  const filteredProjects = projects.filter(project => 
    filterTech ? project.technologies.includes(filterTech) : true
  );

  const setFilterTechnology = (tech: string) => {
    setFilterTech(tech);
  };

  return (
    <ProjectContext.Provider value={{ filteredProjects, setFilterTechnology }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}