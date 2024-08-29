/**
 * @deprecated remove with parseEventOptions
 */
export declare const IS_BROWSER: boolean;
/**
 * @deprecated
 */
export declare const parseEventOptions: (options: boolean | Readonly<EventListenerOptions> | undefined) => boolean | EventListenerOptions | undefined;
/**
 * @deprecated
 */
export declare const eventOn: (el: Readonly<Element>, eventName: string, handler: EventListener, options: boolean | Readonly<EventListenerOptions> | undefined) => void;
/**
 * @deprecated
 */
export declare const eventOff: (el: Readonly<Element>, eventName: string, handler: EventListener, options: boolean | Readonly<EventListenerOptions> | undefined) => void;
/**
 * @deprecated
 */
export declare const eventOnOff: (on: boolean, eventParams: [el: Readonly<Element>, eventName: string, handler: EventListener, options: boolean | Readonly<EventListenerOptions> | undefined]) => void;
