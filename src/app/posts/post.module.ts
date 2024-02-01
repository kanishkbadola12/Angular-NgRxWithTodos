import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { PostsGridComponent } from './components/posts-grid/posts-grid.component';
import { PostCardComponent } from './components/posts-grid/post-card/post-card.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/effects';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    TopSectionComponent, 
    PostsGridComponent, 
    PostCardComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostEffects])
  ],
  exports: [
    TopSectionComponent, 
    PostsGridComponent, 
    PostCardComponent
  ],
  providers: [PostsService]
})
export class PostModule { }
