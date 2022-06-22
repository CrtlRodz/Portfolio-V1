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
      age: "25",
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
  goals = [
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
  socialMedia = [
    {
      Name: "Hackerrack",
      URL: "https://www.hackerrank.com/carianne_rodz",
      logo: "../assets/hackerrank_icon.png",
    },
    {
      Name: "Github Profile",
      URL: "https://github.com/CrtlRodz",
      logo: "../assets/github_icon.svg",
    },
    {
      Name: "LinkedIn Profile",
      URL: "https://www.linkedin.com/in/cari-anne-moore-36163111a/",
      logo: "../assets/linkedinIcon.svg",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
