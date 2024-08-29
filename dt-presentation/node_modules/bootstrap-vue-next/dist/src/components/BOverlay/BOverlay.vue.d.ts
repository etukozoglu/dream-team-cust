import { BOverlayProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BOverlayProps>, {
    blur: string;
    bgColor: undefined;
    fixed: boolean;
    noCenter: boolean;
    noFade: boolean;
    noSpinner: boolean;
    noWrap: boolean;
    opacity: number;
    overlayTag: string;
    show: boolean;
    spinnerSmall: boolean;
    spinnerType: string;
    spinnerVariant: undefined;
    variant: string;
    wrapTag: string;
    zIndex: number;
    rounded: boolean;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    hidden: () => void;
    click: (value: MouseEvent) => void;
    shown: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BOverlayProps>, {
    blur: string;
    bgColor: undefined;
    fixed: boolean;
    noCenter: boolean;
    noFade: boolean;
    noSpinner: boolean;
    noWrap: boolean;
    opacity: number;
    overlayTag: string;
    show: boolean;
    spinnerSmall: boolean;
    spinnerType: string;
    spinnerVariant: undefined;
    variant: string;
    wrapTag: string;
    zIndex: number;
    rounded: boolean;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
}>>> & {
    onHidden?: (() => any) | undefined;
    onShown?: (() => any) | undefined;
    onClick?: ((value: MouseEvent) => any) | undefined;
}, {
    fixed: boolean;
    blur: string | null;
    variant: keyof import('../../types').BaseColorVariant | "white" | "transparent" | null;
    opacity: import('../../types').Numberish;
    show: boolean;
    noFade: boolean;
    zIndex: import('../../types').Numberish;
    rounded: boolean | import('../../types').RadiusElement;
    roundedTop: boolean | import('../../types').RadiusElement;
    roundedBottom: boolean | import('../../types').RadiusElement;
    roundedStart: boolean | import('../../types').RadiusElement;
    roundedEnd: boolean | import('../../types').RadiusElement;
    noWrap: boolean;
    bgColor: string;
    noCenter: boolean;
    noSpinner: boolean;
    overlayTag: string;
    spinnerSmall: boolean;
    spinnerType: import('../../types').SpinnerType;
    spinnerVariant: keyof import('../../types').BaseColorVariant | null;
    wrapTag: string;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    overlay?: ((props: {
        type: import('../../types').SpinnerType;
        variant: keyof import('../../types').BaseColorVariant | null | undefined;
        small: boolean;
    }) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
    overlay?: ((props: {
        type: import('../../types').SpinnerType;
        variant: keyof import('../../types').BaseColorVariant | null | undefined;
        small: boolean;
    }) => any) | undefined;
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
