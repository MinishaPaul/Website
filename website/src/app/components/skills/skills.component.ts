import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = {
    frontend: [
      { name: 'Angular', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 60 },
      { name: 'React', level: 30 }
    ],
    backend: [
      { name: 'Java SpringBoot', level: 80 },
      { name: 'Java', level: 80 },
      { name: 'SQL', level: 70 },
      { name: 'Node.js', level: 20 },
      { name: 'Python', level: 30 },
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 20 },
      { name: 'AWS', level: 10 },
      { name: 'VS Code', level: 90 }
    ],
    architecture: [
      { name: 'Microservices', level: 80 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'MVC Pattern', level: 90 },
      { name: 'Event-Driven', level: 75 },
      { name: 'Domain-Driven Design', level: 70 }
    ]
  };
} 