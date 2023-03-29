import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: any;

  @Output() chname = new EventEmitter();


  name = "I'm from child";

  constructor() { }

  ngOnInit(): void {
  }

  onSendBtnClick() {
    this.chname.emit(this.name);
  }

}
