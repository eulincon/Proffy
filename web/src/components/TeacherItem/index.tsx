import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/38511541?s=460&u=879d99c7cfe93ecaf77a9432c36b5ffbb1cadeef&v=4" alt="Lincon Brito"/>
                <div>
                    <strong>Lincon Brito</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sint incidunt illo, excepturi quo animi!</p>
        
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;