import { BTransitionProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BTransitionProps>, {
    appear: boolean;
    mode: undefined;
    noFade: boolean;
    transProps: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    appear: (value: Element) => void;
    "after-appear": (value: Element) => void;
    "after-enter": (value: Element) => void;
    "after-leave": (value: Element) => void;
    "before-appear": (value: Element) => void;
    "before-enter": (value: Element) => void;
    "before-leave": (value: Element) => void;
    enter: (value: Element) => void;
    "appear-cancelled": (value: Element) => void;
    "enter-cancelled": (value: Element) => void;
    leave: (value: Element) => void;
    "leave-cancelled": (value: Element) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BTransitionProps>, {
    appear: boolean;
    mode: undefined;
    noFade: boolean;
    transProps: undefined;
}>>> & {
    onEnter?: ((value: Element) => any) | undefined;
    onLeave?: ((value: Element) => any) | undefined;
    onAppear?: ((value: Element) => any) | undefined;
    "onAfter-appear"?: ((value: Element) => any) | undefined;
    "onAfter-enter"?: ((value: Element) => any) | undefined;
    "onAfter-leave"?: ((value: Element) => any) | undefined;
    "onBefore-appear"?: ((value: Element) => any) | undefined;
    "onBefore-enter"?: ((value: Element) => any) | undefined;
    "onBefore-leave"?: ((value: Element) => any) | undefined;
    "onAppear-cancelled"?: ((value: Element) => any) | undefined;
    "onEnter-cancelled"?: ((value: Element) => any) | undefined;
    "onLeave-cancelled"?: ((value: Element) => any) | undefined;
}, {
    noFade: boolean;
    mode: import('../../types').TransitionMode;
    transProps: Readonly<import('vue').TransitionProps>;
    appear: boolean;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
