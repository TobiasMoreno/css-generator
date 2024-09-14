import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-box-shadow',
  standalone: true,
  imports: [],
  templateUrl: './box-shadow.component.html',
  styleUrl: './box-shadow.component.css',
})
export class BoxShadowComponent {

  @ViewChild('horizontal_length_slider', { static: true })
  horizontalSlider!: ElementRef<HTMLInputElement>;
  @ViewChild('vertical_length_slider', { static: true })
  verticalSlider!: ElementRef<HTMLInputElement>;
  @ViewChild('blur_length_slider', { static: true })
  blurSlider!: ElementRef<HTMLInputElement>;
  @ViewChild('spread_length_slider', { static: true })
  spreadSlider!: ElementRef<HTMLInputElement>;
  @ViewChild('opacity_slider', { static: true })
  opacitySlider!: ElementRef<HTMLInputElement>;
  @ViewChild('inset_option_toggle', { static: true })
  insetToggle!: ElementRef<HTMLInputElement>;
  @ViewChild('shadowcolorpicker', { static: true })
  colorPicker!: ElementRef<HTMLInputElement>;
  @ViewChild('demoBox', { static: false }) demoBox!: ElementRef<HTMLDivElement>;
  @ViewChild('css-generator-code', { static: true })
  cssCodeOutput!: ElementRef<HTMLDivElement>;
  @ViewChild('copy-btn', { static: true })
  copyButton!: ElementRef<HTMLButtonElement>;

  horizontalShadow = '10px';
  verticalShadow = '10px';
  blurRadius = '5px';
  spreadRadius = '0px';
  shadowOpacity = 0.75;
  shadowColor = 'rgba(0,0,0,0.75)';
  isInset = false;
  cssText = '';

  clipboard = inject(Clipboard);

  updateBoxShadow(): void {
    const inset = this.isInset ? 'inset' : '';
    const boxShadowValue = `${inset}${this.horizontalShadow} ${this.verticalShadow} ${this.blurRadius} ${this.spreadRadius} ${this.shadowColor}`;

    this.cssText = `box-shadow: ${boxShadowValue};
-webkit-box-shadow: ${boxShadowValue};
-moz-box-shadow: ${boxShadowValue};`;

    if (this.demoBox!) {
      this.demoBox.nativeElement.style.boxShadow =boxShadowValue;
    }
  }

  horizontalSliderUpdate(value: string): void {
    this.horizontalShadow = `${value}px`;
    this.updateBoxShadow();
  }
  copyCssToClipboard(): void {
    const cssCodeElement = document.getElementById('css-generator-code');
    if (cssCodeElement) {
      const cssText = this.cssText.replace(/<br>/g, '\n');
      this.clipboard.copy(cssText);

      const feedBackElement = document.getElementById('copy-feedback');
      if (feedBackElement) {
        feedBackElement.style.display = 'block';
        setTimeout(() => {
          feedBackElement.style.display = 'none';
        }, 2000);
      }
    }
  }
}
