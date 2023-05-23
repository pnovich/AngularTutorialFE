import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';


@Component({
  selector: 'app-delete-tutorial',
  templateUrl: './delete-tutorial.component.html',
  styleUrls: ['./delete-tutorial.component.css']
})
export class DeleteTutorialComponent implements OnInit{
  id : any;
//   tutorial: Tutorial = {
//     title: '',
//     description: '',
//     published: false
//   };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  deleteTutorial(): void {
//     const data = {
//       title: this.tutorial.title,
//       description: this.tutorial.description
//     };
    const id = this.id;

    this.tutorialService.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

//   newTutorial(): void {
//     this.submitted = false;
//     this.tutorial = {
//       title: '',
//       description: '',
//       published: false
//     };


}
