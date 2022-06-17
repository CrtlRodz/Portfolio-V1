import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.css"],
})
export class AboutMeComponent implements OnInit {
  aboutme = [
    {
      name: "Cari-Anne Moore",
      title: "Software Developer",
      age: "256",
    },
  ];
  skills = [
    {
      name: "Python",
      logo: "./assets/img/python_icon.png",
    },
    {
      name: "SQL",
      logo: "./assets/img/sqllogo.png",
    },
    {
      name: "CSS",
      logo: "./assets/img/csslogo.png",
    },
    {
      name: "Angular",
      logo: "./assets/img/Angular.png",
    },
    {
      name: "JavaScript",
      logo: "./assets/img/JavaScrippt.png",
    },
    {
      name: "HTML",
      logo: "./assets/img/html.png",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
