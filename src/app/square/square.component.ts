import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet ,Router} from '@angular/router';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  template!: number;
  year!: number;
  buttons: number[] = []; // Array to store the current grid (4x4)
  clickedCells: number[] = []; // Track the clicked cells in order
  markedCells: Set<number> = new Set([2, 5, 8, 15]); // 2nd, 5th, 8th, and 15th cells marked as "XXX"
  cellLabels: string[] = [];  // Holds the label for each cell (XXX or numbers)
  cellColors: string[] = []; // Holds background color for each cell
  iterationComplete: boolean = false;
  counter=0;
  sum1=0;
  sum2=0;
  sum3=0;
  sum4=0;
  resultString=""
  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    // Get the 'template' and 'year' parameters from the route
    this.route.paramMap.subscribe((params) => {
      this.template = +params.get('template')!; // Convert the 'template' parameter to a number
      this.year = +params.get('year')!; // Convert the 'year' parameter to a number

    });

    // Create an array of numbers 1 to 16, or generate template-specific numbers
    this.buttons = this.generateTemplateGrid(this.template); // Use a method to generate grid based on template

    // Initialize cellLabels with the grid numbers (template-based)
    this.cellLabels = this.buttons.map(String); // Convert numbers to strings

    // Initialize cellColors with 'black' by default
    this.cellColors = new Array(16).fill('black'); // Set all cells color to black initially

    // Mark specific cells as 'XXX' and set their colors
    this.cellLabels[4] = 'XXX'; // 5th cell (index 4)
    this.cellColors[4] = 'red'; // Red color for 5th cell

    this.cellLabels[1] = 'XXX'; // 2nd cell (index 1)
    this.cellColors[1] = 'white'; // Black color for 2nd cell

    this.cellLabels[14] = 'XXX'; // 15th cell (index 14)
    this.cellColors[14] = 'white'; // Black color for 15th cell

    this.cellLabels[7] = 'XXX'; // 8th cell (index 7)
    this.cellColors[7] = 'white'; // Black color for 8th cell
  }

  // changecolor(a:number, b:number, c:number, d:number)
  // {
  //   this.cellColors[a] = 'gray';
  //   this.cellColors[b] = 'gray';
  //   this.cellColors[c] = 'gray';
  //   this.cellColors[d] = 'gray';

  // }
  // Example of how to generate grid based on template number
  generateTemplateGrid(template: number): number[] {
    const one = this.year - 1402;
    const seven = this.year - 1501;
    const twelve = this.year - 1204;
    const fourteen = this.year - 1303;

    const grid = [one, 8, 775, 619, 676, 718, seven, 107, 421, 577, 206, twelve, 305, fourteen, 520, 478];
    const grid1 = [one, 8, 775, 619, 676, 718, seven, 107, 421, 577, 206, twelve, 305, fourteen, 520, 478];
    const grid2 = [one, 666, 475, 261, 376, 360, seven, 765, 63, 277, 864, twelve, 963, fourteen, 162, 178];
    const grid3 = [one, 454, 316, 632, 217, 731, seven, 553, 434, 118, 652, twelve, 751, fourteen, 533, 19];
    const grid4 = [one, 554, 450, 398, 351, 497, seven, 653, 200, 252, 752, twelve, 851, fourteen, 299, 153];
    const grid5 = [one, 554, 450, 398, 351, 497, seven, 653, 200, 252, 752, twelve, 851, fourteen, 299, 153];
    const grid6 = [one, 370, 508, 524, 409, 623, seven, 469, 326, 310, 568, twelve, 667, fourteen, 425, 211];
    const grid7 = [one, 323, 752, 327, 653, 426, seven, 422, 129, 554, 521, twelve, 620, fourteen, 228, 455];
    const grid8 = [one, 109, 685, 608, 586, 707, seven, 208, 410, 487, 307, twelve, 406, fourteen, 509, 388];
    const grid9 = [one, 499, 702, 201, 603, 300, seven, 598, 3, 504, 697, twelve, 796, fourteen, 102, 405];
    const grid10 = [one, 479, 309, 614, 210, 713, seven, 578, 416, 111, 677, twelve, 776, fourteen, 515, 12];
    const grid11 = [one, 384, 763, 255, 664, 354, seven, 483, 57, 565, 582, twelve, 681, fourteen, 156, 466];
    const grid12 = [one, 208, 478, 716, 379, 815, seven, 307, 518, 280, 406, twelve, 505, fourteen, 617, 181];
    this.sum1=grid[0]+grid[8]+grid[12]
    this.sum2=grid[5]+grid[9]+grid[13]
    this.sum3=grid[2]+grid[6]+grid[10]
    this.sum4=grid[3]+grid[11]+grid[15]
    // Depending on the template number, generate different grid values
    switch (template) {
      case 1:
        return grid1; // Return grid1 for case 1
      case 2:
        return grid2; // Return grid2 for case 2
      case 3:
        return grid3; // Return grid3 for case 3
      case 4:
        return grid4; // Return grid4 for case 4
      case 5:
        return grid5; // Return grid5 for case 5
      case 6:
        return grid6; // Return grid6 for case 6
      case 7:
        return grid7; // Return grid7 for case 7
      case 8:
        return grid8; // Return grid8 for case 8
      case 9:
        return grid9; // Return grid9 for case 9
      case 10:
        return grid10; // Return grid10 for case 10
      case 11:
        return grid11; // Return grid11 for case 11
      case 12:
        return grid12; // Return grid12 for case 12
      // Add more cases if necessary based on template
      default:
        return grid1; // Default grid is grid1
    }

  }

  fillGrid(template: number): void {
    // Calculations based on the year
    const one = this.year - 1402;
    const seven = this.year - 1501;
    const twelve = this.year - 1204;
    const fourteen = this.year - 1303;

    const grid = [one, 8, 775, 619, 676, 718, seven, 107, 421, 577, 206, twelve, 305, fourteen, 520, 478];
    const grid1 = [one, 8, 775, 619, 676, 718, seven, 107, 421, 577, 206, twelve, 305, fourteen, 520, 478];
    const grid2 = [one, 666, 475, 261, 376, 360, seven, 765, 63, 277, 864, twelve, 963, fourteen, 162, 178];
    const grid3 = [one, 454, 316, 632, 217, 731, seven, 553, 434, 118, 652, twelve, 751, fourteen, 533, 19];
    const grid4 = [one, 554, 450, 398, 351, 497, seven, 653, 200, 252, 752, twelve, 851, fourteen, 299, 153];
    const grid5 = [one, 554, 450, 398, 351, 497, seven, 653, 200, 252, 752, twelve, 851, fourteen, 299, 153];
    const grid6 = [one, 370, 508, 524, 409, 623, seven, 469, 326, 310, 568, twelve, 667, fourteen, 425, 211];
    const grid7 = [one, 323, 752, 327, 653, 426, seven, 422, 129, 554, 521, twelve, 620, fourteen, 228, 455];
    const grid8 = [one, 109, 685, 608, 586, 707, seven, 208, 410, 487, 307, twelve, 406, fourteen, 509, 388];
    const grid9 = [one, 499, 702, 201, 603, 300, seven, 598, 3, 504, 697, twelve, 796, fourteen, 102, 405];
    const grid10 = [one, 479, 309, 614, 210, 713, seven, 578, 416, 111, 677, twelve, 776, fourteen, 515, 12];
    const grid11 = [one, 384, 763, 255, 664, 354, seven, 483, 57, 565, 582, twelve, 681, fourteen, 156, 466];
    const grid12 = [one, 208, 478, 716, 379, 815, seven, 307, 518, 280, 406, twelve, 505, fourteen, 617, 181];


    // Define all grids


    const grids: Record<number, number[]> = {
      1: grid1,
      2: grid2,
      3: grid3,
      4: grid4,
      5: grid5,
      6: grid6,
      7: grid7,
      8: grid8,
      9: grid9,
      10: grid10,
      11: grid11,
      12: grid12,
    };

    // Assign the selected grid or default to an empty grid
    this.buttons = grids[template] || Array(16).fill(0);
  }



  onButtonClick(index: number): void {

    this.counter+=1;


    const one = this.year - 1402;
    const seven = this.year - 1501;
    const twelve = this.year - 1204;
    const fourteen = this.year - 1303;

    const grid = [one, 8, 775, 619, 676, 718, seven, 107, 421, 577, 206, twelve, 305, fourteen, 520, 478];
    const grid1 = [one, 8, 775, 619, 676, 718, seven, 107, 421, 577, 206, twelve, 305, fourteen, 520, 478];
    const grid2 = [one, 666, 475, 261, 376, 360, seven, 765, 63, 277, 864, twelve, 963, fourteen, 162, 178];
    const grid3 = [one, 454, 316, 632, 217, 731, seven, 553, 434, 118, 652, twelve, 751, fourteen, 533, 19];
    const grid4 = [one, 554, 450, 398, 351, 497, seven, 653, 200, 252, 752, twelve, 851, fourteen, 299, 153];
    const grid5 = [one, 554, 450, 398, 351, 497, seven, 653, 200, 252, 752, twelve, 851, fourteen, 299, 153];
    const grid6 = [one, 370, 508, 524, 409, 623, seven, 469, 326, 310, 568, twelve, 667, fourteen, 425, 211];
    const grid7 = [one, 323, 752, 327, 653, 426, seven, 422, 129, 554, 521, twelve, 620, fourteen, 228, 455];
    const grid8 = [one, 109, 685, 608, 586, 707, seven, 208, 410, 487, 307, twelve, 406, fourteen, 509, 388];
    const grid9 = [one, 499, 702, 201, 603, 300, seven, 598, 3, 504, 697, twelve, 796, fourteen, 102, 405];
    const grid10 = [one, 479, 309, 614, 210, 713, seven, 578, 416, 111, 677, twelve, 776, fourteen, 515, 12];
    const grid11 = [one, 384, 763, 255, 664, 354, seven, 483, 57, 565, 582, twelve, 681, fourteen, 156, 466];
    const grid12 = [one, 208, 478, 716, 379, 815, seven, 307, 518, 280, 406, twelve, 505, fourteen, 617, 181];


    // Define all grids

    const grids: Record<number, number[]> = {
      1: grid1,
      2: grid2,
      3: grid3,
      4: grid4,
      5: grid5,
      6: grid6,
      7: grid7,
      8: grid8,
      9: grid9,
      10: grid10,
      11: grid11,
      12: grid12,
    };


    console.log(grids[1]+","+grids[4]+","+grids[8]+","+grids[12])
    switch(this.counter) {

      case 1:
        this.cellLabels[4]=grids[this.template][4].toString();
        this.cellColors[4] = 'black';
        this.cellColors[1] = 'red';
        this.sum1=grid[0]+grid[8]+grid[12]+grid[4];
        break;
      case 2:
        this.cellLabels[1]=grids[this.template][1].toString();
        this.cellColors[1] = 'black';
        this.cellColors[14] = 'red';
        this.sum2=grid[5]+grid[9]+grid[13]+grid[1];
        break;
      case 3:
        this.cellLabels[14]=grids[this.template][14].toString();
        this.cellColors[14] = 'black';
        this.cellColors[7] = 'red';
        this.sum3=grid[2]+grid[6]+grid[10]+grid[14];
        break;
      case 4:
        this.cellLabels[7]=grids[this.template][7].toString();
        this.cellColors[7] = 'black';
        this.sum4=grid[3]+grid[11]+grid[15]+grid[7]
        break;
      case 5:
        this.runAll();
        break;
      default:
        break;
    }

  }
  changecolor(a: number, b: number, c: number, d: number): void {
    this.cellColors[a] = 'gray';
    this.cellColors[b] = 'gray';
    this.cellColors[c] = 'gray';
    this.cellColors[d] = 'gray';
    console.log(`Changed colors for: ${a}, ${b}, ${c}, ${d}`);
  }

  displaysum(a: number, b: number, c: number, d: number):void
  {
    const one = this.year - 1402;
    const seven = this.year - 1501;
    const twelve = this.year - 1204;
    const fourteen = this.year - 1303;

    const grid = [one, 8, 775, 619, 676, 718, seven, 107, 421, 577, 206, twelve, 305, fourteen, 520, 478];
    const grid1 = [one, 8, 775, 619, 676, 718, seven, 107, 421, 577, 206, twelve, 305, fourteen, 520, 478];
    const grid2 = [one, 666, 475, 261, 376, 360, seven, 765, 63, 277, 864, twelve, 963, fourteen, 162, 178];
    const grid3 = [one, 454, 316, 632, 217, 731, seven, 553, 434, 118, 652, twelve, 751, fourteen, 533, 19];
    const grid4 = [one, 554, 450, 398, 351, 497, seven, 653, 200, 252, 752, twelve, 851, fourteen, 299, 153];
    const grid5 = [one, 554, 450, 398, 351, 497, seven, 653, 200, 252, 752, twelve, 851, fourteen, 299, 153];
    const grid6 = [one, 370, 508, 524, 409, 623, seven, 469, 326, 310, 568, twelve, 667, fourteen, 425, 211];
    const grid7 = [one, 323, 752, 327, 653, 426, seven, 422, 129, 554, 521, twelve, 620, fourteen, 228, 455];
    const grid8 = [one, 109, 685, 608, 586, 707, seven, 208, 410, 487, 307, twelve, 406, fourteen, 509, 388];
    const grid9 = [one, 499, 702, 201, 603, 300, seven, 598, 3, 504, 697, twelve, 796, fourteen, 102, 405];
    const grid10 = [one, 479, 309, 614, 210, 713, seven, 578, 416, 111, 677, twelve, 776, fourteen, 515, 12];
    const grid11 = [one, 384, 763, 255, 664, 354, seven, 483, 57, 565, 582, twelve, 681, fourteen, 156, 466];
    const grid12 = [one, 208, 478, 716, 379, 815, seven, 307, 518, 280, 406, twelve, 505, fourteen, 617, 181];


    // Define all grids


    const grids: Record<number, number[]> = {
      1: grid1,
      2: grid2,
      3: grid3,
      4: grid4,
      5: grid5,
      6: grid6,
      7: grid7,
      8: grid8,
      9: grid9,
      10: grid10,
      11: grid11,
      12: grid12,
    };
    this.resultString=grids[this.template][a]+"+"+grids[this.template][b]+"+"+grids[this.template][c]+"+"+
    grids[this.template][d]+" = "+this.year;
  }


  onExit(): void {
    // Increment template number and navigate to the next template
    if(this.template==12)
    {
      this.router.navigate(['/input', 1]);
    }
    else
    {
      this.router.navigate(['/input', (this.template+1)%12]);
    }

  }

  // Reset color for specified indices
  resetcolor(a: number, b: number, c: number, d: number): void {
    this.cellColors[a] = 'black';
    this.cellColors[b] = 'black';
    this.cellColors[c] = 'black';
    this.cellColors[d] = 'black';
    this.cellColors[d] = 'black';
    console.log(`Reset colors for: ${a}, ${b}, ${c}, ${d}`);
  }

  // Execute changecolor and resetcolor sequentially
  executeChangecolor(): Promise<void> {
    const sequences: [number, number, number, number][] = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 1, 4, 5],
      [2, 3, 6, 7],
      [8, 9, 12, 13],
      [10, 11, 14, 15],
      [1, 2, 5, 6],
      [9, 10, 13, 14],
      [5, 6, 9, 10],
      [0, 3, 12, 15],
      [0, 5, 10, 15],
      [12, 9, 6, 3],
      [4, 8, 7, 11],
      [1, 2, 13, 14],
      [4, 11, 14, 1],
      [8, 13, 2, 7],
      [0, 2, 8, 10],
      [1, 3, 9, 11],
      [4, 6, 12, 14],
      [5, 7, 13, 15],
      [0, 3, 12, 15],
    ];

    return new Promise<void>((resolve) => {
      let delay = 0;
      sequences.forEach((sequence, index) => {
        setTimeout(() => {
          this.changecolor(...sequence);
          this.displaysum(...sequence);
          setTimeout(() => {
            this.resetcolor(...sequence);
            if (index === sequences.length - 1) {
              resolve(); // Resolve the promise after the last sequence
            }
          }, 500);
        }, delay);
        delay += 1000;
      });
    });
  }

  async runAll() {
    console.log('Starting executeChangecolor...');
    await this.executeChangecolor();
    console.log('Finished executeChangecolor. Now running changecolor(0, 3, 12, 15)...');
    this.changecolor(0, 3, 12, 15);
    this.iterationComplete=true;
  }

  getCellClass(index: number): string {
    // Apply class based on cell color
    return this.cellColors[index] === 'red' ? 'red-label' : (this.cellColors[index] === 'black' ? 'black-label' : 'normal');
  }

  getCellLabel(index: number): string {
    // Return 'XXX' for the marked cells or the actual number after clicked
    return this.cellLabels[index];
  }

  getButtonContent(index: number): string {
    // Show 'XXX' or the actual number based on the click sequence
    return this.cellLabels[index];
  }

  updateCellContent(index: number): void {
    // Ensure the clicked cell is part of the marked cells (2nd, 5th, 8th, and 15th)

        // Only mark the specific cells as 'XXX' and apply black color
        // this.cellLabels[4] = this.seven; // 5th cell (index 4)
        // this.cellColors[4] = 'black';

        // this.cellLabels[1] = this.one; // 2nd cell (index 1)
        // this.cellColors[1] = 'black';

        // this.cellLabels[14] = this.fourteen; // 15th cell (index 14)
        // this.cellColors[14] = 'black';

        // this.cellLabels[7] = this.seven; // 8th cell (index 7)
        // this.cellColors[7] = 'black';

    }
  }

