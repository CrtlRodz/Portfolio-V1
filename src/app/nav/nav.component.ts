import { Component, OnInit } from "@angular/core";
import { ModalService } from "../services/modal.service";
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
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
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}

  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggleModal("auth");
    this.modal.toggleModal("experience");
  }
}
