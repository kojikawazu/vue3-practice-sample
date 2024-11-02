/**
 * 共通定数
 */
export const CommonConstants = {
    URL: {
        HOME: '/',
        TODO: '/todo',
        COMMENTS: '/comments',
        CONTACT: '/contact',
        CONTACT_CONFIRM: '/contact/confirm',
        CONTACT_COMPLETE: '/contact/complete',
    },
    PAGE: {
        HOME: 'ホーム',
        TODO: 'TODO',
        COMMENTS: 'コメント一覧',
        CONTACT: 'お問い合わせ',
    },
};

export const AppConfig = {
    name: 'Practiceアプリ',
    year: new Date().getFullYear(),
} as const;
