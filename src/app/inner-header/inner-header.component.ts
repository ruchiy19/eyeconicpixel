import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inner-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.css']
})
export class InnerHeaderComponent {
  @Input() pageTitle: string = '';
@Input() pageSubtitle :string= '';
@Input() pageHeaderImg:any='';
@Input() pageDesc:any='';
}
