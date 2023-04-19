// import React from "react";
// import axios from "axios";
// import Payment from "./banner/payment.gif";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import ecomerce from "./banner/ecomerce1.gif";

// function functionName(props) {
//   const { getFoodItems } = props;
//   // Api to Delete all items from Cart
//   async function deleteAll() {
//     const deleteAllItems = await axios.delete(
//       "http://localhost:8080/cartItems/deleteAll",
//       {}
//     );
//     console.log(deleteAllItems);
//     getFoodItems();
//     alert("Payment Completed Successfully Your Order is Confirmed");
//   }

//   return (
//     <div className="d-flex mt-5 payment">
//       <img
//         src={Payment}
//         width="500px"
//         height="400px"
//         className="payment-img"
//       ></img>
//       <div className=" form Payment signup-form form-group signup-title1 d-flex">
//         <Form>
//           <Form.Group className="mb-4" controlId="formBasicEmail">
//             {/* <Form.Label>Name</Form.Label> */}
//             <Form.Control type="name" placeholder="Enter Card Holder'S Name" />
//           </Form.Group>

//           <Form.Group className="mb-4" controlId="formBasicPassword">
//             {/* <Form.Label>Card Number</Form.Label> */}
//             <Form.Control type="number" placeholder="Enter Card Number" />
//           </Form.Group>

//           <Link to="/home">
//             <Button
//               variant="primary signup-btn ml-4"
//               type="submit"
//               onClick={() => deleteAll()}
//             >
//               Pay now
//             </Button>
//           </Link>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default functionName;

import React from "react";
import gif from "./banner/payment.gif";

export default function Payment() {
  return (
    <div>
      <div>
        <img
          src={gif}
          width="500px"
          height="400px"
          className="payment-img"
        ></img>
      </div>
    </div>
  );
}
