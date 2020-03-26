import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'core-gui';
  testTitle: string;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.getTest().subscribe(data => {
      this.testTitle = data;
    });
  }
}
