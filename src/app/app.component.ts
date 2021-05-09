import { Component } from '@angular/core';

export interface Student Info{
  No.: number;
  Name: string;
  Roll No.: number;
  Department: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebCon';


headers = ["No.", "Name", "Roll No.", "Department"];

rows = [
  
  {
    "No."  : "1",
    "Name" : "A",
    "Roll No." : "200010001",
    "Department" : "Aerospace Engineering"
  },

  {
    "No."  : "2",
    "Name" : "B",
    "Roll No." : "200020001",
    "Department" : "Biotech Engineering"
  },

  {
    "No."  : "3",
    "Name" : "C",
    "Roll No." : "200030001",
    "Department" : "Chemical Engineering"
  },

  {
    "No."  : "4",
    "Name" : "D",
    "Roll No." : "200040001",
    "Department" : "Civil Engineering"
  },

  {
    "No." : "5",
    "Name" : "E",
    "Roll No." : "200050001",
    "Department" : "Computer Science Engineering"
  },

];

}
