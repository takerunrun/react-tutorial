import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import noimage from './noimage.png';
import barbell from './barbell.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStates: Array(6).fill(false),
            headers: ["", "about", "service", "news", "recruit", "contact"],
            header: "",
            contents: [<Top/>, <About/>, <Service/>, <News/>, <Recruit/>, <Contact/>],
            content: <Top/>,
        };
    }

    handleClick(i) {
        const buttonStates = this.state.buttonStates.slice();
        buttonStates[i] = true;
        this.setState({
            buttonStates: buttonStates,
            header: this.state.headers[i],
            content: this.state.contents[i],
        });
    }

    render() {
        return (
            <div>
                <Main 
                    header={this.state.header}
                    content={this.state.content}
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
                    {this.props.content}
                    {/* <Top /> */}
                    {/* <About /> */}
                    {/* <Service /> */}
                    {/* <News /> */}
                    {/* <Recruit /> */}
                    {/* <Contact /> */}
                </div>
            </div>
        );
    }
}

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

class ListColumn extends React.Component {
    render() {
        return (
            <div className="listcolumn">
                <div className="w-3">
                    <div className="listtext">
                        {this.props.title}
                    </div>
                </div>
                <div className="w-6">
                    <div className="listtext">
                        {this.props.value}
                    </div>
                </div>
            </div>
        );
    }
}

function Top(props) {
    return (
        <div className="content">
            <div className="phrase">
            LIFT HEAVY <br />
            UNTIL IT'S NOT <br />
            HEAVY ANYMORE.
            </div>
            <img className="barbell" src={barbell}/>
        </div>
    )
}

function About(props) {
    return (
        <div className="content"> 
            <ListColumn
                title={"会社名"}
                value={"株式会社Loremy"}
            />
            <ListColumn
                title={"代表者"}
                value={"小久保彰博"}
            />
            <ListColumn
                title={"設立"}
                value={"2019年4月9日"}
            />
            <ListColumn
                title={"事業内容"}
                value={"インターネットサービスの企画・開発・運営"}
            />
            <ListColumn
                title={"所在地"}
                value={"京都市下京区烏丸通仏光寺下ル大政所町680-1"}
            />          
        </div>
    );
}

function Service(props) {
    return (
        <div className="content">
            <div>
                <img className="serviceimage" src={noimage}/>
                <div className="servicetitle">
                    Loremy
                </div>
                <div className="servicedescription">
                    1人では筋トレが続かない人のためのアプリ
                </div>
            </div>
        </div>
    );
}

function News(props) {
    return (
        <div className="content"> 
            <ListColumn
                title={"5/10"}
                value={"アプリリリース"}
            />
            <ListColumn
                title={"4/9"}
                value={"設立"}
            />          
        </div>
    );
}

function Recruit(props) {
    return (
        <div className="content">
            <div className="listtext">
                現在、採用は行っておりません
            </div>
        </div>
    )
}

function Contact(props) {
    return (
        <div className="content">
            <div className="listtext">
                info@loremy.co.jp
                <br></br>
                上記のメールアドレスまでお問い合わせください
            </div>
        </div>
    )
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