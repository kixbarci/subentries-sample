import { Component, OnInit } from '@angular/core';
import { LargeService } from 'src/app/services/large.service';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css']
})
export class LazyLoadedComponent implements OnInit {

  constructor(protected largeService: LargeService) { }

  ngOnInit(): void {
  }

}
