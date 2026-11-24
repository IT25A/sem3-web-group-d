'use client';

type CheckboxProps = {
    checked: boolean;
    onChangeAction: () => void;
    label: string;
};

export default function Checkbox({ checked, onChangeAction, label }: CheckboxProps) {
    return (
        <label className="flex items-center gap-2 cursor-pointer group select-none">
            <span
                onClick={onChangeAction}
                role="checkbox"
                aria-checked={checked}
                tabIndex={0}
                onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && onChangeAction()}
                className={`
                    w-4 h-4 shrink-0 rounded flex items-center justify-center border transition-all duration-150
                    ${checked
                        ? 'bg-indigo-600 border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500'
                        : 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600 group-hover:border-indigo-400 dark:group-hover:border-indigo-500'
                    }
                `}
            >
                {checked && (
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 8" fill="none">
                        <path
                            d="M1 4l3 3 5-6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 capitalize">
                {label}
            </span>
        </label>
    );
}