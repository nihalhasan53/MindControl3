import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  number!: number;
  template!: number;
  private pressTimer: any; // Timer to track long press
  longPressDuration: number = 1000; // 1 second for long press detection
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const numberParam = params.get('number');
      this.number = numberParam ? +numberParam : 0; // Fallback to 0 if the number is null

      const templateParam = params.get('template');
      this.template = templateParam ? +templateParam : 1; // Default template is 1
    });
  } onPressStart(): void {
    this.pressTimer = setTimeout(() => {
      console.log('Long press detected');
      this.navigateToTemplate();
    }, this.longPressDuration);
  }

  // Clear the timer on mouse up or leave (short press)
  onPressEnd(): void {
    clearTimeout(this.pressTimer);
    console.log('Short press detected');
    this.navigateToTemplate();
  }

  // Navigate to the TemplateComponent
  navigateToTemplate(): void {
    this.router.navigate(['/']); // Empty path ('') maps to TemplateComponent
  }

  onKeypadButtonClick(value: string | number): void {
    const currentText = this.number.toString();

    if (value === 'backspace') {
      this.number = parseInt(currentText.slice(0, -1)) || 0; // Remove last digit
    } else if (value === 'done') {
      this.sendValueToNextPage();
    } else {
      this.number = parseInt(currentText + value);
    }
  }

  sendValueToNextPage(): void {
    if (this.number >= 1600 && this.number <= 2100) {
      // Navigate to the SquareComponent with template and year parameters
      this.router.navigate(['/input', this.template, this.number]); // Navigates to /input/{template}/{year}
    } else {
      alert('Invalid number entered.\nEnter number between (1600-2100)');
    }
  }
}
