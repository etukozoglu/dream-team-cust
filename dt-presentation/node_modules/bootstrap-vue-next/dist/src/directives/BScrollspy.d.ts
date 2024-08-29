import { DirectiveBinding } from 'vue';
import { useScrollspy } from '../composables';

export interface ElementWithScrollspy extends HTMLElement {
    $__scrollspy?: ReturnType<typeof useScrollspy>;
}
declare const _default: {
    mounted: (el: ElementWithScrollspy, binding: Readonly<DirectiveBinding<any>>) => void;
    updated: (el: ElementWithScrollspy, binding: Readonly<DirectiveBinding<any>>) => void;
    beforeUnmount(el: ElementWithScrollspy): void;
};
export default _default;
