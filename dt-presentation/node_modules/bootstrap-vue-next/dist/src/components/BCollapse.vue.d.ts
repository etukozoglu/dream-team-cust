import { BvTriggerableEvent } from '../utils';

type SharedSlotsData = {
    hide: () => void;
    id: string;
    show: () => void;
    toggle: () => void;
    visible: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<boolean>;
    tag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    toggle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    visible: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    horizontal: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    isNav: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    skipAnimation: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}, {
    hide: () => void;
    isNav: boolean;
    show: () => void;
    toggle: () => void;
    visible: Readonly<import('vue').Ref<boolean>>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
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
        default: string;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    toggle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    visible: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    horizontal: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    isNav: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    skipAnimation: {
        type: import('vue').PropType<boolean>;
        default: boolean;
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
    id: string;
    toggle: boolean;
    visible: boolean;
    horizontal: boolean;
    isNav: boolean;
    skipAnimation: boolean;
}, {}>, Readonly<{
    default?: ((props: SharedSlotsData) => any) | undefined;
    footer?: ((props: SharedSlotsData) => any) | undefined;
    header?: ((props: SharedSlotsData) => any) | undefined;
}> & {
    default?: ((props: SharedSlotsData) => any) | undefined;
    footer?: ((props: SharedSlotsData) => any) | undefined;
    header?: ((props: SharedSlotsData) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
