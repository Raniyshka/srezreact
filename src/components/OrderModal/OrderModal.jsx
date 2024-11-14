import Modal from 'react-modal';
import s from './OrderModal.module.css'

export function OrderModal({modalIsOpen, setModalIsOpen}){
    function closeModal(){
        setModalIsOpen(false);
    }
    return(
        <Modal className={s.modal} isOpen={modalIsOpen}>
            <h3>Оформление заказа</h3>
            <form action="">
                <input type="text" name="email" placeholder="Введите почту"/>
                <input type="text" name="email" placeholder="Введите номер телефона"/>
                <input type="submit" value="Отправить" />
            </form>
            <button className={s.btn} onClick={closeModal}>Закрыть</button>
        </Modal>
    )
}