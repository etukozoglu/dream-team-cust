import { ConfigurationOption } from '../types';

declare const _default: <Type extends string, Base extends ConfigurationOption<Type>>(options: Readonly<Base>, values: readonly Type[]) => Type[];
export default _default;
