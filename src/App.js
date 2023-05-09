import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame from './HallOfFame.js'
import HighScoreInput from './HighScoreInput'
import Profile from './exercice_de_class/exercice1'
import ContactForm from './exercice_de_class/exercice2'
import TodoList from './exercice_de_class/exo3'
import Counter from './exercice_de_class/exo4'
import AlertButton from './exercice_de_class/exo5'
import ImageComponent from './exercice_de_class/exo6'
import ProduitList from './exercice_de_class/exo7'
const VISUAL_PAUSE_MSECS = 750
const SIDE = 6
export const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const produits = [
  {
    id: 1,
    title: 'Singe Programmeur',
    image: 'https://previews.123rf.com/images/starush/starush2303/starush230300665/200951489-un-singe-chimpanz%C3%A9-antropomorhic-en-costume-et-cravate-dans-le-r%C3%B4le-d-un-homme-d-affaires-assis-%C3%A0-un.jpg',
    description: 'Primate evoluer qui ecrit des programmre informatique',
  },
  {
    id: 2,
    title: 'Produit 2',
    image: 'https://via.placeholder.com/150',
    description: 'Description du produit 2',
  },
  {
    id: 3,
    title: 'Produit 3',
    image: 'https://via.placeholder.com/150',
    description: 'Description du produit 3',
  },
];

class App extends Component {
  state = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    hallOfFame: null,
    matchedCardIndices: [],
  }
  //for bind
  displayhallOfFame = hallOfFame => {
    this.setState({ hallOfFame })
  }
  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }
  getFeedbackForCard(index) {
    const {currentPair,matchedCardIndices} = this.state
    const indexMatched = matchedCardIndices.includes(index)

    if(currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }
    if(currentPair.includes(index)) {
      return indexMatched ? 'justMatched': 'justMismatched'
    }
      return indexMatched ? 'visible' : 'hidden'
  }

  handleCardClick = index => {
    const {currentPair} = this.state

    if(currentPair.length ===2){
      return
    }
    if(currentPair.length ===0){
      this.setState({ currentPair: [index] })
      return
    }
    this.handleNewPairCloseBy(index)
  }
  handleNewPairCloseBy(index){
    const { cards, currentPair, guesses, matchedCardIndices } = this.state

    const newPair = [currentPair[0], index]
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair, guesses: newGuesses})
    if (matched){
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair]})
    }
    setTimeout(() => this.setState({currentPair: []}),VISUAL_PAUSE_MSECS)
  }

  render() {
    const {cards,guesses,hallOfFame,matchedCardIndices} = this.state
    // const won = matchedCardIndices.length === cards.length
    const won = matchedCardIndices.length === 4
    return (
      <div className="memory">
        <GuessCount guesses={guesses}/>
        {cards.map((card, index )=> (
          <Card 
          card={card}
          feedback={this.getFeedbackForCard(index)}
          key={index}
          index={index}
          onClick={this.handleCardClick}
           />
        ))}
        
        {won && (hallOfFame?( <HallOfFame entries={hallOfFame} />) : (<HighScoreInput guesses={guesses} onStored={this.displayhallOfFame} />))}
        <a href='./ocr-memory1.zip'download>clic</a>
        <Profile />
        <ContactForm />
        <TodoList />
        <Counter />
        <AlertButton />
        <ImageComponent />
        <ProduitList produits={produits} />

      </div>
    )
  }
}

export default App
