import { Component, Input, SimpleChanges } from '@angular/core';
import { Module } from 'src/interfaces/module';
import { Topic } from 'src/interfaces/topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent {
  selectedDocument !:Topic;
  documents: Topic[]=[
    {
      id: "1",
      topic: "some data",
      text: "lorem ipsum"
    }
  ];

  handleSelectedTopic(topic:Topic){
    //TODO: call api get the appropriate document;
    this.selectedDocument = topic;
  }
}
