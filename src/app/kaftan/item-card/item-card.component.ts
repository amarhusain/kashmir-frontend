import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

  //  item=  {
  //   id: 101,
  //     imgUrl: 'assets/images/kaftan/kaft1.webp',
  //       name: 'Coral White Printed Georgette Kaftan',
  //         price: 200
  // }

}
