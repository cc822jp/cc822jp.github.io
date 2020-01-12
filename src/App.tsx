import React from 'react'
import MonteCarlo from './assets/monte-carlo.jpg';
import './App.css'

class App extends React.Component<{}> {
    render() {
        return (
            <div className="App">
                <main>
                    <section className="App__section">
                        <h1>CRYSTAL CODE LAB</h1>

                        <h3>Monte Carlo Method Simulator</h3>

                        <ul className="list list--sns">
                            <li className="item">
                                <a
                                    href="https://cc822jp.github.io/montecarlo-simulator"
                                    rel="noopener noreferrer"
                                >
                                    <img src={MonteCarlo}/>
                                    <p>Monte Carlo Method Simulator - Casino Roulette</p>
                                </a>
                            </li>
                        </ul>
                    </section>
                </main>

                <footer className="App__footer">
                    <p>&copy; CrystalCode</p>
                </footer>
            </div>
        )
    }
}

export default App
