import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ScopeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ScopeProvider {
  public slides: [{}] = [
      { title: 'Welcome to Sunreseds', text: 'Find talented workers here', image: '2.jpg' },
      { title: 'Best choice for your business', text: '', image: '3.jpg' },
  ];

  public specializations: [{}]= [
      {name: 'JavaScript', text: 'Angular, Aurelia, React', ico: 'logo-angular', color: "red"},
      {name: 'HTML5', text: 'Bootstrap 4, Materialize, SCSS, SASS, LESS', ico: 'logo-html5', color: "orange"},
      {name: 'Data & Analytics', text: 'AWS, Google Cloud Platform, Hadoop', ico: 'md-analytics', color: "#32db64"},
      {name: 'eCommerce Dev', text: 'Magento, WordPress, Marketing', ico: 'md-card', color: "burlywood"},
      {name: 'Mobile App Dev', text: 'iOS, Android', ico: 'md-phone-portrait', color: "#555"},
  ];

  public offices: [{city: string, employees: [{}]}] = [
      {
        city: 'San Francisco',
        employees: [
          {
            firstName: 'Vitaly',
            lastName: 'Kovalevski',
            image: '3.png',
            position: 'Tech Lead',
            technologies: [
                {
                    name: 'PHP',
                    experience: '9 years',
                    ico: 'ios-nuclear',
                    color: 'blue',
                },
                {
                    name: 'JavaScript',
                    experience: '7 years',
                    ico: 'ios-pulse',
                    color: 'orange',
                },
                {
                    name: 'Angular 4',
                    experience: '1 year',
                    ico: 'logo-angular',
                    color: 'red',
                },
                {
                    name: 'HTML 5',
                    experience: '7 years',
                    ico: 'logo-html5',
                    color: 'orange',
                },
            ]
          },
        ]
      },
      {
        city: 'Minsk',
        employees: [
          {
            firstName: 'Alex',
            lastName: 'Rozhnov',
            image: '1.png',
            position: 'Full stack web-developer',
              technologies: [
                  {
                      name: 'JavaScript',
                      experience: '6 years',
                      ico: 'ios-pulse',
                      color: 'orange',
                  },
                  {
                      name: 'Angular 4',
                      experience: '1 year',
                      ico: 'logo-angular',
                      color: 'red',
                  }
                  ,
                  {
                      name: 'Aurelia',
                      experience: '3 years',
                      ico: 'logo-angular',
                      color: 'red',
                  },
                  {
                      name: 'PHP',
                      experience: '8 years',
                      ico: 'ios-nuclear',
                      color: 'blue',
                  },
                  {
                      name: 'HTML 5',
                      experience: '7 years',
                      ico: 'logo-html5',
                      color: 'orange',
                  },
              ]
          },
          {
            firstName: 'Vitaly',
            lastName: 'Losev',
            image: '2.jpeg',
            position: 'Front-end developer, dev-ops',
              technologies: [
                  {
                      name: 'PHP',
                      experience: '5 years',
                      ico: 'ios-nuclear',
                      color: 'blue',
                  },
                  {
                      name: 'JavaScript',
                      experience: '2 years',
                      ico: 'ios-pulse',
                      color: 'orange',
                  },
                  {
                      name: 'Angular 4',
                      experience: '1 year',
                      ico: 'logo-angular',
                      color: 'red',
                  },
                  {
                      name: 'HTML 5',
                      experience: '4 years',
                      ico: 'logo-html5',
                      color: 'orange',
                  },
              ]
          },
          {
            firstName: 'Sergey',
            lastName: 'Dmitrienko',
            image: '3.png',
            position: 'Front-end developer',
              technologies: [
                  {
                      name: 'PHP',
                      experience: '1 year',
                      ico: 'ios-nuclear',
                      color: 'blue',
                  },
                  {
                      name: 'Angular 4',
                      experience: '1 year',
                      ico: 'logo-angular',
                      color: 'red',
                  },
                  {
                      name: 'HTML 5',
                      experience: '1 year',
                      ico: 'logo-html5',
                      color: 'orange',
                  },
              ]
          },
        ]
      },
  ];

  constructor(public http: Http) {
    console.log('Hello ScopeProvider Provider');
  }

}
