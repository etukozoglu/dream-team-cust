import { BvCarouselEvent } from '../../utils';
import { Numberish } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<number>;
    fade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    background: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    interval: {
        type: import('vue').PropType<Numberish>;
        default: number;
    };
    noHoverPause: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    imgHeight: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    imgWidth: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    controls: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    controlsNextText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    controlsPrevText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    indicators: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    indicatorsButtonLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    keyboard: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noTouch: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noWrap: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    ride: {
        type: import('vue').PropType<boolean | "carousel">;
        default: boolean;
    };
    rideReverse: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    touchThreshold: {
        type: import('vue').PropType<Numberish>;
        default: number;
    };
}, {
    next: () => void;
    pause: import('@vueuse/core').Fn;
    prev: () => void;
    resume: import('@vueuse/core').Fn;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    slide: (value: BvCarouselEvent) => void;
    slid: (value: BvCarouselEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<number>;
    fade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    background: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    interval: {
        type: import('vue').PropType<Numberish>;
        default: number;
    };
    noHoverPause: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    imgHeight: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    imgWidth: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    controls: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    controlsNextText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    controlsPrevText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    indicators: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    indicatorsButtonLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    keyboard: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noTouch: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    noWrap: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    ride: {
        type: import('vue').PropType<boolean | "carousel">;
        default: boolean;
    };
    rideReverse: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    touchThreshold: {
        type: import('vue').PropType<Numberish>;
        default: number;
    };
}>> & {
    onSlide?: ((value: BvCarouselEvent) => any) | undefined;
    onSlid?: ((value: BvCarouselEvent) => any) | undefined;
}, {
    fade: boolean;
    id: string;
    background: string;
    interval: Numberish;
    noHoverPause: boolean;
    imgHeight: string;
    imgWidth: string;
    controls: boolean;
    controlsNextText: string;
    controlsPrevText: string;
    indicators: boolean;
    indicatorsButtonLabel: string;
    keyboard: boolean;
    noTouch: boolean;
    noWrap: boolean;
    ride: boolean | "carousel";
    rideReverse: boolean;
    touchThreshold: Numberish;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
