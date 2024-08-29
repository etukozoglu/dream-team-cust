import { BFormTagProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BFormTagProps>, {
    disabled: boolean;
    id: undefined;
    noRemove: boolean;
    pill: boolean;
    removeLabel: string;
    tag: string;
    title: undefined;
    variant: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    remove: (value: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BFormTagProps>, {
    disabled: boolean;
    id: undefined;
    noRemove: boolean;
    pill: boolean;
    removeLabel: string;
    tag: string;
    title: undefined;
    variant: string;
}>>> & {
    onRemove?: ((value: string) => any) | undefined;
}, {
    tag: string;
    title: string;
    id: string;
    disabled: boolean;
    variant: keyof import('../../types').BaseColorVariant | null;
    pill: boolean;
    noRemove: boolean;
    removeLabel: string;
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
