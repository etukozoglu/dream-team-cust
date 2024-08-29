import { Breakpoint } from '../types';
import { MaybeRefOrGetter } from 'vue';

declare const _default: (value: MaybeRefOrGetter<boolean | Breakpoint | 'fluid'>) => import('vue').ComputedRef<{
    [x: string]: boolean;
    container: boolean;
}>;
export default _default;
