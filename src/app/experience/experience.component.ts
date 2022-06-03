import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent implements OnInit {
  experiences = [
    {
      title: "System Developer",
      company: "Gap Infrastructure Corporation",
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
      date: "Apr 2021- Mar 2022",
      duties: [
        "Developing solutions to meet a user’s needs within a system.",
        "Resolving system and user issues.",
        "Develop,testing and validating procedures",
        "Store, retrieve, and manipulate data for analysis of system capabilities and requirements",
        "Modify existing software to correct errors",
        "Investigate new solutions to enhance user’s experiences within current software’s.",
        "Configuring software platforms to ensure users the best experience",
        "Identifying and assigning employees roles within software platforms",
        "Configuration of software platforms.",
      ],
      skills: ["Laserfiche", "Mtwo"],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
