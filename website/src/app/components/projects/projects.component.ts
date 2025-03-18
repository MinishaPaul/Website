import { Component, OnInit } from '@angular/core';

interface Project {
  name: string;
  role: string;
  client: string;
  duration: string;
  description: string;
  techStack: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Loan Origination System (LOS)',
      role: 'Senior Technical Lead',
      client: 'Banking Sector',
      duration: 'MAR 2024 - Present',
      description: 'Developed a comprehensive loan origination process system for financial institutions, streamlining the entire loan application and approval workflow.',
      techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'Redis']
    },
    {
      name: 'Trade Surveillance (TS)',
      role: 'Module Lead & Client Facing',
      client: 'Financial Services',
      duration: 'SEP 2022 - MAR 2024',
      description: 'Built a surveillance system to detect market manipulations and ensure compliance with regulatory requirements in trading operations.',
      techStack: ['Angular', 'Spring Boot', 'MySQL', 'RabbitMQ']
    },
    {
      name: 'Nirnaya',
      role: 'Module Lead',
      client: 'Banking Sector',
      duration: 'FEB 2020 - SEP 2022',
      description: 'Developed a decision-making tool for financial operations, integrating complex business rules and automated workflows.',
      techStack: ['Angular', 'Java', 'MySQL', 'RabbitMQ']
    },
    {
      name: 'DOT (Digital One Treasury)',
      role: 'Senior Developer',
      client: 'Treasury Management',
      duration: 'JUL 2019 - FEB 2020',
      description: 'Created a comprehensive treasury management system for handling financial transactions and risk management.',
      techStack: ['Angular', 'Spring Boot', 'Oracle']
    },
    {
      name: 'Data Vault',
      role: 'Full Stack Developer',
      client: 'Banking Sector',
      duration: 'MAR 2019 - JUL 2019',
      description: 'Developed a secure data archival system for banking sectors, ensuring compliance with data retention policies.',
      techStack: ['Angular', 'Java', 'MongoDB', 'Elasticsearch']
    }
  ];

  constructor() { }

  ngOnInit(): void { }
} 