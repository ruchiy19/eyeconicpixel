import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingDirective } from 'src/app/share/shared/section-heading.directive';
import {featuringServices} from 'src/app/service/featuringServices';
import { HighlightedTextDirective } from '../share/shared/highlighted-text.directive';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule,SectionHeadingDirective,HighlightedTextDirective],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
 features:featuringServices[];
 constructor(){
  this.features = [
    new featuringServices ("../assets/img/icons/logos_ant-design.png","Website Designing","Our approach to website design revolves around the principles of creativity, functionality, and user experience."),
    new featuringServices ("../assets/img/icons/Group (1).png","E-Commerce","we specialize in creating high-performance, visually appealing e-commerce websites that drive sales and enhance user experience."),
    new featuringServices ("../assets/img/icons/Vector.png","Responsive Designing","we create responsive websites that adapt seamlessly to any screen size, providing an optimal viewing experience on desktops, tablets, and smartphones"),
    new featuringServices ("../assets/img/icons/Vector (1).png","Web Development","we deliver custom web development solutions that are tailored to your business needs "),
    new featuringServices ("../assets/img/icons/tabler_dashboard.png","Dashboard Development","we create custom dashboards that transform complex data into clear, actionable insights."),
    new featuringServices ("../assets/img/icons/angular-icon.png","Angular Development","we specialize in building dynamic, high-performance web applications using Angular, one of the most powerful JavaScript frameworks.")

  ]

 }
}
