import { Component } from '@angular/core';
import { useCase } from '../Models/useCase';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.css']
})
export class UseCasesComponent {
  public useCase: useCase= {
    id : this.router.snapshot.params['id'],
    title : "Enter the goal of the use case - preferably as a short, active verb phrase",
    description : 'Describe the goal and context of this use case. This is usually an expanded version of what you entered in the Title field.',
    PrimaryActor : "A person or a software/hardware system that interacts with your system to achieve   the goal of this use case.",
    Preconditions : "Describe the state the system is in before the first event in this use case.",
    postCondition : "Describe the state the system is in after all the events in this use case have taken place.",
    mainSuccessScenario : "Describe the flow of events from preconditions to postconditions, when nothing goes wrong. This is the meat of the use case.",
    extensions : "Describe all the other scenarios for this use case - including exceptions and error cases.",
    frequencyOfUse : "How often will this use case be used?",
    status : "Development status.",
    owner : "Who owns this use case, in your project team?",
    priority : "Priority of this use case"
  }
  constructor( private router: ActivatedRoute) {
    console.log(router.snapshot.params['id']);
    
  }
}
