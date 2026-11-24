'use client';

import { useEffect } from 'react';

type ModalProps = {
    isOpen: boolean;
    onCloseAction: () => void;
    title?: string;
    children: React.ReactNode;
};

export default function Modal({ isOpen, onCloseAction, title, children }: ModalProps) {
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onCloseAction();
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [isOpen, onCloseAction]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
            aria-labelledby={title ? 'modal-title' : undefined}
        >
            <div
                className="absolute inset-0 bg-black/50 dark:bg-black/70"
                onClick={onCloseAction}
            />
            <div className="relative z-10 w-fit min-w-72 max-w-[90vw] rounded-2xl bg-white dark:bg-gray-800 shadow-xl flex flex-col">
                <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-gray-100 dark:border-gray-700">
                    {title && (
                        <h2 id="modal-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h2>
                    )}
                    <button
                        onClick={onCloseAction}
                        className="ml-auto p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Close modal"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                        </svg>
                    </button>
                </div>
                <div className="px-6 py-5 text-gray-700 dark:text-gray-300">
                    {children}
                </div>
            </div>
        </div>
    );
}