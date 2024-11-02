/**
 * 共通定数
 */
export const CommonConstants = {
    URL: {
        HOME: '/',
        TODO: '/todo',
        COMMENTS: '/comments',
    },
    PAGE: {
        HOME: 'ホーム',
        TODO: 'TODO',
        COMMENTS: 'コメント一覧',
    },
};

export const AppConfig = {
    name: 'Practiceアプリ',
    year: new Date().getFullYear(),
} as const;
