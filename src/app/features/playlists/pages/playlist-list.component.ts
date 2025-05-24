import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Playlist } from '../../../core/models/playlist.model';
import { PlaylistService } from '../../../core/services/playlist.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playlist-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.scss'
})
export class PlaylistListComponent implements OnInit{

  playlists: Playlist[] = [];
  isLoading = true;
  error: string | null = null;
  selectedPlaylist: Playlist | null = null;
  showCreateModal = false;
  toastMessage: string | null = null;
  toastType: 'success' | 'error' = 'success';
  playlistToDelete: string | null = null;

  newPlaylist: Playlist = {
    nombre: '',
    descripcion: '',
    canciones: []
  };

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.loadPlaylists();
  }

  // Eliminar playlist
  confirmDeleteAction() {
    if (!this.playlistToDelete) return;

    this.playlistService.deletePlaylist(this.playlistToDelete).subscribe({
      next: () => {
        this.playlists = this.playlists.filter(p => p.nombre !== this.playlistToDelete);
        this.showToast('Playlist eliminada', 'success');
        this.playlistToDelete = null;
      },
      error: () => {
        this.showToast('Error al eliminar la playlist', 'error');
        this.playlistToDelete = null;
      }
    });
  }

  confirmDelete(name: string) {
    this.playlistToDelete = name;
  }

  cancelDelete() {
    this.playlistToDelete = null;
  }

  openModal(playlist: Playlist) {
  this.selectedPlaylist = playlist;
  }

  closeModal() {
    this.selectedPlaylist = null;
  }

  openCreateModal() {
  this.showCreateModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false;
    this.resetForm();
  }

  addCancion() {
    this.newPlaylist.canciones.push({
      titulo: '',
      artista: '',
      album: '',
      anno: '',
      genero: ''
    });
  }

  removeCancion(index: number) {
    this.newPlaylist.canciones.splice(index, 1);
  }

  loadPlaylists() {
    this.isLoading = true;
    this.playlistService.getAllPlaylists().subscribe({
      next: (data) => {
        this.playlists = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Error cargando playlists';
        this.isLoading = false;
      }
    });
  }

  createPlaylist() {
    if (!this.newPlaylist.nombre.trim()) {
      alert('El nombre es obligatorio');
      return;
    }

    this.playlistService.createPlaylist(this.newPlaylist).subscribe({
      next: () => {
        this.loadPlaylists();
        this.resetForm();
        this.closeCreateModal();
        this.showToast('Playlist creada con éxito', 'success');
      },
      error: () => {
        this.showToast('Error al crear la Playlist', 'error');
      }
    });
  }

  resetForm() {
    this.newPlaylist = {
      nombre: '',
      descripcion: '',
      canciones: []
    };
  }

  showToast(message: string, type: 'success' | 'error' = 'success') {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000); // 3 segundos
  }

}
