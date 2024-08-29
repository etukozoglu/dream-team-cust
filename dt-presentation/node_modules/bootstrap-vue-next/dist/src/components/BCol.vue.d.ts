import { BColProps } from '../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BColProps>, {
    alignSelf: undefined;
    col: boolean;
    cols: undefined;
    offset: undefined;
    order: undefined;
    tag: string;
    lg: boolean;
    md: boolean;
    sm: boolean;
    xl: boolean;
    xxl: boolean;
    offsetLg: undefined;
    offsetMd: undefined;
    offsetSm: undefined;
    offsetXl: undefined;
    offsetXxl: undefined;
    orderLg: undefined;
    orderMd: undefined;
    orderSm: undefined;
    orderXl: undefined;
    orderXxl: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BColProps>, {
    alignSelf: undefined;
    col: boolean;
    cols: undefined;
    offset: undefined;
    order: undefined;
    tag: string;
    lg: boolean;
    md: boolean;
    sm: boolean;
    xl: boolean;
    xxl: boolean;
    offsetLg: undefined;
    offsetMd: undefined;
    offsetSm: undefined;
    offsetXl: undefined;
    offsetXxl: undefined;
    orderLg: undefined;
    orderMd: undefined;
    orderSm: undefined;
    orderXl: undefined;
    orderXxl: undefined;
}>>>, {
    tag: string;
    sm: boolean | import('../types').ColsNumbers | "auto";
    md: boolean | import('../types').ColsNumbers | "auto";
    lg: boolean | import('../types').ColsNumbers | "auto";
    xl: boolean | import('../types').ColsNumbers | "auto";
    xxl: boolean | import('../types').ColsNumbers | "auto";
    cols: import('../types').ColsNumbers | "auto";
    alignSelf: import('../types').AlignmentVertical | "auto";
    order: import('../types').ColsNumbers;
    offset: import('../types').ColsNumbers;
    col: boolean;
    offsetSm: import('../types').ColsNumbers;
    offsetMd: import('../types').ColsNumbers;
    offsetLg: import('../types').ColsNumbers;
    offsetXl: import('../types').ColsNumbers;
    offsetXxl: import('../types').ColsNumbers;
    orderSm: import('../types').ColsNumbers;
    orderMd: import('../types').ColsNumbers;
    orderLg: import('../types').ColsNumbers;
    orderXl: import('../types').ColsNumbers;
    orderXxl: import('../types').ColsNumbers;
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
