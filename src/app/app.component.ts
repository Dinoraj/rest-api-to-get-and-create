import { Component, VERSION } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  records:any;
    constructor(private service:CommonService){}
  ngOnInit() {
    console.log('parent');
    this.GetRecords();
  }

  GetRecords() {
    this.service.getData().subscribe((res:any)=>{
      if(res.data) {
        this.records = res.data;
console.log(res.data);
      }
    })
  }

  CreateUser(user:any) {
const payload = {
  name:user.first_name,
  job:user.email
}
this.service.CreateData(payload).subscribe((res:any)=>{
  if(res){
    console.log(res)
  }
})
  }
}
