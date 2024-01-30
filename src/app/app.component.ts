import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Topics';

  // data = "Dhaval Chavda";

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

  //////////////////////////////////////////////////////////////  Loops Array & Objects  ///////////////////////////////////////////////////////////////////////////////////////


  // Users = ['Dhaval', 'Parth', 'Haresh', 'Ankit', 'Niraj', 'Akash', 'Dhruv', 'Shahil'];

  // UserDetails = [

  //   {name: 'Dhaval', email: 'Dhaval@gmail.com', Phone: '9909638648' },
  //   {name: 'Dhruv', email: 'Dhruv@gmail.com', Phone: '9909638669' },
  //   {name: 'Krutik', email: 'Krutik@gmail.com', Phone: '9909638650' },
  //   {name: 'Parth', email: 'Parth@gmail.com', Phone: '9909638645' },

  // ]


  ////////////////////////////////////////////////////////////////   Nested Loops  ////////////////////////////////////////////////////////////////////////////////////

  // users = [
  //     {name:'Dhaval', phone:'2112' , socialAccounts: ['Whats Up','faceBook','Instagram']},
  //     {name:'Dhruv', phone:'3333' , socialAccounts: ['Youtube','faceBook','Instagram']},
  //     {name:'Haresh', phone:'4444' , socialAccounts: ['Whats Up','Linkedin','Instagram']},
  //     {name:'Akash', phone:'5555' , socialAccounts: ['Whats Up','faceBook','Instagram']},
  // ]


  ////////////////////////////////////////////////////////////////////  style binding  ///////////////////////////////////////////////////////////////////////////

  // color="red";
  // bgcolor = "green";

  // updateColor()
  // {
  //   this.color='blue';
  //   this.bgcolor="black";

  // }


  ///////////////////////////////////////////////////////////////// Basic Form /////////////////////////////////////////////////////////////////////////////


  // userData:any={};

  // getData(data:any)
  // {
  //   console.log(data);
  //   this.userData=data;
  // }

  ////////////////////////////////////////////////////////////////  Toggle Element  ///////////////////////////////////////////////////////////////////

  // display=true;

  // toggle(){
  //   this.display=!this.display;
  // }



  ////////////////////////////////////////////////////////////////  Make Simple TO-DO  ///////////////////////////////////////////////////////////////////


  // list: any[] = [];

  // addTask(item: string) {

  //   this.list.push({ id: this.list.length, name: item });

  // }

  // Remove(id: number) {
  //   this.list = this.list.filter(item => item.id !== id)
  // }

  ////////////////////////////////////////////////////////////// Two way Binding  ///////////////////////////////////////////////////////////////////////////////

  // nm:any;


  ///////////////////////////////////////////////////////////////////////// Template Reference Variable //////////////////////////////////////////////////////////
  // show: any;
  // getVal(item: any) {
  //   // console.log(item);
  //   this.show = item;

  // }


  // =================================================================== Basic Types Of Types Script =============================================================


  // data:{name:string, age:number}={name:'Dhaval', age:21};
  // item:string[]=["hello","hii","heyy"];


  // getData(item:number[])
  // {
  //     if(typeof item === "number")
  //     {
  //       return item*20;
  //     }
  // }


  // date = Date();


  // name:string = "Dhaval Chavda";

  // name2 = {
  //   name:'Dhaval', age:21
  // }


  /////////////////////////////////////////////////////////////////// Template Driven Form  /////////////////////////////////////////////////////////////////////////

  // userLogin(item:any){
  //   console.log(item);
  // }


  ////////////////////////////////////////////////////////////////   Reactive Form [important]  ///////////////////////////////////////////////////////////////////


  // loginForm = new FormGroup({

  //   user:new FormControl(''),
  //   password:new FormControl('')

  // })

  // loginUser()
  // {
  //   console.log(this.loginForm.value);
  // }

  ////////////////////////////////////////////////////////////////  Reactive Form Validations [important]  /////////////////////////////////////////////////////////////////


  // loginFormValidation = new FormGroup({

  //   user:new FormControl('', [Validators.required, Validators.email]),
  //   password:new FormControl('', [Validators.required,Validators.minLength(5)])

  // })

  // loginUser()
  // {
  //   console.log(this.loginFormValidation.value);
  // }

  // get user(){

  //   return this.loginFormValidation.get('user');
  // }
  // get password()
  // {
  //   return this.loginFormValidation.get('password');
  // }
  // showData(show:string)
  // {
  //   console.log(show);
  // }


}

