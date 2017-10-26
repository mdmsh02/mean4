import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'message',
    template: `
    <div *ngFor="let message of apiService.messages">
        <mat-card>{{message.message}}</mat-card>
    </div>
  `
})
export class MessageComponent implements OnInit {

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getMessages();
    }
}
