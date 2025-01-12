import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { Member } from "../../../../shared/models/member";
import { environment } from "../../../../../environments/environment.dev";

@Injectable(
  {
    providedIn: "root"
  }
)
export class MembersService {
  readonly API = `${environment.API}/members`;

  constructor(private http: HttpClient) {

  }

  getAllMembers() {
    return this.http.get<Member[]>(`${this.API}`);
  }

  getMemberById(id: string) {
    return this.http.get<Member>(`${this.API}/${id}`);
  }

  createMember(member: Member) {
    return this.http.post<Member>(`${this.API}`, member);
  }

  updateMember(member: Member) {
    return this.http.put<Member>(`${this.API}/${member.id}`, member);
  }

  deleteMember(id: string) {
    return this.http.delete<Member>(`${this.API}/${id}`);
  }

}
