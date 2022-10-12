import React from "react";
import { Result, Button } from "antd";
import { observer, inject } from "mobx-react";

@inject('lifecycleStore')
@observer
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorMessage: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: error,
      errorMessage: error.message,
    };
  }

  componentDidCatch(error, errorInfo) {
    const { onError } = this.props

    onError && onError(error, errorInfo.componentStack)
  }

  render() {
    const { error, errorMessage } = this.state;
    const { children, fallback } = this.props;

    if (error !== null) {
      if (React.isValidElement(fallback)) {
        return fallback;
      }

      return (
        <Result
          status="error"
          title="Error"
          subTitle={errorMessage}
          extra={
            <Button type="primlary" htmlType="link" href="/">
              Back Home
            </Button>
          }
        />
      );
    }
    return children;
  }
}

export default ErrorBoundary;
