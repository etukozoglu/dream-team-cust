import { BvTriggerableEvent } from '../../utils';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<boolean>;
    tag: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    toggle: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    visible: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    horizontal: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    bodyClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerTag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    bodyAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    isNav: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    buttonAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    buttonClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    collapseClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    wrapperAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    hidden: () => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<boolean>;
    tag: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    title: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    toggle: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    visible: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    horizontal: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    bodyClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerTag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    bodyAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    isNav: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    buttonAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    buttonClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    collapseClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    headerAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
    wrapperAttrs: {
        type: import('vue').PropType<Readonly<import('../../types').AttrsValue>>;
        default: undefined;
    };
}>> & {
    onHidden?: (() => any) | undefined;
    onShow?: ((value: BvTriggerableEvent) => any) | undefined;
    onHide?: ((value: BvTriggerableEvent) => any) | undefined;
    "onHide-prevented"?: (() => any) | undefined;
    "onShow-prevented"?: (() => any) | undefined;
    onShown?: (() => any) | undefined;
}, {
    tag: string;
    title: string;
    id: string;
    toggle: boolean;
    visible: boolean;
    horizontal: boolean;
    bodyClass: any;
    headerClass: any;
    headerTag: string;
    bodyAttrs: Readonly<import('../../types').AttrsValue>;
    isNav: boolean;
    buttonAttrs: Readonly<import('../../types').AttrsValue>;
    buttonClass: any;
    collapseClass: any;
    headerAttrs: Readonly<import('../../types').AttrsValue>;
    wrapperAttrs: Readonly<import('../../types').AttrsValue>;
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
