import { BPlaceholderProps } from '../../types';

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BPlaceholderProps>, {
    animation: undefined;
    cols: number;
    size: string;
    tag: string;
    variant: null;
    width: undefined;
    wrapperTag: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BPlaceholderProps>, {
    animation: undefined;
    cols: number;
    size: string;
    tag: string;
    variant: null;
    width: undefined;
    wrapperTag: string;
}>>>, {
    tag: string;
    cols: import('../../types').Numberish;
    width: import('../../types').Numberish;
    size: import('../../types').PlaceholderSize;
    variant: keyof import('../../types').BaseColorVariant | null;
    animation: import('../../types').PlaceholderAnimation;
    wrapperTag: string;
}, {}>;
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
