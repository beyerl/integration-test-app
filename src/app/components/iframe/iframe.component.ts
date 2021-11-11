import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {
  @Input() iframeSrc: string
  sanitizedIFrameSrc: SafeResourceUrl

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.sanitizedIFrameSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeSrc)
  }
}
