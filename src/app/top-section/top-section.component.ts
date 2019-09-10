import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})
export class TopSectionComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Input() isSingle: boolean = false;
  @Input() isHome: boolean = false;
  repositoryLink: string;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.repositoryLink = this.globalService.repositoryLink;
  }

}
