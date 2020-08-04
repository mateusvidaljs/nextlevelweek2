import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.scss';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/25904332?s=460&u=b210f192a6746062359414749c01c740a5e39fff&v=4" alt="Mateus Vidal"/>

        <div>
          <strong>Mateus Vidal</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <br /><br />
        Lorem Ipsum has been the industry's standard dummy text ever since
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={ whatsappIcon } alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;