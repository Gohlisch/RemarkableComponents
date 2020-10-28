/** ##### STORE TYPES ##### */

/** Callback to inform of a value updates. */
export type Subscriber<T> = (value: T) => void;
/** Unsubscribes from value updates. */
export type Unsubscriber = () => void;
/** Callback to update a value. */
export type Updater<T> = (value: T) => T;
/** Cleanup logic callback. */
export type Invalidator<T> = (value?: T) => void;
/** Start and stop notification callbacks. */
export type StartStopNotifier<T> = (set: Subscriber<T>) => Unsubscriber | void;
