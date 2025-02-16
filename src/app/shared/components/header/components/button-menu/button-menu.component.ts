import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.scss',
})
export class ButtonMenuComponent {
  @Input() textMenu: string = 'Clique';
  @Output() clickButton = new EventEmitter<boolean>();
}
