import { useRef, type PointerEvent } from "react";

/**
 * Horizontal swipe detection on pointer events (touch and pen only; mouse
 * users have buttons/keys). Pair the target element with `touch-pan-y` so
 * vertical page scrolling keeps working: the browser then cancels the pointer
 * on a vertical scroll and only horizontal gestures reach pointerup.
 *
 * A swipe on a clickable element is usually followed by a `click`; call
 * `consumeSwipe()` at the top of the click handler and bail out when it
 * returns true.
 */

const MIN_DISTANCE = 40;
const HORIZONTAL_DOMINANCE = 1.5;

type SwipeCallbacks = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};

export function useSwipe({ onSwipeLeft, onSwipeRight }: SwipeCallbacks) {
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  const swiped = useRef(false);

  const onPointerDown = (e: PointerEvent) => {
    swiped.current = false;
    if (e.pointerType === "mouse") return;
    start.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
  };

  const onPointerUp = (e: PointerEvent) => {
    const origin = start.current;
    start.current = null;
    if (!origin || origin.id !== e.pointerId) return;

    const dx = e.clientX - origin.x;
    const dy = e.clientY - origin.y;
    if (Math.abs(dx) < MIN_DISTANCE || Math.abs(dx) < Math.abs(dy) * HORIZONTAL_DOMINANCE) return;

    swiped.current = true;
    if (dx < 0) onSwipeLeft();
    else onSwipeRight();
  };

  const onPointerCancel = () => {
    start.current = null;
  };

  const consumeSwipe = () => {
    const wasSwipe = swiped.current;
    swiped.current = false;
    return wasSwipe;
  };

  return { swipeHandlers: { onPointerDown, onPointerUp, onPointerCancel }, consumeSwipe };
}
