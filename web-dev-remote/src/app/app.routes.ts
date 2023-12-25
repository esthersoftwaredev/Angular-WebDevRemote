import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { DevsListComponent } from './components/devs-list/devs-list.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "jobs", component: JobsListComponent },
  { path: "developers", component: DevsListComponent },
  { path: "**", redirectTo: "" },
];
