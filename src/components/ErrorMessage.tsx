interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps): React.JSX.Element => {
    return (
        <>
            <div className="error-container rounded-lg border py-2 px-4">{message}</div>

            <style jsx>{`
                .error-container {
                    background-color: var(--background-error);
                    border: 1px solid var(--border-error);
                    color: var(--text-error);
                }
            `}</style>
        </>
    );
};

export default ErrorMessage;
