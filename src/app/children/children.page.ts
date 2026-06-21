import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel, CommonModule, FormsModule, RouterLink]
})
export class ChildrenPage implements OnInit {

  children = [
    { id: 1, 
      name: 'José Pedro', 
      age: 5,
      status: 'Vacinas em dia'
    },
    { id: 2,
      name: 'Luciana Ramos',
      age: 5,
      status: 'Pendente BCG'
    }
  ];
  constructor() { }
  
  ngOnInit() {
  }

}
