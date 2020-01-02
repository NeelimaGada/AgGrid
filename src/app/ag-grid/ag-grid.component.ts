import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  rowData: any;
  Data1;
  grid: any;

  constructor(private Data: ServiceService) { }

  columnDefs = [
    { headerName: 'Title', field: 'title', sortable: true },
    { headerName: 'Url', field: 'url' },
    { headerName: 'Created_at', field: 'created_at', sortable: true },
    { headerName: 'Author', field: 'author', sortable: true },
  ];

  get_Data() {
    interval(10000).pipe(startWith(0), 
    switchMap(() => this.Data.get_Data())).
    subscribe(resp => {
      this.rowData = resp['hits'];
      console.log(this.rowData)
    })
  }

  RowData(a) {
    this.Data1 = a;
  }

  onRowClicked(event) {
    this.Data1 = JSON.stringify(event.node.data)
  }
  
  ngOnInit() {
    this.get_Data();
  }

}