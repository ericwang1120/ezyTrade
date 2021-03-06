
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'nav-bar',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./nav-bar.component.css'],
    templateUrl: './nav-bar.component.html'
})

export class NavBarComponent {
    public isCollapsed = true;

    public linkList = [
        { linkPath: '/click-example-page', linkName: 'Browse' },
        { linkPath: '/click-example-page', linkName: 'Sell' },
        { linkPath: '/click-example-page', linkName: 'My Trade Me' },
        { linkPath: '/click-example-page', linkName: 'Community' },
    ];
}
