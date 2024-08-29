import { BBreadcrumbItemProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BBreadcrumbItemProps>, {
    ariaCurrent: string;
    text: undefined;
    active: boolean;
    activeClass: undefined;
    disabled: undefined;
    exactActiveClass: undefined;
    href: undefined;
    icon: undefined;
    opacity: undefined;
    opacityHover: undefined;
    stretched: boolean;
    rel: undefined;
    replace: undefined;
    routerComponentName: undefined;
    routerTag: undefined;
    target: undefined;
    to: undefined;
    underlineOffset: undefined;
    underlineOffsetHover: undefined;
    underlineOpacity: undefined;
    underlineOpacityHover: undefined;
    underlineVariant: undefined;
    variant: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (value: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BBreadcrumbItemProps>, {
    ariaCurrent: string;
    text: undefined;
    active: boolean;
    activeClass: undefined;
    disabled: undefined;
    exactActiveClass: undefined;
    href: undefined;
    icon: undefined;
    opacity: undefined;
    opacityHover: undefined;
    stretched: boolean;
    rel: undefined;
    replace: undefined;
    routerComponentName: undefined;
    routerTag: undefined;
    target: undefined;
    to: undefined;
    underlineOffset: undefined;
    underlineOffsetHover: undefined;
    underlineOpacity: undefined;
    underlineOpacityHover: undefined;
    underlineVariant: undefined;
    variant: undefined;
}>>> & {
    onClick?: ((value: MouseEvent) => any) | undefined;
}, {
    replace: boolean;
    target: import('../../types').LinkTarget;
    to: import('vue-router').RouteLocationRaw;
    ariaCurrent: string;
    disabled: boolean;
    text: string;
    href: string;
    rel: string;
    active: boolean;
    activeClass: string;
    routerComponentName: string;
    variant: keyof import('../../types').BaseColorVariant | null;
    opacity: 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    opacityHover: 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    underlineVariant: keyof import('../../types').BaseColorVariant | null;
    underlineOffset: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOffsetHover: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOpacity: 0 | "0" | 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    underlineOpacityHover: 0 | "0" | 10 | "10" | 100 | 50 | 25 | 75 | "25" | "50" | "75" | "100";
    icon: boolean;
    exactActiveClass: string;
    stretched: boolean;
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
