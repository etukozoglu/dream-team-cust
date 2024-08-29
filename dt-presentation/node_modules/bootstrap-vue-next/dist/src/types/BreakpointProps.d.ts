export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type ColsNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export interface OffsetBreakpointProps {
    offsetSm?: ColsNumbers;
    offsetMd?: ColsNumbers;
    offsetLg?: ColsNumbers;
    offsetXl?: ColsNumbers;
    offsetXxl?: ColsNumbers;
}
export interface OrderBreakpointProps {
    orderSm?: ColsNumbers;
    orderMd?: ColsNumbers;
    orderLg?: ColsNumbers;
    orderXl?: ColsNumbers;
    orderXxl?: ColsNumbers;
}
export interface ColBreakpointProps {
    sm?: boolean | ColsNumbers | 'auto';
    md?: boolean | ColsNumbers | 'auto';
    lg?: boolean | ColsNumbers | 'auto';
    xl?: boolean | ColsNumbers | 'auto';
    xxl?: boolean | ColsNumbers | 'auto';
}
export interface RowColsBreakpointProps {
    colsSm?: ColsNumbers;
    colsMd?: ColsNumbers;
    colsLg?: ColsNumbers;
    colsXl?: ColsNumbers;
    colsXxl?: ColsNumbers;
}
