import {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log("ErrorBoundary нашол ошибку", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Упс, ошибка.</h1>
        }

        return this.props.children;
    };
}

export default ErrorBoundary;
