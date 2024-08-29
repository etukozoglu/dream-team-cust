declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<string | undefined>;
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    flush: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    free: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string | undefined>;
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    flush: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    free: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>>, {
    id: string;
    flush: boolean;
    free: boolean;
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
