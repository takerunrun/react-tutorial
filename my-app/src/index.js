import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStates: Array(6).fill(false),
            headers: ["", "about", "service", "news", "recruit", "contact"],
            header: "akihiro",
        };
    }

    handleClick(i) {
        const buttonStates = this.state.buttonStates.slice();
        buttonStates[i] = true;
        this.setState({
            buttonStates: buttonStates,
            header: this.state.headers[i],
        });
    }

    render() {
        return (
            <div>
                <Main 
                    header={this.state.header}
                    onClick={(i) => this.handleClick(i)}
                />
                <Footer 
                    onCLick={(i) => this.handleClick(i)}
                /> 
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="left">
                    <Logo 
                        onClick={() => this.props.onClick(0)}
                    />
                </div>
                <div className="right">
                    <Header 
                        value={this.props.header}
                    />
                </div>
            </div>
        );
    }
}

// class Logo extends React.Component {
//     render() {
//         return (
//             <button className="logo" onClick={props.onCLick}>
//                 Loremy
//             </button>
//         )
//     }
// }

function Logo(props) {
    return (
        <button className="logo" onClick={props.onClick}>
            Loremy
        </button>
    );
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                {this.props.value}
            </div>
        );
    }
}

class Footer extends React.Component {
    renderFooterButton(name, i) {
        return (
            <FooterButton
                value={name}
                onClick={() => this.props.onCLick(i)}
            />
        );
    }

    render() {
        return (
            <div className="footer">
                {this.renderFooterButton("about", 1)}
                {this.renderFooterButton("service", 2)}
                {this.renderFooterButton("news", 3)}
                {this.renderFooterButton("recruit", 4)}
                {this.renderFooterButton("contact", 5)}
            </div>
        );
    }
}

function FooterButton(props) {
    return (
        <button className="footerButton" onClick={props.onClick}>
            {props.value}
        </button>
    );
}


class Square extends React.Component {
    render() {
        return (
            <button className="square">
            </button>
        );
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