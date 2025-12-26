import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from "../shared/card/card";

@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}

