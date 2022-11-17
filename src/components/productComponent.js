import React from 'react';
import { useDispatch, useSelector } from "react-redux";
function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (

//             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//   {Array.from(Array(6)).map((_, index) => (
//     <Grid item xs={2} sm={4} md={4} key={index}>
//       <Item>xs=2</Item>
//     </Grid>
//   ))}
// </Grid>
            <div className="ui hidden section divider">
                <div className="four wide column"  key={id}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                            <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

   return (
     <>
    { renderList}
     </> 
    )
}

export default ProductComponent