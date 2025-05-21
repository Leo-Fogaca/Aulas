// import React from 'react'
import './card.css'

const Card = ({children}) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

// Mesma coisa porém usando classe ao invés de função

// class Card extends React.Component {
//     render() {
//         return (
//             <div className='card'>
//                 <h2>{this.props.title}</h2>
//                 <p>texto do card</p>
//             </div>
//         )
//     }
// }

export default Card