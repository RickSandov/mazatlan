import React from 'react';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

// import { lots } from '../../data/data';

export const Modal = ({ id, htmlContent1 }) => {


    const initialForm = {
        manzana: 8,
        planId: '',
        type: 'A',
        isCorner: false,
        htmlContent: htmlContent1,
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0
    };

    const [formValues, handleInputChange] = useForm(initialForm);

    const { manzana, planId, a, b, c, d, e } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(planId);

        // console.log(formValues);

        axios.post('http://189.155.227.107:3000/api/lot', formValues)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })



    }

    return (
        <div className="modal">
            <div className="modal__content">
                <h3> {`Terreno no. ${id}`} </h3>

                <form>

                    <label>
                        Manzana
                        <input
                            type="number"
                            name="manzana"
                            placeholder="manzana"
                            value={manzana}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Número de terreno
                        <input
                            autoFocus
                            type="number"
                            name="planId"
                            placeholder="planId"
                            value={planId}
                            onChange={handleInputChange}
                        />
                    </label>

                    <fieldset>
                        <legend>Tipo de terreno</legend>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="A"
                                onChange={handleInputChange}
                            /> A
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="B"
                                onChange={handleInputChange}
                            /> B
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="C"
                                onChange={handleInputChange}
                            /> C
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>Esquina</legend>
                        <label>
                            <input
                                type="radio"
                                name="isCorner"
                                value={false}
                                onChange={handleInputChange}
                            /> No
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="isCorner"
                                value={true}
                                onChange={handleInputChange}
                            /> Si
                        </label>

                    </fieldset>

                    <label>
                        a:
                        <input
                            type="number"
                            name="a"
                            placeholder="a"
                            value={a}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        b:
                        <input
                            type="number"
                            name="b"
                            placeholder="b"
                            value={b}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        c:
                        <input
                            type="number"
                            name="c"
                            placeholder="c"
                            value={c}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        d:
                        <input
                            type="number"
                            name="d"
                            placeholder="d"
                            value={d}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        e:
                        <input
                            type="number"
                            name="e"
                            placeholder="e"
                            value={e}
                            onChange={handleInputChange}
                        />
                    </label>

                    <button onClick={handleSubmit}>
                        Subir
                    </button>
                </form>

            </div>
        </div>
    )
}
