type SvgIconComponent = typeof SvgIcon;
type TitleAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Mode = 'light' | 'dark';
type Orientation = 'horizontal' | 'vertical';
type Widths = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColumnWidth = {
    xs?: Widths;
    sm?: Widths;
    md?: Widths;
    lg?: Widths;
    xl?: Widths;
};

type Colors = 'primary' | 'secondary' | 'primaryDark' | 'secondaryDark' | 'general' | 'neutral' | 'white';
type ButtonColors = 'primary' | 'secondary';

type DefaultTextProps = {
    color?: Colors;
    bold?: boolean;
    italic?: boolean;
    centered?: boolean;
    underline?: boolean;
    uppercase?: boolean;
};

type DefaultComponentProps = {
    id?: string;
    name?: string;
    className?: string;
};
