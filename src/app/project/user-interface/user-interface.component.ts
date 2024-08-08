import { Component } from '@angular/core';
import { color } from 'html2canvas/dist/types/css/types/color';
import { ProjectsServicesService } from '../projects-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { uiData } from '../Models/uiData';


@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent {
  constructor(private ProjectService: ProjectsServicesService, private rout: Router,private router: ActivatedRoute,) { }
  userInterfaceData: uiData = {
    title: {
      size: "10px",
      color: "black",
      content: "test"
    },
    inputs: {
      size: 0,
      color: "black",
      content: ""
    },
    views: {
      size: 0,
      color: "black",
      content: ""
    }
  }
  colorViewsChanged(e: any) {
    this.userInterfaceData.views.color = e.target.value;
    console.log("color view=", this.userInterfaceData.views.color);
  }
  colorInputsChanged(e: any) {
    this.userInterfaceData.inputs.color = e.target.value;
    console.log("color inputs=", this.userInterfaceData.inputs.color);
  }
  colorTitleChanged(e: any) {
    this.userInterfaceData.title.color = e.target.value;
    console.log("color title=", this.userInterfaceData.title.color);
  }
  contentViewsChanged(e: any) {
    this.userInterfaceData.views.content = e.target.value;
    console.log("content view=", this.userInterfaceData.views.content);
  }
  contentInputsChanged(e: any) {
    this.userInterfaceData.inputs.content = e.target.value;
    console.log("content inputs=", this.userInterfaceData.inputs.content);
  }
  contentTitleChanged(e: any) {
    this.userInterfaceData.title.content = e.target.value;
    console.log("content title=", this.userInterfaceData.title.content);
  }
  sizeViewChanged(e: any) {
    this.userInterfaceData.views.size = e.target.value;
    console.log("size view=", this.userInterfaceData.views.size);
  }
  sizeInputsChanged(e: any) {
    this.userInterfaceData.inputs.size = e.target.value;
    console.log("size Inputs=", this.userInterfaceData.inputs.size);
  }
  sizeTitleChanged(e: any) {
    this.userInterfaceData.title.size = e.target.value;
    console.log("size Title=", this.userInterfaceData.title.size);
  }
  btnClicked(e:any) {
    e.preventDefault();
    console.log("btnClicked()");
    this.ProjectService.updateUI(this.router.snapshot.params['id'],this.userInterfaceData)
    .subscribe(data => {
      data.status === 'success'
      ? this.updateUiData(data.message)
      : console.log("error", data);
    })
    
  }
  updateUiData( message: any) {
    // console.log("message data", message);
    this.userInterfaceData.title.content = message.title;
    this.userInterfaceData.title.size = message.titleSize;
    this.userInterfaceData.title.color = message.titleColor;
  
    this.userInterfaceData.inputs.content = message.inputsContent;
    this.userInterfaceData.inputs.size = message.inputsSize;
    this.userInterfaceData.inputs.color = message.inputsColor;
  
    this.userInterfaceData.views.content = message.viewsContent;
    this.userInterfaceData.views.size = message.viewsSize;
    this.userInterfaceData.views.color = message.viewsColor;
  
    console.log("updated user interface", this.userInterfaceData);
    // window.location.reload();
  }
}


