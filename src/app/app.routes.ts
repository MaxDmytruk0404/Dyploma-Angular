import { Routes } from '@angular/router';
import { MapComponent } from './page/map/map.component';
import { MapOZComponent } from './page/map-oz/map-oz.component';
import { TestComponent } from './page/test/test.component';
import { StatisticComponent } from './page/statistic/statistic.component';
import { AllResComponent } from './page/all-res/all-res.component';

export const routes: Routes = [
    {
        path: '',
        component: TestComponent
    },
    {
        path: 'mapP',
        component: MapComponent
    },
    {
        path: 'mapOZ',
        component: MapOZComponent
    },
    {
        path: 'statistic',
        component: StatisticComponent
    },
    {
        path: 'allRes',
        component: AllResComponent
    }
];
