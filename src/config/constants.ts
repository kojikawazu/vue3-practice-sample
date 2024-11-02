/**
 * 共通定数
 */
export const CommonConstants = {
    URL: {
        HOME: '/',
        TODO: '/todo',
    },
    PAGE: {
        HOME: 'ホーム',
        TODO: 'TODO',
    },
};

export const AppConfig = {
    name: 'TODOアプリ',
    year: new Date().getFullYear(),
} as const;
