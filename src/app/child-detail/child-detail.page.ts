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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.childId = this.route.snapshot.paramMap.get('id');
    console.log('ID da Criança:', this.childId);
  }

}
