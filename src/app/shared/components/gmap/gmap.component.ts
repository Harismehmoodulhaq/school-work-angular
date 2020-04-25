import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
//https://morioh.com/p/11d933ad6801
//https://www.logologo.com/pre-download.php
//https://sleepy-wildwood-25736.herokuapp.com/
//https://console.cloud.google.com/apis/credentials?project=gmap-275306&supportedpurview=project
//https://codemeals.com/angular-tutorials/deploy-angular-7-app-to-heroku/
@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {
  @ViewChild('mapRef', {static: true }) mapElement: ElementRef;
  //google api key Gmap app
  private API_KEY = "AIzaSyDY4eVxxmc3XtJvSqtbXgkJh3OJ1R4XDPE"
  @Input() options: any;
  constructor() { }

  ngOnInit(): void {
  }
  renderMap() {

    window['initMap'] = () => {
      this.loadMap();     
    }
    if(!window.document.getElementById('google-map-script')) {
      var s = window.document.createElement("script");
      s.id = "google-map-script";
      s.type = "text/javascript";
      s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDRmqZ-1VD-DbsccElMGtMtlRz9FndbPB4&amp;callback=initMap";
  
      window.document.body.appendChild(s);
    } else {
      this.loadMap();
    }
  }

}
