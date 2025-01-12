import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

import { MembersService } from "./services/members.service";
import { Member } from '../../../shared/models/member';
import { SocialMediaComponent } from "../../../shared/components/social-medias/social-media.component";

@Component({
  selector: "members-component",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"],
  standalone: true,
  imports: [CommonModule, HttpClientModule, SocialMediaComponent],
  providers: [MembersService]
})
export class MembersComponent implements OnInit {
  members!: Member[];

  constructor(private _service: MembersService) { }

  ngOnInit(): void {
    this._service.getAllMembers().subscribe(data => this.members = data);
    console.log(this.members);
  }
}
