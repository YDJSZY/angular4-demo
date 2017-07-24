// global css
/*import "./styles/app.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";*/

// bootstrap
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app/app.module';
import "@angular/material/prebuilt-themes/indigo-pink.css";
platformBrowserDynamic().bootstrapModule(AppModule);