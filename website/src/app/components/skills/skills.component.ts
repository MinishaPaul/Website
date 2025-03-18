import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = {
    frontend: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Angular', level: 75 },
      { name: 'React', level: 70 }
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'SQL', level: 85 }
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'VS Code', level: 90 }
    ]
  };
} 