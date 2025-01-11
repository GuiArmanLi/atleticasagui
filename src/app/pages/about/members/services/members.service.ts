import { Injectable } from "@angular/core";

@Injectable()
export class MembersService {

  members = [{
    id: 1,
    name: "John Doe",
    position: "CEO",
    image: "https://picsum.photos/200/300",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    name: "John Doe",
    position: "CEO",
    image: "https://picsum.photos/200/300",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    name: "John Doe",
    position: "CEO",
    image: "https://picsum.photos/200/300",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    name: "Jane Doe",
    position: "CTO",
    image: "https://picsum.photos/200/300",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 5,
    name: "Jane Doe",
    position: "CTO",
    image: "https://picsum.photos/200/300",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 6,
    name: "John Smith",
    position: "CFO",
    image: "https://picsum.photos/200/300",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
  }]

  getAllMembers() {
    return this.members;
  }

  getMemberById(id: number) {
  }

  saveMember(member: any) {
    return null;
  }

  updateMember(member: any) {
    return null;
  }

  deleteMember(id: number) {
    return null;
  }
}
