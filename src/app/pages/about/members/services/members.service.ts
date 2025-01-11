import { Injectable } from "@angular/core";

@Injectable()
export class MembersService {

  members = [{
    id: 1,
    name: "John Doe",
    position: "CEO",
    image: "https://formandosonhos.com.br/wp-content/uploads/2018/06/Julio.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    name: "John Doe",
    position: "CEO",
    image: "https://formandosonhos.com.br/wp-content/uploads/2018/06/Julio.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    name: "John Doe",
    position: "CEO",
    image: "https://formandosonhos.com.br/wp-content/uploads/2018/06/Julio.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    name: "Jane Doe",
    position: "CTO",
    image: "https://http2.mlstatic.com/D_NQ_NP_830104-MLB75617615921_042024-O.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 5,
    name: "Jane Doe",
    position: "CTO",
    image: "https://http2.mlstatic.com/D_NQ_NP_830104-MLB75617615921_042024-O.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 6,
    name: "John Smith",
    position: "CFO",
    image: "https://i.ytimg.com/vi/VOQ7OmKuz-M/hqdefault.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
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
