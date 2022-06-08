import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../services/project.interface';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
project!:Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProject()
  }
  getProject(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getprojects().subscribe(project => this.project = project.find(item => item.id === id))
  }

}
