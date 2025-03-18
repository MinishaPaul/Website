import { Component, OnInit } from '@angular/core';

interface Experience {
  company: string;
  location: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      company: 'FINSURGE PVT LTD',
      location: 'Nagercoil, India',
      position: 'Senior Technical Lead',
      duration: 'MAR 2024 - Present',
      responsibilities: [
        'Be a part of the core team in developing and maintaining financial applications',
        'Designing mock screens and implementing UI/UX improvements',
        'Improving existing systems through code refactoring and optimization',
        'Conducting code reviews and providing technical guidance to team members'
      ]
    },
    {
      company: 'FINSURGE SDN BHD',
      location: 'Malaysia',
      position: 'Module Lead & Client Facing',
      duration: 'SEP 2022 - MAR 2024',
      responsibilities: [
        'Spearheaded banking projects with direct client interaction',
        'Managed development of key modules and features',
        'Ensured timely delivery and quality of deliverables',
        'Collaborated with cross-functional teams for project success'
      ]
    },
    {
      company: 'FINSURGE PVT LTD',
      location: 'Nagercoil, India',
      position: 'Module Lead',
      duration: 'FEB 2020 - SEP 2022',
      responsibilities: [
        'Developed key modules for financial applications',
        'Collaborated with teams to implement new features',
        'Mentored junior developers and conducted knowledge sharing sessions',
        'Participated in architectural decisions and technical planning'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  getTotalTechnologies(): number {
    // Return a fixed number since we don't track technologies anymore
    return 8; // Example number
  }

  getTotalProjects(): number {
    // Assuming each experience represents multiple projects
    return this.experiences.length * 3; // Rough estimate
  }
} 