import { MaybeRef, MaybeRefOrGetter } from 'vue';

declare const _default: (el: MaybeRef<HTMLElement | null>, classEnter: MaybeRefOrGetter<string | string[]>, classLeave: MaybeRefOrGetter<string | string[]>) => {
    startTransition: (onEnd?: () => void) => void;
    endTransition: (onEnd?: () => void) => void;
};
export default _default;
