import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
            </button>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="left">
                    <Logo />
                </div>
                <div className="right">
                    <Header />
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Main />
                <Footer /> 
            </div>
        );
    }
}

class Logo extends React.Component {
    render() {
        return (
            <button className="logo">
                Loremy
            </button>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                header
            </div>
        );
    }
}

class FooterButton extends React.Component {
    render() {
        return (
            <button className="footerButton">
                {this.props.value}
            </button>
        )
    }
}

class Footer extends React.Component {
    renderFooterButton(name) {
        return <FooterButton value={name}/>;
    }

    render() {
        return (
            <div className="footer">
                {this.renderFooterButton("about")}
                {this.renderFooterButton("service")}
                {this.renderFooterButton("news")}
                {this.renderFooterButton("recruit")}
                {this.renderFooterButton("contact")}
            </div>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);