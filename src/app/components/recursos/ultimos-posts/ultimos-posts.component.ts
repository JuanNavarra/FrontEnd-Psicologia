import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recientes } from 'src/app/models/recientes';
import { BlogService } from 'src/app/service/recursos/blog.service';

@Component({
  selector: 'app-ultimos-posts',
  templateUrl: './ultimos-posts.component.html',
  styleUrls: ['./ultimos-posts.component.css']
})
export class UltimosPostsComponent implements OnInit {

  recientes: Recientes[] = [];
  @Output() slug = new EventEmitter<string>();
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.obtenerRecientes().subscribe(data => {
      this.recientes = data;
    })
  }

  public obtenerSlugPost(slug: string): void {
    this.slug.emit(slug);
  }
}
