import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent implements OnInit {
  experiences = [
    {
      title: "Software Developer",
      company: "Gap Infrastructure Corporation",
      companylogo:"./assets/img/GICLogo.png",
      companyUrl:"https://www.gic.co.za/",
      date: "Feb 2022- Present",
      duties: [
        "Developing solutions to meet a user’s needs within a system.",
        "Resolving system and user issues.",
        "Develop,testing and validating procedures",
      ],
      skills: ["Laserfiche", "Mtwo"],
    },
    {
      title: "System Support Technician",
      company: "Gap Infrastructure Corporation",
      companylogo:"./assets/img/GICLogo.png",
      companyUrl:"https://www.gic.co.za/",
      date: "Apr 2021- Mar 2022",
      duties: [
        "Developing solutions to meet a user’s needs within a system.",
        "Resolving system and user issues.",
        "Develop,testing and validating procedures",
        "Store, retrieve, and manipulate data for analysis of system capabilities and requirements",
        "Modify existing software to correct errors",
        "Investigate new solutions to enhance user’s experiences within current software’s.",
        "Identifying and assigning employees roles within software platforms",
        "Configuration of software platforms.",
      ],
      skills: ["Laserfiche", "Mtwo"],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
