import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects =[
    {
      ProjectName:"Greg Game",
      techStack:"Python",
      library:"Numpy,Pygame,Enum,torch,matplotlib",
      dateCreated:"12 May 2022",
      shortDescription:" This Project is based on Reinforcement Learning which trains the snake to eat the food present in the environment.",
      projectImage:"./assets/img/gregGame.gif"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
