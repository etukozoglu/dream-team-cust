declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    active: import('vue').PropType<boolean>;
    tag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noBody: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    buttonId: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    lazyOnce: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    titleItemClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    titleLinkAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    titleLinkClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    active: import('vue').PropType<boolean>;
    tag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    noBody: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    buttonId: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    lazyOnce: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    titleItemClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    titleLinkAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    titleLinkClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
}>>, {
    tag: string;
    title: string;
    id: string;
    disabled: boolean;
    lazy: boolean;
    noBody: boolean;
    buttonId: string;
    lazyOnce: boolean;
    titleItemClass: any;
    titleLinkAttrs: Readonly<import('../../types').AttrsValue>;
    titleLinkClass: any;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    title?: ((props: Record<string, never>) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
    title?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
