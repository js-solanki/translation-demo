import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  user = {
    firstName: '',
    lastName: '',
    email: ''
  };

  onSubmit() {
    // Handle the form submission, e.g., send the data to the server
    console.log('User Data:', this.user);
  }
}
