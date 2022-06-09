import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExperienceComponent } from "./experience/experience.component";
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";

const routes: Routes = [
  {
    path: "experience",
    component: ExperienceComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutMeComponent,
  },
  {
    path: "project",
    component: ProjectsComponent,
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
