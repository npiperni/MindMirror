import {
  style,
  animate,
  animation,
} from '@angular/animations';

// =========================
// Enum for referencing animations
// =========================
export enum AnimationType {
  Scale = 'scale',
  Fade = 'fade',
  Flip = 'flip',
  JackInTheBox = 'jackInTheBox',
}

// =========================
// dropdown
// =========================
export const scaleIn = animation([
  style({ height: '0', opacity: 0 }),
  animate('{{time}} ease-in-out', style({ height: '*', opacity: 1 })),
]);

export const scaleOut = animation([
  style({ height: '*', opacity: 1 }),
  animate('{{time}} ease-in-out', style({ height: '0', opacity: 0 })),
]);

// =========================
// Scale
// =========================
export const scalesIn = animation([
  style({ opacity: 0, transform: 'scale(0.5)' }), // start state
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 1, transform: 'scale(1)' })
  ),
]);

export const scalesOut = animation([
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 0, transform: 'scale(0.5)' })
  ),
]);
