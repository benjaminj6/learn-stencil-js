import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'slick-multiselect-option',
  styleUrl: 'slick-multiselect-option.scss',
  shadow: true
})
export class SlickMultiSelectOption {
  @Prop() id: string;
  @Prop() value: string;
  @Prop() name: string;
  @Event() multiSelectOptionChange: EventEmitter;

  // TODO -- better typing for the event
  onToggle = (event: any) => {
    this.multiSelectOptionChange.emit({
      value: this.value,
      checked: event.target.checked
    });
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name={this.name}
          id={this.id}
          value={this.value}
          onChange={(event: UIEvent) => this.onToggle(event)}
        />
        <label htmlFor={this.id}>
          <slot />
        </label>
      </div>
    );
  }
}
