import { BInputGroupProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BInputGroupProps>, {
    append: undefined;
    appendHtml: undefined;
    id: undefined;
    prepend: undefined;
    prependHtml: undefined;
    size: string;
    tag: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BInputGroupProps>, {
    append: undefined;
    appendHtml: undefined;
    id: undefined;
    prepend: undefined;
    prependHtml: undefined;
    size: string;
    tag: string;
}>>>, {
    tag: string;
    id: string;
    append: string;
    prepend: string;
    size: keyof import('../../types').BaseSize;
    appendHtml: string;
    prependHtml: string;
}, {}>, Readonly<{
    append?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: Record<string, never>) => any) | undefined;
    prepend?: ((props: Record<string, never>) => any) | undefined;
}> & {
    append?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: Record<string, never>) => any) | undefined;
    prepend?: ((props: Record<string, never>) => any) | undefined;
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
