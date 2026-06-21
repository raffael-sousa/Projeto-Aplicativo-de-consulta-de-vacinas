import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone'; 

@Component({ 
  selector: 'app-campaigns', 
  templateUrl: './campaigns.page.html', 
  styleUrls: ['./campaigns.page.scss'], 
  standalone: true, 
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel, CommonModule, FormsModule] 
}) 

export class CampaignsPage implements OnInit {
   campaigns = [ 
    { titulo: 'Campanha de Vacinação contra a Poliomielite', 
      alvo: 'Crianças de 0 a 5 anos', 
      descricao: 'A campanha de vacinação contra a poliomielite tem como objetivo imunizar crianças de 0 a 5 anos contra a doença, prevenindo a paralisia infantil e outras complicações graves.', 
      status: 'Ativa' 
    }, 
    
    { titulo: 'Campanha de Vacinação contra a Sarampo', 
      alvo: 'Crianças de 1 a 10 anos', 
      descricao: 'A campanha de vacinação contra o sarampo tem como objetivo imunizar crianças de 1 a 10 anos contra a doença, prevenindo complicações graves e surtos da doença.', 
      status: 'Encerrada' 
    } 
  ]; 
  constructor() { } 
  
  ngOnInit() { 
  } 
}