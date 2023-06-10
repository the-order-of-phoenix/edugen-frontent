import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Topic } from 'src/interfaces/topic';


@Component({
  selector: 'app-topics-index',
  templateUrl: './topics-index.component.html',
  styleUrls: ['./topics-index.component.scss']
})
export class TopicsIndexComponent {
  @Output() selectedTopicChange: EventEmitter<Topic> = new EventEmitter<Topic>();
  topics: Array<Topic>=[
    {
      name: "harsheet",
      id: "1"
    },
    {
      name: "harsheet",
      id: "2"
    },
    {
      name: "harsheet",
      id: "3"
    },
    {
      name: "harsheet",
      id: "4"
    },
  ];
  selectTopic(topic: Topic){
    this.selectedTopicChange.emit(topic)
  }

}
