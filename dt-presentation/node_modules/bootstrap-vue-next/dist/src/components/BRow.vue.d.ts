import { BRowProps } from '../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BRowProps>, {
    tag: string;
    gutterX: undefined;
    gutterY: undefined;
    noGutters: boolean;
    alignV: undefined;
    alignH: undefined;
    alignContent: undefined;
    cols: undefined;
    colsLg: undefined;
    colsMd: undefined;
    colsSm: undefined;
    colsXl: undefined;
    colsXxl: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BRowProps>, {
    tag: string;
    gutterX: undefined;
    gutterY: undefined;
    noGutters: boolean;
    alignV: undefined;
    alignH: undefined;
    alignContent: undefined;
    cols: undefined;
    colsLg: undefined;
    colsMd: undefined;
    colsSm: undefined;
    colsXl: undefined;
    colsXxl: undefined;
}>>>, {
    gutterX: import('../types').ColsNumbers;
    gutterY: import('../types').ColsNumbers;
    tag: string;
    noGutters: boolean;
    alignV: import('../types').AlignmentVertical;
    alignH: import('../types').AlignmentJustifyContent;
    alignContent: import('../types').AlignmentContent;
    cols: import('../types').ColsNumbers;
    colsSm: import('../types').ColsNumbers;
    colsMd: import('../types').ColsNumbers;
    colsLg: import('../types').ColsNumbers;
    colsXl: import('../types').ColsNumbers;
    colsXxl: import('../types').ColsNumbers;
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
