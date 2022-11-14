import { LayoutComponent } from '@app/layout/layout/layout.component';

export * from './header/header.component';
export * from './footer/footer.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export const LAYOUTS = [HeaderComponent, FooterComponent, LayoutComponent];
