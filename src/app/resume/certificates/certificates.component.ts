import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit{
  associate:string = "";
  certificates:string = "";
  constructor(private resumeDataService: ResumeDataService){}
  ngOnInit(): void {
    this.getCertificates();
  }
  getCertificates():void{
    // this.resumeDataService.getResume()
    // .subscribe(data => {
    //   // this.associate = data.Certificate.Associate;
    //   // this.certificates = data.Certificate.Certificates;
    //   // console.log("Data", this.associate.split(',')[3]);
    // })
  }

}
