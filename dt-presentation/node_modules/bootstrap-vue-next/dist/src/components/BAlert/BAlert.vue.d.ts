declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<number | boolean>;
    fade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: string;
    };
    immediate: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    interval: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: number;
    };
    noHoverPause: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    showOnPause: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    closeClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    closeContent: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    closeLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    closeVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    dismissible: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}, {
    pause: () => void;
    restart: () => void;
    resume: () => void;
    stop: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    closed: () => void;
    close: () => void;
    "close-countdown": (value: number) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<number | boolean>;
    fade: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: import('vue').PropType<keyof import('../../types').BaseColorVariant | null>;
        default: string;
    };
    immediate: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    interval: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: number;
    };
    noHoverPause: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    showOnPause: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    closeClass: {
        type: import('vue').PropType<any>;
        default: undefined;
    };
    closeContent: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    closeLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    closeVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    dismissible: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & {
    onClose?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
    "onClose-countdown"?: ((value: number) => any) | undefined;
}, {
    fade: boolean;
    variant: keyof import('../../types').BaseColorVariant | null;
    immediate: boolean;
    interval: import('../../types').Numberish;
    noHoverPause: boolean;
    showOnPause: boolean;
    closeClass: any;
    closeContent: string;
    closeLabel: string;
    closeVariant: keyof import('../../types').BaseButtonVariant | null;
    dismissible: boolean;
}, {}>, Readonly<{
    close?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: Record<string, never>) => any) | undefined;
}> & {
    close?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
