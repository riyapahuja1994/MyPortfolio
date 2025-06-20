import {
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: false,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  @Input() tabLabels: string[] = [];
  @ContentChildren('tabContent', { read: TemplateRef })
  tabContents!: QueryList<TemplateRef<any>>;
  selectedIndex = 0;

  ngAfterContentInit() {
    // No-op: just waits for ng-content to project
    console.log('Tabs content initialized', this.tabContents);
  }

  selectTab(index: number) {
    console.log(this.tabContents.toArray());
    this.selectedIndex = index;
  }
}
