// ./types/react-rating-stars-component.d.ts
declare module 'react-rating-stars-component' {
  export interface ReactStarsProps {
    count?: number;
    onChange?: (newRating: number) => void;
    size?: number;
    color1?: string; // inactive star color
    color2?: string; // active star color
    value?: number;
    activeColor?: string;
    edit?: boolean;
    // ... thêm các props khác nếu cần
  }

  const ReactStars: React.ComponentType<ReactStarsProps>;
  export default ReactStars;
}
