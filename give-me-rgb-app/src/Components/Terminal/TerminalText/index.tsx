interface ITerminalText {
    children: React.ReactNode;
}

export const TerminalText = ({children}:ITerminalText) => {
    return (
        <p className="text-2xl font-medium text-zinc-800 dark:text-zinc-200">
            {children}
        </p>
    );
}