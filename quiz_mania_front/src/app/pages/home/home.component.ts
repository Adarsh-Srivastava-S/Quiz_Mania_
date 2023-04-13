import { Component, OnInit ,HostListener} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if user has scrolled down more than 200px
    this.showScrollButton = window.pageYOffset > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}



