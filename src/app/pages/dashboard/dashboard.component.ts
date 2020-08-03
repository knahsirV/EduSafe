import { Component, OnInit } from '@angular/core';
import { NewsService } from './../news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  markers = [
    {place: 'Collinwood School Fire', description: 'The Collinwood school fire (also known as the Lakeview School fire) erupted on March 4, 1908, killing 172 students, two teachers and one rescuer in one of the deadliest school disasters in United States history.', 
      latitude: 41.553143, longitude: -81.574253 },
    {place: 'Tornado outbreak sequence of May 21–26, 2011', description: 'Was one of the largest and deadliest U.S. outbreaks on record. A catastrophic, multiple-vortex, rain-wrapped EF5 tornado on May 22 killed 158 people in Joplin, Missouri—the deadliest single tornado in the U.S. since the 1947 Glazier–Higgins–Woodward tornado which killed 181', 
      latitude: 37.078059, longitude:  -94.512481 },
    {place: 'Ridgecrest earthquakes', description: 'The 2019 Ridgecrest earthquakes (more commonly referred to in scientific literature as the 2019 Ridgecrest earthquake sequence) of July 4 and 5 occurred north and northeast of the town of Ridgecrest, California and west of Searles Valley (approximately 200 km [122 mi] north-northeast of Los Angeles).', 
      latitude: 35.627151, longitude: -117.671883 },
    ];

    place: '';
    desicription: '';

    mArticles: Array<any>;

    placeMarker(position: any) {
    const lat = position.coords.lat;
    const lng = position.coords.lng;

    this.markers.push({place: this.place, description: this.desicription, latitude: lat, longitude: lng });
  }

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.fetchNews().subscribe(data => this.mArticles = data['articles']);
  }

}
