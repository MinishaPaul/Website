import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Developer',
      period: '2020 - Present',
      description: 'Led development of multiple web applications using Angular and Node.js. ' +
                   'Implemented responsive designs and optimized application performance. ' +
                   'Mentored junior developers and conducted code reviews.',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB']
    },
    {
      company: 'Digital Innovations',
      position: 'Full Stack Developer',
      period: '2018 - 2020',
      description: 'Developed and maintained web applications using React and Python. ' +
                   'Collaborated with design team to implement user interfaces. ' +
                   'Integrated third-party APIs and services.',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL']
    },
    {
      company: 'WebTech Solutions',
      position: 'Frontend Developer',
      period: '2016 - 2018',
      description: 'Created responsive websites and web applications using HTML, CSS, and JavaScript. ' +
                   'Worked on improving website performance and user experience. ' +
                   'Implemented modern design patterns and best practices.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery']
    }
  ];
} 