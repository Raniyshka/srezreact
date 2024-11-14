import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import s from './Item.module.css'
import { Link } from 'react-router-dom';
import { OrderModal } from '../../components/OrderModal/OrderModal';
import { useState } from 'react';
import CardText from 'react-bootstrap/esm/CardText';

export function Item({id, img, name, price,desc, count}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function showModal(){
    setModalIsOpen(true);
  } 
  return (
    <Card className={s.item}>
      <Card.Img variant="top" className={s.itemImg} src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price} ₽
        </Card.Text>
        <Card.Text className={s.desc}>
          {desc}
        </Card.Text>
        <CardText>Осталось в наличии: {count} шт</CardText>
        <div className={s.buttons}>
          <Link className={s.link} variant="primary" to={`${id}`}>Подробнее</Link>
        {
          count>0 ?
          <button>В корзину</button>
          :
          <button onClick={showModal}>Заказать</button>
        }
        </div>
        
      </Card.Body>
      <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
    </Card>
  );
}

