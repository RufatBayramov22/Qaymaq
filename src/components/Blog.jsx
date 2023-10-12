// import React, { useState } from "react";
// import BlogImg1 from "../assets/images/blogImg/blogpic1.webp";
// import BlogImg2 from "../assets/images/blogImg/blog1.png";
// import BlogImg3 from "../assets/images/blogImg/blog2.png";
// import BlogImg4 from "../assets/images/blogImg/blog3.png";
// import ButaImg from "../assets/images/blogImg/buta_left.svg";
// import ButaImg2 from "../assets/images/blogImg/buta 1.png";
// import ButaImg3 from "../assets/images/blogImg/buta 3.png";
// import "sweetalert2/src/sweetalert2.scss";
// import { errorSwal, successSwal } from "../utils/swal";
// import { object, string } from "yup";

// const Blog = () => {
//   const [user, setUser] = useState({
//     email: "",
//   });
//   const [setFormValid] = useState(false);
//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const emailSchema = object({
//     email: string()
//       .email("Please include your Email")
//       .required("Please Include your Email"),
//   });
//   const submitForm = async (e) => {
//     e.preventDefault();

//     try {
//       await emailSchema.validate(user);
//       setFormValid(true);
//       successSwal("Completed");
//     } catch (error) {
//       errorSwal("error", error.message);
//     }
//   };
//   return (
//     <section className="blog">
//       <div className="contanier">
//         <div className="row">
//           <div className="blogTitle">
//             <h2>Blog</h2>
//             <p>
//               Here you can find the latest news about eco products as well as a
//               lot of useful and necessary information.
//             </p>
//             <form>
//               <input
//                 type="email"
//                 placeholder="E-mail ..."
//                 required="required"
//                 name="email"
//                 onChange={handleChange}
//                 value={user.email}
//               />
//               <button className="subscribe" type="submit" onClick={submitForm}>
//                 Subscribe
//               </button>
//             </form>
//           </div>
//           <div className="blogComponent">
//             <div className="blogFirstComponent">
//               <div className="blogCard">
//                   <img src={BlogImg1} alt="" className="bigPict" />
//                 <div className="blogInfo">
//                   <span className="date">30 / January / 2020</span>
//                   <h4>Title</h4>
//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout.
//                   </p>
//                   <button>ECO</button>
//                   <button>Recipe</button>
//                 </div>
//               </div>
//             </div>
//             <div className="blogSecondComponent">
//               <div className="blogCards">
//                 <div className="blogImg">
//                   <img src={BlogImg2} alt="" />
//                 </div>
//                 <div className="blogInfo">
//                   <span className="date">30 / January / 2020</span>
//                   <h4>Title</h4>
//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout
//                   </p>
               
//                 </div>
//               </div>
//               <div className="blogCards">
//                 <div className="blogImg">
//                   <img src={BlogImg3} alt="" />
//                 </div>
//                 <div className="blogInfo">
//                   <span className="date">30 / January / 2020</span>
//                   <h4>Title</h4>

//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout
//                   </p>
             
//                 </div>
//               </div>
//               <div className="blogCards">
//                 <div className="blogImg">
//                   <img src={BlogImg4} alt="" />
//                 </div>
//                 <div className="blogInfo">
//                   <span className="date">30 / January / 2020</span>
//                   <h4>Title</h4>

//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout
//                   </p>
              
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="leftSide">
//             <img src={ButaImg} alt="" />
//           </div>
//           <div className="rightSide">
//             <img src={ButaImg2} alt="" />
//           </div>
//           <div className="rightSide2">
//             <img src={ButaImg3} alt="" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;
