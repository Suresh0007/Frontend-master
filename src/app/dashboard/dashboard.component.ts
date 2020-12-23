import { Component, OnInit, NgZone } from '@angular/core';
import { APIService } from '../_services/api.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource: any;
  selectedSlice = 'none';
  chart: any;
  closeResult = '';

  org;
  query = '';

  width = 600;
  height = 400;
  type = 'pyramid';
  dataFormat = 'json';
  constructor(private zone: NgZone,
              // tslint:disable-next-line:variable-name
              private _apiservice: APIService,
              private modalService: NgbModal) {

    this.dataSource = {
      chart: {
          caption: "Acuracy Chat",
          plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
          showLegend: "1",
          showPercentValues: "1",
          legendPosition: "bottom",
          useDataPlotColorForLabels: "1",
          enablemultislicing: "0",
          showlegend: "0",
          theme: "fusion",
      },
      data: [{
          label: "Apache",
          value: "32647479"
      }, {
          label: "Microsoft",
          value: "22100932"
      }, {
          label: "Zeus",
          value: "14376"
      }, {
          label: "Other",

          value: "18674221"
      }]
    };
  // tslint:disable-next-line:align
  this.dataSource = {
      chart: {
          caption: "Acuracy Chat",
          plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
          showLegend: "1",
          showPercentValues: "1",
          legendPosition: 'bottom',
          useDataPlotColorForLabels: "1",
          enablemultislicing: "0",
          showlegend: "0",
          theme: "fusion",
      },
      data: [{
          label: "Apache",
          value: "32647479"
      }, {
          label: "Microsoft",
          value: "22100932"
      }, {
          label: "Zeus",
          value: "14376"
      }, {
          label: "Other",
          value: "18674221"
      }]
    };

    const data = {
      chart: {
        theme: "fusion",
        caption: "The Global Wealth Pyramid",
        subcaption: "Credit Suisse 2017",
        showvalues: "1",
        numbersuffix: " trn",
        numberprefix: "$",
        plottooltext:
          "<b>$label</b> of world population owns <b>$dataValue</b> of global wealth",
        is2d: "0"
      },
      data: [
        {
          label: 'Top 32M',
          value: '128.7'
        },
        {
          label: "Next 391M",
          value: "111.4"
        },
        {
          label: "Next 1054M",
          value: "32.5"
        },
        {
          label: "Last 3474M",
          value: "7.6"
        }
      ]
    };
  }



  // tslint:disable-next-line:typedef
  initialized($event){
    this.chart = $event.chart;
  }

  // tslint:disable-next-line:typedef
  onRadioOptionChange(option){
    this.selectedSlice = option;
    this.dataSource.data.forEach((d, index) => {
      if (option === 'none'){
        this.chart.slicePlotItem(index, false);
      } else if (option === d.label.toLowerCase()){
        this.chart.slicePlotItem(index, true);
      }
    });
  }

  // tslint:disable-next-line:typedef
  getLabel(index){
    return this.dataSource.data[index].label;
  }

  // tslint:disable-next-line:typedef
  dataplotClick($event){
    const dataIndex = $event.dataObj.dataIndex;
    const isSliced = $event.dataObj.isSliced;
    this.zone.run(() => {
      this.selectedSlice = isSliced ? 'none' : this.getLabel(dataIndex).toLowerCase();
    });
  }

  // tslint:disable-next-line:typedef
  editDetails(yu){
    console.log(yu);
  }

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

// tslint:disable-next-line:typedef
remove(id: number, index: number) {
         this.org.splice(index, 1);
 }

  ngOnInit(): void {
this.org = this._apiservice.data;
console.log(this._apiservice.data);
  }

}
