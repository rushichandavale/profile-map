import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ errorMessage: error.toString() });
    console.error('Error caught by Error Boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-200 p-4 rounded-lg">
          <h2 className="text-red-600 font-semibold">Something went wrong!</h2>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
