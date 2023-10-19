import { lazy } from 'react';

// Лучше использовать асинхронный импорт в чанках (т.е разбивка бандл на чанки)
// const AboutPageAsync = lazy(() => import("./AboutPage"));

export const AboutPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
        setTimeout(() => resolve(import('./AboutPage')), 1500);
    }),
);
