import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutMe = {
    name: 'MINISHA P M',
    role: 'Software Developer',
    description: 'I am a passionate software developer with a strong foundation in web development. ' +
                 'My expertise includes creating responsive and user-friendly applications using modern technologies. ' +
                 'I am constantly learning and exploring new technologies to stay at the forefront of web development.',
    interests: [
      'Web Development',
      'UI/UX Design',
      'Mobile Applications',
      'Cloud Computing',
      'Machine Learning'
    ]
  };
} 