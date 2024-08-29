import { MaybeRefOrGetter } from 'vue';

declare const _default: <T extends Record<string, unknown>, const B extends readonly PropertyKey[]>(props: MaybeRefOrGetter<T>, pickProps?: MaybeRefOrGetter<B | (keyof T)[]>) => {
    computedLink: Readonly<import('vue').Ref<boolean>>;
    computedLinkProps: import('vue').ComputedRef<Pick<{
        [x: string]: any;
    }, PropertyKey>>;
};
export default _default;
