import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MembersService } from "./services/members.service";

@Component({
  selector: "members-component",
  templateUrl: "./members.component.html",
  styleUrl: "./members.component.scss",
  standalone: true,
  imports: [CommonModule],
  providers: [MembersService]
})
export class MembersComponent implements OnInit {
  members: any;
  constructor(private _service: MembersService) {

  }

  ngOnInit(): void {
    this.members = this._service.getAllMembers();
  }


}
