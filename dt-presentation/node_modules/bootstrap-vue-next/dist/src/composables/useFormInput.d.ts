import { Numberish } from '../types';
import { Ref } from 'vue';
import { CommonInputProps } from '../types/FormCommonInputProps';

declare const _default: (props: Readonly<CommonInputProps>, modelValue: Ref<Numberish | null>, modelModifiers: Record<'number' | 'lazy' | 'trim', true | undefined>) => {
    input: Ref<HTMLInputElement | null>;
    computedId: import('vue').ComputedRef<string>;
    computedAriaInvalid: import('vue').ComputedRef<"grammar" | "spelling" | "true" | "false" | undefined>;
    onInput: (evt: Readonly<Event>) => void;
    onChange: (evt: Readonly<Event>) => void;
    onBlur: (evt: Readonly<FocusEvent>) => void;
    focus: () => void;
    blur: () => void;
};
export default _default;
