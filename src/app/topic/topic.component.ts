import { Component, Input, SimpleChanges } from '@angular/core';
import { Module } from 'src/interfaces/module';
import { Topic } from 'src/interfaces/topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent {
  selectedDocument !:Module;
  documents: Topic[]=[
    {
      id: "1",
      type: "text",
      content: "some data"
    }
  ];

  handleSelectedTopic(topic:Module){
    //TODO: call api get the appropriate document;
    this.selectedDocument = topic;
  }
}
