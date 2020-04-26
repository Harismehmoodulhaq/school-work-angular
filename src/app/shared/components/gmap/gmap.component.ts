import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
//https://morioh.com/p/11d933ad6801
//https://www.logologo.com/pre-download.php
//https://sleepy-wildwood-25736.herokuapp.com/
//https://console.cloud.google.com/apis/credentials?project=gmap-275306&supportedpurview=project
//https://codemeals.com/angular-tutorials/deploy-angular-7-app-to-heroku/

//https://radiant-sea-45535.herokuapp.com/ | https://git.heroku.com/radiant-sea-45535.git

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {
  @ViewChild('mapRef', {static: true }) mapElement: ElementRef;
  //google api key Gmap app
  private API_KEY = "AIzaSyDFsPlP4VHtnGRx8X-XULmCLB_wcjG15Sc";
  @Input() options: any;
  constructor() {
    debugger;
   }

  ngOnInit(): void {
    debugger;
    this.renderMap()
  }
  loadScript (id: string, url: string) {
    const s = window.document.createElement("script");
      s.id = id;
      s.type = "text/javascript";
      s.src = url;
  
      window.document.body.appendChild(s);
  }
  renderMap() {

    window['initMap'] = () => {
      this.loadMap();     
    }
    if(!window.document.getElementById('google-map-script')) {
      this.loadScript ("google-map-script",`https://maps.googleapis.com/maps/api/js?key=${this.API_KEY};callback=initMap`);
    } else {
      this.loadMap();
    }
  }
  loadMap = () => {
    const map = new window['google'].maps.Map(this.mapElement.nativeElement, {
      center: {lat: 24.5373, lng: 81.3042},
      zoom: 8
    });
  
    const marker = new window['google'].maps.Marker({
      position: {lat: 24.5373, lng: 81.3042},
      map: map,
      title: 'Hello World!',
      draggable: true,
      animation: window['google'].maps.Animation.DROP,
    });
  
    const contentString = `<div id="content">
    <div id="siteNotice">
    </div>
    <h3 id="thirdHeading" class="thirdHeading">W3path.com</h3>
    <div id="bodyContent">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    </div>`;
  
    const infowindow = new window['google'].maps.InfoWindow({
      content: contentString
    });
  
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
  
  }

}
