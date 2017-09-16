import React from 'react';
import './tictactoe.css';

class Square extends React.Component {
	constructor() {
		super();
		this.state = {
			value: null,
		};
	}

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
	constructor() {
		super();
		this.state = {
			squares: Array(9).fill(null),
			player: 0,
		}
	}

  renderSquare(i) {
  	console.log(this.props.squares)
    return <Square 
    				value={this.props.squares[i]} 
    				onClick={() => this.props.onClick(i)}/>;
  }

  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			history: [{
				squares: Array(9).fill(null),
			}],
			player: 0,
			move: 0,
		}
		this.symbols = ['X', 'O']
		this.lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.move+1)
		const squares = history[this.state.move].squares.slice()
		if (squares[i] || this.calculateWinner(squares)) return;
		squares[i] = this.symbols[this.state.player];
		this.setState({
			history: history.concat({squares: squares}),
			player: (this.state.player+1)%this.symbols.length
		})
		this.state.move ++;
	}

	jumpTo(move) {
		this.setState({
			move: move,
			player: move % 2
		})
	}

  render() {
  	const current = this.state.history[this.state.move]
    const winner = this.calculateWinner(current.squares);

    const moves = this.state.history.map((step, move) => {
    	const desc = move ?
    		'Move #' + move :
    		'Game start';
    	return (
    		<li key={move}>
    			<a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
    		</li>)
    })

    let status;
    if (winner) {
    	status = 'Winner: ' + winner;
    } else {
    	status = 'Next player: ' + this.symbols[this.state.player]
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
          	squares={current.squares}
          	onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  calculateWinner(squares) {
  	for (let i = 0; i < this.lines.length; i++) {
  		const [a, b, c] = this.lines[i];
  		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  			return squares[a];
  		}
  	}
  	return null;
  }
}

export default Game;