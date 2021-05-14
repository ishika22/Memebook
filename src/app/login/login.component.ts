import { ViewChild,ElementRef,  Component, OnInit ,AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('id1') id1: ElementRef;
  @ViewChild('id2') id2: ElementRef;
  @ViewChild('id3') id3: ElementRef;
  register(){
   
    this.id1.nativeElement.style.left ="-400px";
    this.id2.nativeElement.style.left ="50px";
    this.id3.nativeElement.style.left ="110px";
 }
  login(){
    console.log(this.id1);
    console.log(this.id2);
    console.log(this.id3);
    this.id1.nativeElement.style.left ="50px";
    this.id2.nativeElement.style.left ="450px";
    this.id3.nativeElement.style.left ="0";
 }
 loginSubmit(){
  // this.router.navigate(['/home'])
 }
  constructor() { }

  ngOnInit(): void {
  }
}
