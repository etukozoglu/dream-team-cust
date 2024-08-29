import { DirectiveBinding } from 'vue';

export interface WithToggle extends HTMLElement {
    __toggle: () => void;
}
declare const _default: {
    mounted: (el: WithToggle, binding: DirectiveBinding<string | readonly string[] | undefined>) => void;
    updated: (el: WithToggle, binding: DirectiveBinding<string | readonly string[] | undefined>) => void;
    unmounted(el: WithToggle): void;
};
export default _default;
