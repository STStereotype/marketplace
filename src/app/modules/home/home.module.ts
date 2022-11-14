import { NgModule } from '@angular/core';
import { PAGES } from './pages';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
	declarations: [...PAGES],
	exports: [],
	imports: [CommonModule, RouterModule, HomeRoutingModule],
	providers: []
})
export class HomeModule {}
