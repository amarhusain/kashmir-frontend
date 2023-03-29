import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-kaftan-dashboard',
	templateUrl: './kaftan-dashboard.component.html',
	styleUrls: ['./kaftan-dashboard.component.scss']
})
export class KaftanDashboardComponent implements OnInit {


	parvar = 'Initial value in parent';
	count = 0;

	constructor() { }

	ngOnInit(): void {
	}

	itemList = [
		{
			id: 101,
			imgUrl: 'assets/images/kaftan/kaft1.webp',
			name: 'Coral White Printed Georgette Kaftan',
			price: 200
		},
		{
			id: 102,
			imgUrl: 'assets/images/kaftan/kaft2.webp',
			name: 'White Pink Printed Cotton Kaftan With Pants - Set Of 2',
			price: 250
		},
		{
			id: 103,
			imgUrl: 'assets/images/kaftan/kaft3.webp',
			name: 'Yellow White Printed Georgette Kaftan',
			price: 400
		},
		{
			id: 104,
			imgUrl: 'assets/images/kaftan/kaft1.webp',
			name: 'Coral White Printed Georgette Kaftan',
			price: 600
		},
		{
			id: 105,
			imgUrl: 'assets/images/kaftan/kaft2.webp',
			name: 'White Pink Printed Cotton Kaftan With Pants - Set Of 2',
			price: 850
		},
		{
			id: 106,
			imgUrl: 'assets/images/kaftan/kaft3.webp',
			name: 'Yellow White Printed Georgette Kaftan',
			price: 100
		},
		{
			id: 101,
			imgUrl: 'assets/images/kaftan/kaft1.webp',
			name: 'Coral White Printed Georgette Kaftan',
			price: 200
		},
		{
			id: 102,
			imgUrl: 'assets/images/kaftan/kaft2.webp',
			name: 'White Pink Printed Cotton Kaftan With Pants - Set Of 2',
			price: 250
		},
		{
			id: 103,
			imgUrl: 'assets/images/kaftan/kaft3.webp',
			name: 'Yellow White Printed Georgette Kaftan',
			price: 400
		},
		{
			id: 104,
			imgUrl: 'assets/images/kaftan/kaft1.webp',
			name: 'Coral White Printed Georgette Kaftan',
			price: 600
		},
		{
			id: 105,
			imgUrl: 'assets/images/kaftan/kaft2.webp',
			name: 'White Pink Printed Cotton Kaftan With Pants - Set Of 2',
			price: 850
		},
		{
			id: 106,
			imgUrl: 'assets/images/kaftan/kaft3.webp',
			name: 'Yellow White Printed Georgette Kaftan',
			price: 1000
		}
	]


	getChildData(event: any) {
		this.parvar = event + this.count;
		this.count++;
	}

}
