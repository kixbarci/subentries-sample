import { Component, OnInit } from '@angular/core';
import { UnusedService } from 'extensions';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css']
})
export class LazyLoadedComponent implements OnInit {

  constructor(protected usedService: UnusedService) { }

  ngOnInit(): void {
  }

}
