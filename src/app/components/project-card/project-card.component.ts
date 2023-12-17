import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  public linkToGithubIcon=faExternalLink;
  @Input() projectLink:string = '#';
  @Input() projectName:string = 'Comming soon';
}
