import { BvnComponentProps } from '../types';

export declare function useDefaults<T extends Record<string, any>>(props: T, name: keyof BvnComponentProps): T;
