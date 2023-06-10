import React from 'react'
import { useEffect, useState } from 'react';
import { Button, Modal } from "react-bootstrap";


const CourseDetails = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [detail, setDetail] = useState(null);
    // const [loading] = useState(false);
    // const db = getFirestore(firebaseApp);
    // const [resto, setResto] = useState({
    //   username: item.item.username,
    //   cafe: item.item.cafe,
    //   address: item.item.address,
    //   category: item.item.category,
    //   description: item.item.description,
    //   image: item.item.image,
    //   product: item.item.product,
    //   price: item.item.price
    // });
  
    // useEffect(() => {
    //   const view = doc(db, "Resto", id);
    //   onSnapshot(view, (snapshot) => {
    //     setDetail({ ...snapshot.data(), id: snapshot.id });
    //   });
    // }, [db, id]);
  
    // const UpdateHandler = async () => {
    //   const restoRef = doc(db, "Resto", detail.id);
    //   try {
    //     await updateDoc(restoRef,resto);
  
    //     setShow(false);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
  
  return (
    <div>
        <Button variant="outline-info mx-auto" onClick={handleShow}>View Detail</Button>
        <Modal show={show} onHide={handleClose} className="text-dark">
            <Modal.Header closeButton>
                <Modal.Title >About ....... Class :</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, molestiae inventore provident alias, nemo dignissimos tenetur perspiciatis at adipisci atque nulla necessitatibus enim officia dolore, nam beatae quidem ipsa neque veritatis dolor iste eum. Soluta commodi et sequi ipsa illo minus? Officia mollitia itaque, in natus ipsam aspernatur distinctio dolores?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="info">Order Class</Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default CourseDetails