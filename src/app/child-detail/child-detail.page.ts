import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.page.html',
  styleUrls: ['./child-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel, CommonModule, FormsModule]
})
export class ChildDetailPage implements OnInit {
  childId: string | null = null;
  children = [ 
    {
      id: 1,
      name: 'Maria Clara',
      age: 1,
      vacinas: [
        {name: 'BCG', status: 'Tomada em 10-02-2025'},
        {name: 'Hepatite B', status: 'Tomada em 10-02-2025'},
        {name: 'Triplice Viral', status: 'Tomada em 10-02-2026'},
        {name: 'Pneumococica 10-valente', status: 'Tomada em 10-02-2026'},
        {name: 'Meningocócica C', status: 'Tomada em 10-02-2026'}
      ]
    },
    {
      id: 2,
      name: 'José Pedro',
      age: 5,
      vacinas: [
        {name: 'BCG', status: 'Tomada em 16-03-2021'},
        {name: 'Hepatite B', status: 'Tomada em 16-03-2021'},
        {name: 'Triplice Viral', status: 'Atrasada desde 16-03-2022'},
        {name: 'Pneumococica 10-valente', status: 'Tomada em 16-03-2022'},
        {name: 'Meningocócica C', status: 'Tomada em 16-03-2022'}
      ]
    },
    {
      id: 3,
      name: 'Alice Lima',
      age: 3,
      vacinas: [
        {name: 'BCG', status: 'Tomada em 05-05-2023'},
        {name: 'Hepatite B', status: 'Tomada em 05-05-2023'},
        {name: 'Triplice Viral', status: 'Tomada em 05-05-2023'},
        {name: 'Pneumococica 10-valente', status: 'Tomada em 05-05-2023'},
        {name: 'Meningocócica C', status: 'Tomada em 05-05-2023'},
        {name: 'DTP', status: 'Pendente'}
      ]
    }
  ]

  selectedChild: any = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.childId = this.route.snapshot.paramMap.get('id');
    const id = Number(this.childId);
    this.selectedChild = this.children.find(child => child.id === id);
    console.log(this.selectedChild);
  }

}
