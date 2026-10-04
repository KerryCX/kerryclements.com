// On phones and tablets, focusing a text box pops up the on-screen keyboard, which pushes
// the answer out of view. So when someone taps (rather than using a keyboard) on a touch
// device, we avoid moving focus into the question box.

// event.detail is the click count: 0 when a button is "clicked" with Enter or Space
export const isTouchTap = (event: { detail: number }): boolean =>
  event.detail > 0 && window.matchMedia('(pointer: coarse)').matches
