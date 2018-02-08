import { Component, Prop } from '@stencil/core';

type Style = HTMLElement["style"];

@Component({
  tag: 'slick-button',
  styleUrl: 'slick-button.scss',
  shadow: true
})
export class MyComponent {
  handleClick(event: UIEvent) {
    console.log('click!', event);
  }

  render() {
    return (
      <button onClick={(event: UIEvent) => this.handleClick(event)}>
        <span class="slider" />
        <span>
          <slot />
        </span>
      </button>
    );
  }
}
