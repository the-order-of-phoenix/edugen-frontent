import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Module } from 'src/interfaces/module';
import { Topic } from 'src/interfaces/topic';


@Component({
  selector: 'app-topics-index',
  templateUrl: './topics-index.component.html',
  styleUrls: ['./topics-index.component.scss']
})
export class TopicsIndexComponent {
  @Output() selectedTopicChange: EventEmitter<Topic> = new EventEmitter<Topic>();
  @Input() courseName!:string;
  modules: Array<Module>=[
    {
      name: "harsheet",
      id: "1",
      topics: [
        {
          id: "1",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          `,
          topic: "Lorem ipsum 1"
        },
        {
          id: "2",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          `,
          topic: "Lorem ipsum 2"
        }
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
  openedModules: Module[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.selectedTopicChange.emit(this.modules[0].topics[0])
  }

  panelOpened(module: Module) {
    this.openedModules = [module];
  }

  selectTopic(topic: Topic){
    this.selectedTopicChange.emit(topic)
  }

}
