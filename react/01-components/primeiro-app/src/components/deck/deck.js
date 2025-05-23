import { useState, useEffect } from "react";
import Form from "../forms/form";

async function createDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()
    return deck.deck_id
}

async function cardsList(deckId) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    return await response.json()
}

const CardsRender = (props) => {
    return (
        <ul>
            {
                props.cards.map((card, index) => {
                    return (
                        <li key={index}>
                            <img src={card.image} alt="Imagem da carta"></img>
                            <h2>{card.value} {card.suit}</h2>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const Deck = () => {
    const [deck, setDeck] = useState({
        cards: []
    })

    useEffect(() => {
        async function fetchDeck() {
            const deckId = await createDeck()
            const cardslist = await cardsList(deckId)

            setDeck({
                cards: cardslist.cards
            })
        }
        fetchDeck()
    }, [])

    const addCard= (newCard) => {
        setDeck({
            cards: [...deck.cards, newCard]
        })
    }

    return (
        <section>
            <Form addCard={addCard}/>
            {deck.cards.length > 0 ? <CardsRender cards={deck.cards} /> : "Nenhuma carta encontrada"}
        </section>
    )
}

export default Deck

//Mesma coisa porém usando Class (mas já virou legado)

// class Deck extends Component {
//     constructor() {
//         super()
//         this.state = {
//             cards: []
//         }
//     }

//     async componentDidMount() {
//         const deckId = await createDeck()
//         const deck = await cardsList(deckId)
//         this.setState({
//             cards: deck.cards
//         })
//     }

//     render() {
//         return (
//             <ul>
//                 {
//                     this.state.cards.map((card, index) => {
//                         return(
//                         <li key={index}>
//                             <img src={card.image} alt="imagem da carta"></img>
//                         </li>
//                         )
//                     }
//                 )}
//             </ul>
//         )
//     }
// }

