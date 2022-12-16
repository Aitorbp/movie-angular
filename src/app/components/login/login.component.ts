import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, User } from 'src/app/services/login.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: Array<User> = [];
  pass: string = "";
  user = new User;
  showRegister : boolean = false;





  constructor( private readonly loginService: LoginService,private router: Router) { }

  ngOnInit(): void { 

    this.loginService.getUser().subscribe(data => {
      this.users = data;
    });

    
 
  }

  loginUser(pass: String) { 
   if(this.users.filter(x => x.password ==  pass)[0]) {
    this.user = this.users.filter(x => x.password ==  pass)[0];
    this.goToMainLogUser(this.user);
   } else {
      console.log("No eres login");
   }
    
  }

  registerUser(user: string, password: string, active: boolean, id: string) {

    const data: User = {
      "user": user,
      "password":password,
      "active": active,
      "id": id
    }

   this.loginService.postUser(data).subscribe(res => {
    this.goToMainLogUser(res);
    })
  }

  showingRegister() {
    this.showRegister = true;
  }

 

  goToMainLogUser(user: User) {
    this.router.navigate(['main'],  {queryParams: {user: user.user, active: user.active}});
  }

  goToMainNoLogUser() {
    this.router.navigate(['main'],  {queryParams: {user: null, active: false}});
  }
}
