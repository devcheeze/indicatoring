export interface IndicatoringProps {
    background?: {
        color?: string;
        blur?: boolean;
    };
    circle?: {
        size?: 'small' | 'medium' | 'large';
        color?: string;
    };
}
export interface IndicatoringDefaultProps {
    limit: number;
    config: {
        background: {
            color: string;
            blur: boolean;
        };
        circle: {
            color: string;
            size: string;
        };
    };
}
