import React from 'react';
import styles from './error-boundary.module.css';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    console.log(err);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.image}>
          <h3 className={styles.description}>
            Once alive and now dead, this ghost appears to have some unfinished business
          </h3>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
