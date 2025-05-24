import { Routes } from '@angular/router';
import { PlaylistListComponent } from './features/playlists/pages/playlist-list.component';

export const routes: Routes = [

  {
    path: 'playlists',
    component: PlaylistListComponent,
  },
  {
    path: '',
    redirectTo: 'playlists',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'playlists',
  }
];
