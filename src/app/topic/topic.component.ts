import { Component, Input, SimpleChanges } from '@angular/core';
import { Topic } from 'src/interfaces/topic';
import { TopicDocument } from 'src/interfaces/topic-document';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent {
  documents: TopicDocument[]=[
    {
      id: "1",
      type: "text",
      content: "some data"
    }
  ];
  handleSelectedTopic(topic:Topic){
    //TODO: call api get the appropriate document;

  }
}
