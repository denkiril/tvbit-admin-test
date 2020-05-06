import { Component, OnInit } from '@angular/core';

import { GetApiService } from 'src/app/get-api.service';
import { ServerService } from '../server.service';

declare var ymaps: any;

@Component({
  selector: 'app-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: ['./map-widget.component.css']
})
export class MapWidgetComponent implements OnInit {

  constructor(
    private getApiService: GetApiService,
    private serverService: ServerService
  ) {}

  ngOnInit(): void {
    // console.log('ngOnInit')
    this.getApiService.getYMaps()
      .then(() => ymaps.ready(() => this.makeMap()));
  }

  makeMap(): void {
    this.serverService.getObjects()
      .subscribe(objects => this.newMap(objects));
  }

  newMap(objects): void {
    console.log('newMap, objects:', objects);

    const map = new ymaps.Map('map', {
      center: [52.967631, 36.069584],
      zoom: 12,
      // Подключаем только: Переключатель слоев карты, Полноэкранный режим, Ползунок масштаба, Линейку
      // controls: ['typeSelector', 'fullscreenControl', 'zoomControl', 'rulerControl'],
    });

    objects.forEach(obj => {
      // console.log('addMarker:', obj);
      const lat = obj.lat || null;
      const lng = obj.lng || null;
      const title = obj.name || null;

      if (lat && lng) {
        const template = title ? `<h3>${title}</h3>` : null;
        const balloonContentLayout = template ? ymaps.templateLayoutFactory.createClass(template) : null;
        const hintContentLayout = template ? ymaps.templateLayoutFactory.createClass(template) : null;

        const marker = new ymaps.Placemark(
          [lat, lng],
          {
            title,
          },
          {
            preset: 'islands#Icon',
            balloonContentLayout,
            hintContentLayout,
          },
        );

        map.geoObjects.add(marker);
      }
    });

    map.setBounds(map.geoObjects.getBounds(), {
      checkZoomRange: true,
      duration: 600,
    }).then(() => {
      if (map.getZoom() < 12) map.setZoom(12);
      if (map.getZoom() > 16) map.setZoom(16);
    }, err => console.log('setBounds error', err));
  }
}
