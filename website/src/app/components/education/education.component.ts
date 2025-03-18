import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: "Stella Mary's College of Engineering",
      location: 'Nagercoil, India',
      year: '2016 - 2020',
      score: 'CGPA: 7.3/10'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Amala Convent Girls Higher Secondary School',
      location: 'Nagercoil, India',
      year: '2015 - 2016',
      score: 'Percentage: 70%'
    },
    {
      degree: 'Secondary School Education',
      institution: 'Amala Matriculation Higher Secondary School',
      location: 'Nagercoil, India',
      year: '2013 - 2014',
      score: 'Percentage: 90%'
    }
  ];
} 