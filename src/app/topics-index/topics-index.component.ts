import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Module } from 'src/interfaces/module';


@Component({
  selector: 'app-topics-index',
  templateUrl: './topics-index.component.html',
  styleUrls: ['./topics-index.component.scss']
})
export class TopicsIndexComponent {
  @Output() selectedTopicChange: EventEmitter<Module> = new EventEmitter<Module>();
  topics: Array<Module>=[
    {
      name: "harsheet",
      id: "1",
      topics: [

      ]
    },
    {
      name: "harsheet2",
      id: "2",
      topics: [

      ]
    },
    {
      name: "harsheet3",
      id: "3",

      topics: [

      ]
    },
    {
      name: "harsheet4",
      id: "4",
      topics: [

      ]
    },
  ];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.selectedTopicChange.emit(this.topics[0])
  }
  selectTopic(topic: Module){
    this.selectedTopicChange.emit(topic)
  }

}
