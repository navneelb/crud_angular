import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import{UserDataService} from '../services/user-data.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent {
  constructor(private userData:UserDataService){
 
  }
  ngOnInit(){
    this.getUsers();
   }
   getUsers(){
    this.userData.users().subscribe((dat)=>{
      console.log("data" ,dat);
      this.users=dat
    })
  }
  rows: any[] = [];
  id:any
  users:any

  loginForm = new FormGroup({
    id: new FormControl(),
    Name: new FormControl(),
    Email: new FormControl(),
    Phone: new FormControl(),
    Address: new FormControl(),
    Password: new FormControl(),
  })
  





// Function of Creating 
save(data:any){
  if(data.id===null){
    this.userData.create(data).subscribe((d)=>{
      this.getUsers();
    })
  }
  else{
    this.userData.edit(data.id,data).subscribe((d)=>{
      this.getUsers();
    })
  }
 
  this.loginForm.reset();
}



  
  // save(data: any) {
    
  //   if(data.id==null){
  //     this.rows.push({ id: this.rows.length, Name: data.Name, Email: data.Email, Phone: data.Phone, Address: data.Address, Password: data.Password });
  //   }
  //   else{
  //     this.id=this.rows.findIndex(x=>x.id==data.id)
  //     this.rows.splice(this.id,1,data)
  //   }
  //   console.log(this.rows);
  //   this.loginForm.reset();
  // }

  // Function Deleting Data
  deleteUser(id: any,) {
    this.userData.delete(id).subscribe((d)=>{
    this.getUsers();
    })
  }
data:any
index:any
  // Function  Editing Table Date
  updateUser(id: any) {
    this.index=this.users.findIndex((x)=>x.id==id);
    this.data=this.users[this.index];
    this.loginForm.controls["id"].setValue(this.data.id);
    this.loginForm.controls["Name"].setValue(this.data.name);
    this.loginForm.controls["Email"].setValue(this.data.email);
    this.loginForm.controls["Phone"].setValue(this.data.phone);
    this.loginForm.controls["Address"].setValue(this.data.address);
    this.loginForm.controls["Password"].setValue(this.data.password);
    console.log(this.data);
  }

}
