export interface IndicatoringProps {
    background?: {
        color?: string;
        blur?: boolean;
    };
    message?: {
        size?: 'small' | 'medium' | 'large';
        color?: string;
        text?: string;
    };
    icon?: {
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
        message: {
            size: string;
            color: string;
            text: string | null;
        };
        icon: {
            color: string;
            size: string;
        };
    };
}
