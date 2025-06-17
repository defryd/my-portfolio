
import clsx from 'clsx';

const variants = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    p: 'text-base',
    subtitle: 'text-lg font-light',
};

const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
};

const colors = {
    primary: 'text-white',
    secondary: 'text-gray-300',
    accent: 'text-indigo-400',
};

export const Text = ({
    as = 'p',
    variant = 'p',
    align = 'left',
    color = 'secondary',
    className = '',
    children,
    ...props
}) => {
    const Component = as;
    return (
        <Component
            className={clsx(
                variants[variant],
                alignments[align],
                colors[color],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};
