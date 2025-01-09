import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "members-component",
  templateUrl: "./members.component.html",
  styleUrl: "./members.component.scss",
  standalone: true,
  imports: [CommonModule]
})
export class MembersComponent {
  members = [{
    name: "John Doe",
    position: "CEO",
    image: "https://formandosonhos.com.br/wp-content/uploads/2018/06/Julio.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "John Doe",
    position: "CEO",
    image: "https://formandosonhos.com.br/wp-content/uploads/2018/06/Julio.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "John Doe",
    position: "CEO",
    image: "https://formandosonhos.com.br/wp-content/uploads/2018/06/Julio.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Jane Doe",
    position: "CTO",
    image: "https://http2.mlstatic.com/D_NQ_NP_830104-MLB75617615921_042024-O.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Jane Doe",
    position: "CTO",
    image: "https://http2.mlstatic.com/D_NQ_NP_830104-MLB75617615921_042024-O.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "John Smith",
    position: "CFO",
    image: "https://i.ytimg.com/vi/VOQ7OmKuz-M/hqdefault.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
  }]

}
