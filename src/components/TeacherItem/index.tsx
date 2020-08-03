import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

// import { Container } from './styles';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/11397955?s=460&u=e11b0f50547f9a3b9be9e8b076b652f374ff46b8&v=4" alt="Afonso Machado" />
        <div>
          <strong>Afonso Machado</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta aliquam tempore incidunt ipsum dolorem.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;