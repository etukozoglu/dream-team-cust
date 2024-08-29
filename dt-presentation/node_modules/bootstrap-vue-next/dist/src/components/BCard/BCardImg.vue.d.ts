import { BCardImgProps } from '../../types';

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BCardImgProps>, {
    placement: string;
    blank: undefined;
    blankColor: undefined;
    block: undefined;
    fluid: undefined;
    fluidGrow: undefined;
    height: undefined;
    lazy: undefined;
    rounded: undefined;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
    sizes: undefined;
    src: undefined;
    srcset: undefined;
    thumbnail: undefined;
    width: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BCardImgProps>, {
    placement: string;
    blank: undefined;
    blankColor: undefined;
    block: undefined;
    fluid: undefined;
    fluidGrow: undefined;
    height: undefined;
    lazy: undefined;
    rounded: undefined;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
    sizes: undefined;
    src: undefined;
    srcset: undefined;
    thumbnail: undefined;
    width: undefined;
}>>>, {
    fluid: boolean;
    src: string;
    srcset: string | readonly string[];
    width: import('../../types').Numberish;
    height: import('../../types').Numberish;
    lazy: boolean;
    placement: import('../../types').Placement | "overlay";
    block: boolean;
    rounded: boolean | import('../../types').RadiusElement;
    roundedTop: boolean | import('../../types').RadiusElement;
    roundedBottom: boolean | import('../../types').RadiusElement;
    roundedStart: boolean | import('../../types').RadiusElement;
    roundedEnd: boolean | import('../../types').RadiusElement;
    blank: boolean;
    blankColor: string;
    fluidGrow: boolean;
    sizes: string | readonly string[];
    thumbnail: boolean;
}, {}>;
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
