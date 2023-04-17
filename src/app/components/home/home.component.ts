import { Component, OnInit } from '@angular/core';
import { UsedService } from '../../services/used.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(protected usedService: UsedService) { }

  ngOnInit(): void {
  }

}
