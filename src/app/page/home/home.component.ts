import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';
// import icon from '../../../assets/'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 

  constructor()
  {

  }
async ngOnInit() {}
 cards = [
  { title: 'Card 1', description: 'Description for Card 1',src:'../../../assets/cart1.jpg'  },
  { title: 'Card 2', description: 'Description for Card 2',src:'../../../assets/cart2.jpg' },
  { title: 'Card 3', description: 'Description for Card 3',src:'../../../assets/cart3.jpg' },
  { title: 'Card 4', description: 'Description for Card 4',src:'../../../assets/cart4.jpg' },
  { title: 'Card 5', description: 'Description for Card 5',src:'../../../assets/cart5.jpg' },
  { title: 'Card 6', description: 'Description for Card 6',src:'../../../assets/cart6.jpg' },
  { title: 'Card 7', description: 'Description for Card 7',src:'../../../assets/cart7.jpg' },
  { title: 'Card 8', description: 'Description for Card 8',src:'../../../assets/cart8.jpg' },
  { title: 'Card 9', description: 'Description for Card 9',src:'../../../assets/cart9.jpg' },
  { title: 'Card 10', description: 'Description for Card 10', src:'../../../assets/cart10.jpg' },
 
];



}
