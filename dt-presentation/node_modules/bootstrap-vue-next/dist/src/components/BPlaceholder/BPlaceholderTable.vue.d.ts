import { BPlaceholderTableProps } from '../../types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BPlaceholderTableProps>, {
    animation: undefined;
    cellWidth: number;
    columns: number;
    footerAnimation: undefined;
    footerCellWidth: number;
    footerColumns: undefined;
    footerSize: string;
    footerVariant: undefined;
    headerAnimation: undefined;
    headerCellWidth: number;
    headerColumns: undefined;
    headerSize: string;
    headerVariant: undefined;
    hideHeader: boolean;
    rows: number;
    showFooter: boolean;
    size: string;
    variant: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BPlaceholderTableProps>, {
    animation: undefined;
    cellWidth: number;
    columns: number;
    footerAnimation: undefined;
    footerCellWidth: number;
    footerColumns: undefined;
    footerSize: string;
    footerVariant: undefined;
    headerAnimation: undefined;
    headerCellWidth: number;
    headerColumns: undefined;
    headerSize: string;
    headerVariant: undefined;
    hideHeader: boolean;
    rows: number;
    showFooter: boolean;
    size: string;
    variant: undefined;
}>>>, {
    size: import('../../types').PlaceholderSize;
    variant: keyof import('../../types').BaseColorVariant | null;
    animation: import('../../types').PlaceholderAnimation;
    columns: import('../../types').Numberish;
    footerVariant: keyof import('../../types').BaseColorVariant | null;
    headerVariant: keyof import('../../types').BaseColorVariant | null;
    hideHeader: boolean;
    rows: import('../../types').Numberish;
    footerAnimation: import('../../types').PlaceholderAnimation;
    footerSize: import('../../types').PlaceholderSize;
    headerAnimation: import('../../types').PlaceholderAnimation;
    headerSize: import('../../types').PlaceholderSize;
    cellWidth: import('../../types').Numberish;
    footerCellWidth: import('../../types').Numberish;
    footerColumns: import('../../types').Numberish;
    headerCellWidth: import('../../types').Numberish;
    headerColumns: import('../../types').Numberish;
    showFooter: boolean;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    tfoot?: ((props: Record<string, never>) => any) | undefined;
    thead?: ((props: Record<string, never>) => any) | undefined;
}> & {
    default?: ((props: Record<string, never>) => any) | undefined;
    tfoot?: ((props: Record<string, never>) => any) | undefined;
    thead?: ((props: Record<string, never>) => any) | undefined;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
