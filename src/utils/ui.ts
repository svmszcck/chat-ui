export const isMobile = (width: number) => width <= 768;

export const isDesktop = (width: number) => width > 768 && width <= 992;

export const isLarge = (width: number) => width > 992 && width <= 1200;

export const isRetina = (width: number) => width > 1200;
