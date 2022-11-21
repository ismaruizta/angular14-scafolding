/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'md-mova3-components';




export declare interface UiAlertCard extends Components.UiAlertCard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['date', 'notifications', 'status', 'text', 'type']
})
@Component({
  selector: 'ui-alert-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['date', 'notifications', 'status', 'text', 'type']
})
export class UiAlertCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiAlertDate extends Components.UiAlertDate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['date', 'type']
})
@Component({
  selector: 'ui-alert-date',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['date', 'type']
})
export class UiAlertDate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiAvatar extends Components.UiAvatar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['avatarSize', 'color', 'icon', 'image', 'nameInitials']
})
@Component({
  selector: 'ui-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['avatarSize', 'color', 'icon', 'image', 'nameInitials']
})
export class UiAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiButton extends Components.UiButton {
  /**
   *  
   */
  buttonClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hasLeftIcon', 'hasRightIcon', 'size', 'text', 'variant']
})
@Component({
  selector: 'ui-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hasLeftIcon', 'hasRightIcon', 'size', 'text', 'variant']
})
export class UiButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClick']);
  }
}


export declare interface UiDivisoryLine extends Components.UiDivisoryLine {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['variant']
})
@Component({
  selector: 'ui-divisory-line',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['variant']
})
export class UiDivisoryLine {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiFloatButton extends Components.UiFloatButton {
  /**
   *  
   */
  buttonClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['btnText', 'btnTextDescription', 'btnTextTitle']
})
@Component({
  selector: 'ui-float-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['btnText', 'btnTextDescription', 'btnTextTitle']
})
export class UiFloatButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClick']);
  }
}


export declare interface UiFooter extends Components.UiFooter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['links']
})
@Component({
  selector: 'ui-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['links']
})
export class UiFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiHeader extends Components.UiHeader {
  /**
   *  
   */
  btnSelectLanguage: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  btnUserProfile: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  btnEdit: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  btnNotification: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['avatarSize', 'configTxt', 'hasNotification', 'headerMsg', 'isLogged', 'languages', 'nameInitials', 'notLoggedMsg', 'notificationTxt', 'userMsg', 'userName']
})
@Component({
  selector: 'ui-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['avatarSize', 'configTxt', 'hasNotification', 'headerMsg', 'isLogged', 'languages', 'nameInitials', 'notLoggedMsg', 'notificationTxt', 'userMsg', 'userName']
})
export class UiHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['btnSelectLanguage', 'btnUserProfile', 'btnEdit', 'btnNotification']);
  }
}


export declare interface UiIcon extends Components.UiIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'hasNotification', 'icon', 'size']
})
@Component({
  selector: 'ui-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'hasNotification', 'icon', 'size']
})
export class UiIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiListNotification extends Components.UiListNotification {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['description', 'icon', 'name']
})
@Component({
  selector: 'ui-list-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description', 'icon', 'name']
})
export class UiListNotification {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiLogo extends Components.UiLogo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color']
})
@Component({
  selector: 'ui-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class UiLogo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiManagmentCard extends Components.UiManagmentCard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['iconText', 'iconType', 'infoText', 'subtitleText', 'titleText']
})
@Component({
  selector: 'ui-managment-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['iconText', 'iconType', 'infoText', 'subtitleText', 'titleText']
})
export class UiManagmentCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiSelect extends Components.UiSelect {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['isVisible', 'languages']
})
@Component({
  selector: 'ui-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isVisible', 'languages']
})
export class UiSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiStateItem extends Components.UiStateItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['text', 'type']
})
@Component({
  selector: 'ui-state-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['text', 'type']
})
export class UiStateItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiStories extends Components.UiStories {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['stories', 'titleStory']
})
@Component({
  selector: 'ui-stories',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['stories', 'titleStory']
})
export class UiStories {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiStory extends Components.UiStory {
  /**
   *  
   */
  buttonClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['icon', 'newStory', 'text']
})
@Component({
  selector: 'ui-story',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'newStory', 'text']
})
export class UiStory {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClick']);
  }
}


export declare interface UiTag extends Components.UiTag {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'icon', 'text']
})
@Component({
  selector: 'ui-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'icon', 'text']
})
export class UiTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiTagNotification extends Components.UiTagNotification {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['type']
})
@Component({
  selector: 'ui-tag-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['type']
})
export class UiTagNotification {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiText extends Components.UiText {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['backgroundcolor', 'icon', 'iconmobile', 'linktitle', 'linkurl', 'text', 'textcolor']
})
@Component({
  selector: 'ui-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backgroundcolor', 'icon', 'iconmobile', 'linktitle', 'linkurl', 'text', 'textcolor']
})
export class UiText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiWarning extends Components.UiWarning {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['description', 'notIcon', 'titleWarn', 'type']
})
@Component({
  selector: 'ui-warning',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description', 'notIcon', 'titleWarn', 'type']
})
export class UiWarning {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
