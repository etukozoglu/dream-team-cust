import { BProgressProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BProgressProps>, {
    height: undefined;
    animated: undefined;
    bgVariant: undefined;
    max: number;
    precision: undefined;
    showProgress: undefined;
    showValue: undefined;
    striped: undefined;
    textVariant: undefined;
    value: undefined;
    variant: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BProgressProps>, {
    height: undefined;
    animated: undefined;
    bgVariant: undefined;
    max: number;
    precision: undefined;
    showProgress: undefined;
    showValue: undefined;
    striped: undefined;
    textVariant: undefined;
    value: undefined;
    variant: undefined;
}>>>, {
    height: string;
    value: import('../../types').Numberish;
    max: import('../../types').Numberish;
    variant: keyof import('../../types').BaseColorVariant | null;
    bgVariant: keyof import('../../types').BaseColorVariant | null;
    textVariant: keyof import('../../types').BaseTextColorVariant | null;
    striped: boolean;
    animated: boolean;
    precision: import('../../types').Numberish;
    showProgress: boolean;
    showValue: boolean;
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
