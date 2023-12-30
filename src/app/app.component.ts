import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCloudDownload,faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ExperiencesCardComponent } from './components/experiences-card/experiences-card.component';
// import {} from "../assets/Docs/resume.pdf"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FontAwesomeModule,ProjectCardComponent,ExperiencesCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-frontend';
  public downloadIcon=faCloudDownload;
  public experience_years:number = 2.5;
  public companyLinkIcon=faExternalLink;
  
  
  
}
