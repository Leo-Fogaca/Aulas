import { useState } from "react";

const Form = (props) => {

    const [inputs, setInputs] = useState({
        image: '',
        value: '',
        suit: ''
    })

    const handleChange = (e) => {
        const { target } = e
        const { name } = target
        const { value } = target

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addCard(inputs)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="image">Imagem da Carta</label>
                    <input type="text" id="image" name="image" onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="value">Nome da Carta</label>
                    <input type="text" id="value" name="value" onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="suit">Naipe da carta</label>
                    <input type="text" id="suit" name="suit" onChange={handleChange}></input>
                </div>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default Form