import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Prop,
  State
} from '@stencil/core';

@Component({
  tag: 'slick-multiselect',
  styleUrl: 'slick-multiselect.scss',
  shadow: true
})
export class SlickMultiSelect {
  @Element() el: HTMLElement;
  @Prop() name: string;
  @State() value: Array<string> = [];
  @Event() change: EventEmitter;

  @Listen('multiSelectOptionChange')
  onChildChanged(event: CustomEvent) {
    const value = event.detail.checked
      ? [...this.value, event.detail.value]
      : this.value.filter(val => val !== event.detail.value);

    this.value = value
    this.change.emit({ value });
  }

  render() {
    // collect the children & construct an array out of them
    // make sure that the children follow a similar spec, i.e. they're only allowed to be
    // a certain type of elemen
    return [
      <span>{this.value.length} Selected</span>,
      <div>
        <span class="disabled-overlay" />
        <slot />
      </div>
    ];
  }
}
