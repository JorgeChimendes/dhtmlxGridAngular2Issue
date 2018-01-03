import { Component, OnInit } from '@angular/core';
import './types/dhtmlx.d.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public layout;
	public grid;
	public tabs;

	constructor() {} 

	ngOnInit(){
		this.layout = new dhtmlXLayoutObject({
			parent: document.getElementById('pnlGrid'),
			pattern: '3E'
		});

		this.layout.cells('a').setText('Section A');
		
		this.grid = this.layout.cells('a').attachGrid();
		this.grid.setHeader('Product,DesignersmVersion',',',[]);
		this.grid.setInitWidths('100,*,60');
		this.grid.init();
		this.grid.addRow(123, 'Office Chair,Alex Brown,11.2', -1);
	
		this.tabs = this.layout.cells('c').attachTabbar({});
		this.tabs.addTab(1, 'Users', 180, 0, true, false);
		this.tabs.addTab(2, 'Accessories', 180, 0, false, true);
	}
}
