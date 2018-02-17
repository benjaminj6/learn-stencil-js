import { Component, Prop } from '@stencil/core';

type Style = HTMLElement["style"];

@Component({
  tag: 'slick-button',
  styleUrl: 'slick-button.scss',
  shadow: true
})
export class MyComponent {
  @Prop() disabled: boolean;

  handleClick(event: UIEvent) {
    console.log('click!', event);
  }

  render() {
    return (
      <button disabled={this.disabled} onClick={(event: UIEvent) => this.handleClick(event)}>
        <span class="slider" />
        <span>
          <slot />
        </span>
      </button>
    );
  }
}
