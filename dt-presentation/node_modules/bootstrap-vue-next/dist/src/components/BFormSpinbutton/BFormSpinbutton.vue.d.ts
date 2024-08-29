declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<number | null>;
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    ariaLabel: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    form: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    max: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 100;
    };
    min: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 1;
    };
    placeholder: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: undefined;
    };
    step: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 1;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    inline: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    wrap: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    vertical: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    ariaControls: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    formatterFn: {
        type: import('vue').PropType<(value: number) => string>;
        default: undefined;
    };
    labelDecrement: {
        type: import('vue').PropType<string>;
        default: string;
    };
    labelIncrement: {
        type: import('vue').PropType<string>;
        default: string;
    };
    locale: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    repeatDelay: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 500;
    };
    repeatInterval: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 100;
    };
    repeatStepMultiplier: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 4;
    };
    repeatThreshold: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 10;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: number | null) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<number | null>;
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    ariaLabel: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    form: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    max: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 100;
    };
    min: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 1;
    };
    placeholder: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: undefined;
    };
    step: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 1;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    inline: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    wrap: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    vertical: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    ariaControls: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    formatterFn: {
        type: import('vue').PropType<(value: number) => string>;
        default: undefined;
    };
    labelDecrement: {
        type: import('vue').PropType<string>;
        default: string;
    };
    labelIncrement: {
        type: import('vue').PropType<string>;
        default: string;
    };
    locale: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    repeatDelay: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 500;
    };
    repeatInterval: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 100;
    };
    repeatStepMultiplier: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 4;
    };
    repeatThreshold: {
        type: import('vue').PropType<import('../../types').Numberish>;
        default: 10;
    };
}>> & {
    onChange?: ((value: number | null) => any) | undefined;
}, {
    id: string;
    ariaLabel: string;
    disabled: boolean;
    form: string;
    name: string;
    max: import('../../types').Numberish;
    min: import('../../types').Numberish;
    placeholder: string;
    required: boolean;
    size: keyof import('../../types').BaseSize;
    step: import('../../types').Numberish;
    state: boolean | null;
    readonly: boolean;
    inline: boolean;
    wrap: boolean;
    vertical: boolean;
    ariaControls: string;
    formatterFn: (value: number) => string;
    labelDecrement: string;
    labelIncrement: string;
    locale: string;
    repeatDelay: import('../../types').Numberish;
    repeatInterval: import('../../types').Numberish;
    repeatStepMultiplier: import('../../types').Numberish;
    repeatThreshold: import('../../types').Numberish;
}, {}>, Readonly<{
    decrement?: ((props: {
        hasFocus: boolean;
    }) => any) | undefined;
    increment?: ((props: {
        hasFocus: boolean;
    }) => any) | undefined;
}> & {
    decrement?: ((props: {
        hasFocus: boolean;
    }) => any) | undefined;
    increment?: ((props: {
        hasFocus: boolean;
    }) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
