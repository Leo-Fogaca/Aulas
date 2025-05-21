import Card from '../card/card'

const films = ["Avengers - Ultimato", "Premonição 6", "Liga da justiça"]

const Cards = () => {
    return (
        <div>
            <h2>Meus Cards</h2>

            <div>
                {
                    films.map((film, index) => (
                        <Card key={index}>
                            <h3>{film}</h3>
                            <p>texto desse filme</p>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards