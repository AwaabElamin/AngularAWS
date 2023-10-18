import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ResumeDataService } from './resume-data.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  title: string = "Awaab Elamin";
  public SavePDF(): void {
    var data: any = document.getElementById("content");
    console.log(data)
    html2canvas(data)
      .then(canvas => {
        var imgWidth = 200;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
        var position = 5;
        pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth, imgHeight)
        pdf.save('new-file.pdf'); // Generated PDF
      }
      );
  }
}
