import { Numberish } from '../../types';

declare const _default: import('vue').DefineComponent<{
    modelValue: import('vue').PropType<Numberish | null>;
    type: {
        type: import('vue').PropType<import('../../types').InputType>;
        default: string;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    ariaInvalid: {
        type: import('vue').PropType<import('../../types').AriaInvalid>;
        default: undefined;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    form: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    plaintext: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    autocomplete: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    list: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    max: {
        type: import('vue').PropType<Numberish>;
        default: undefined;
    };
    min: {
        type: import('vue').PropType<Numberish>;
        default: undefined;
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
        type: import('vue').PropType<Numberish>;
        default: undefined;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    formatter: {
        type: import('vue').PropType<(val: string, evt: Event) => string>;
        default: undefined;
    };
    lazyFormatter: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    debounce: {
        type: import('vue').PropType<Numberish>;
        default: number;
    };
    debounceMaxWait: {
        type: import('vue').PropType<Numberish>;
        default: number;
    };
}, {
    blur: () => void;
    element: import('vue').Ref<HTMLInputElement | null>;
    focus: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<Numberish | null>;
    type: {
        type: import('vue').PropType<import('../../types').InputType>;
        default: string;
    };
    id: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    ariaInvalid: {
        type: import('vue').PropType<import('../../types').AriaInvalid>;
        default: undefined;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    form: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    plaintext: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    autocomplete: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    list: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    max: {
        type: import('vue').PropType<Numberish>;
        default: undefined;
    };
    min: {
        type: import('vue').PropType<Numberish>;
        default: undefined;
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
        type: import('vue').PropType<Numberish>;
        default: undefined;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    formatter: {
        type: import('vue').PropType<(val: string, evt: Event) => string>;
        default: undefined;
    };
    lazyFormatter: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    debounce: {
        type: import('vue').PropType<Numberish>;
        default: number;
    };
    debounceMaxWait: {
        type: import('vue').PropType<Numberish>;
        default: number;
    };
}>>, {
    type: import('../../types').InputType;
    id: string;
    ariaInvalid: import('../../types').AriaInvalid;
    autofocus: boolean;
    disabled: boolean;
    form: string;
    plaintext: boolean;
    name: string;
    autocomplete: string;
    list: string;
    max: Numberish;
    min: Numberish;
    placeholder: string;
    required: boolean;
    size: keyof import('../../types').BaseSize;
    step: Numberish;
    state: boolean | null;
    formatter: (val: string, evt: Event) => string;
    lazyFormatter: boolean;
    readonly: boolean;
    debounce: Numberish;
    debounceMaxWait: Numberish;
}, {}>;
export default _default;
