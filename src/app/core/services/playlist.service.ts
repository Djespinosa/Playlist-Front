import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Playlist } from '../models/playlist.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private baseUrl = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) {}

  getAllPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.baseUrl);
  }

  getPlaylistByName(name: string): Observable<Playlist> {
    return this.http.get<Playlist>(`${this.baseUrl}/${name}`);
  }

  createPlaylist(playlist: Playlist): Observable<void> {
    return this.http.post<void>(this.baseUrl, playlist);
  }

  deletePlaylist(name: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${name}`);
  }
}
