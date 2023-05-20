import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Topics';

  data = "Dhaval Chavda";

  // get()
  // {
  //   return "Get Function";
  // }

  // displayVal='';

  // getValue(val:string)
  // {
  //   console.log(val);
  //   this.displayVal=val;
  // }


  // name = 'dhaval';

  // disable = false;

  // show = "Dhaval";

  // color = "red";

  //Loops Aray & Objects

  Users = ['Dhaval', 'Parth', 'Haresh', 'Ankit', 'Niraj', 'Akash', 'Dhruv', 'Shahil'];

  UserDetails = [

    {name: 'Dhaval', email: 'Dhaval@gmail.com', Phone: '9909638648' },
    {name: 'Dhruv', email: 'Dhruv@gmail.com', Phone: '9909638669' },
    {name: 'Krutik', email: 'Krutik@gmail.com', Phone: '9909638650' },
    {name: 'Parth', email: 'Parth@gmail.com', Phone: '9909638645' },

  ]

}
