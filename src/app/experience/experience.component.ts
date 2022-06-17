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
      companylogo: "./assets/img/GICLogo.png",
      companyUrl: "https://www.gic.co.za/",
      date: "Feb 2022- Present",
      duties: [
        "Developing solutions to meet a user’s needs within a system.",
        "Resolving system and user issues.",
        "Develop,testing and validating procedures",
      ],
      skills: ["Laserfiche", "Mtwo", "SQL", "JavaScript", "CSS"],
    },
    {
      title: "System Developer",
      company: "Gap Infrastructure Corporation",
      companylogo: "./assets/img/GICLogo.png",
      companyUrl: "https://www.gic.co.za/",
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
      skills: ["Laserfiche", "Mtwo", "SQL"],
    },
    {
      title: "Intern",
      company: "SalesCapital",
      companylogo: "./assets/img/GICLogo.png",
      companyUrl: "https://salecapital.co/",
      date: "July 2017 - Oct 2017",
      duties: [
        "Documenting and maintaining the sales capital system.",
        "Adding new Clients to the system.",
        "Configuring databases",
        "Store, retrieve, and manipulate data for analysis of system capabilities and requirements",
        "Modify existing software to correct errors",
      ],
      skills: ["Bellin", "SQL"],
    },
    {
      title: "IT Intern (Technical support)",
      company: "Liberty Life Insurance",
      companylogo: "./assets/img/GICLogo.png",
      companyUrl: "https://liberty.co.za",
      date: "May 2016 - July 2016",
      duties: [
        "Working closely with IT Techicans",
        "Adding new Clients to the system.",
        "Resolving 1st line technical issues.",
        "Working shifts to support internal stakeholders with all IT related queries, system issues, and technical support.",
      ],
      skills: ["MyLiberty"],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
