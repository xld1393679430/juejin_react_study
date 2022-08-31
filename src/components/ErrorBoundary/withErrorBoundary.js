import ErrorBoundary from ".";

function withErrorBoundary(Component, config) {
  const Wrapper = (props) => {
    return (
      <ErrorBoundary {...config}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };

  const name = Component.displayName || Component.name || "Unknow";
  Wrapper.displayName = `withErrorBoundary(${name})`;

  return Wrapper;
}

export default withErrorBoundary;
