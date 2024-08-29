import { CheckboxValue } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<CheckboxValue[]>;
    reverse: {
        type: import('vue').PropType<boolean>;
        default: boolean;
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
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: string;
    };
    plain: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    options: {
        type: import('vue').PropType<readonly import('../../types').CheckboxOptionRaw[]>;
        default: () => never[];
    };
    valueField: {
        type: import('vue').PropType<string>;
        default: string;
    };
    textField: {
        type: import('vue').PropType<string>;
        default: string;
    };
    htmlField: {
        type: import('vue').PropType<string>;
        default: string;
    };
    disabledField: {
        type: import('vue').PropType<string>;
        default: string;
    };
    buttons: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    validated: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    buttonVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    stacked: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    switches: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}, {
    blur: () => void;
    focus: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<CheckboxValue[]>;
    reverse: {
        type: import('vue').PropType<boolean>;
        default: boolean;
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
    name: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import('vue').PropType<keyof import('../../types').BaseSize>;
        default: string;
    };
    plain: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    state: {
        type: import('vue').PropType<boolean | null>;
        default: null;
    };
    options: {
        type: import('vue').PropType<readonly import('../../types').CheckboxOptionRaw[]>;
        default: () => never[];
    };
    valueField: {
        type: import('vue').PropType<string>;
        default: string;
    };
    textField: {
        type: import('vue').PropType<string>;
        default: string;
    };
    htmlField: {
        type: import('vue').PropType<string>;
        default: string;
    };
    disabledField: {
        type: import('vue').PropType<string>;
        default: string;
    };
    buttons: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    validated: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    buttonVariant: {
        type: import('vue').PropType<keyof import('../../types').BaseButtonVariant | null>;
        default: string;
    };
    stacked: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    switches: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>>, {
    reverse: boolean;
    id: string;
    ariaInvalid: import('../../types').AriaInvalid;
    autofocus: boolean;
    disabled: boolean;
    form: string;
    name: string;
    required: boolean;
    size: keyof import('../../types').BaseSize;
    plain: boolean;
    state: boolean | null;
    options: readonly import('../../types').CheckboxOptionRaw[];
    valueField: string;
    textField: string;
    htmlField: string;
    disabledField: string;
    buttons: boolean;
    validated: boolean;
    buttonVariant: keyof import('../../types').BaseButtonVariant | null;
    stacked: boolean;
    switches: boolean;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    first?: ((props: Record<string, never>) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
    first?: ((props: Record<string, never>) => any) | undefined;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
