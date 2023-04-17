import { Component, OnInit } from '@angular/core';
import { UsedService } from 'src/app/services/used.service';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css']
})
export class LazyLoadedComponent implements OnInit {

  constructor(protected usedService: UsedService) { }

  ngOnInit(): void {
  }

}
