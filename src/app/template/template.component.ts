import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet ,Router} from '@angular/router';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterModule, RouterOutlet,CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private router: Router) {}

  navigateToTemplate(template: number): void {
    console.log("pheku")
    this.router.navigate(['/input', template]);
  }
}
