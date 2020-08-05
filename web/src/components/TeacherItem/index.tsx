import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {

  return (

    <article className="teacher-item">

      <header>

        <img src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/10405657_734065550036943_2584552438691174469_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=nYXL--3CuxsAX99yVtz&_nc_oc=AQmyw4f7MAcBMe5CIsat52ZxZbgmf2j9_Dd90B9jwxt_BrUh4eJc3wcEYZU4kfZsKtc&_nc_ht=scontent-gru2-2.xx&oh=e5bb5d625a5973936759ac0fe0a356f6&oe=5F50254B" alt="Gabriel Silva" />

        <div>
          <strong>Gabriel Silva</strong>
          <span>Matemática</span>
        </div>

      </header>

      <p>
        Amante dos números e de deduções matemáticas.
            <br />
            Indução matemática é o poder.
          </p>

      <footer>

        <p>
          Preço/Hora
              <strong>R$ 35,00</strong>
        </p>

        <button type="button">

          <img src={whatsappIcon} alt="Whatsapp Icon" />

              Entrar em contato

            </button>

      </footer>

    </article>


  );
}