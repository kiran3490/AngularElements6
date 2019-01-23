import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ng-custom-profile',
    templateUrl: './profile.component.html',
    encapsulation: ViewEncapsulation.Native
})

export class ProfileComponent {
    @Input() title = 'Title';
}
