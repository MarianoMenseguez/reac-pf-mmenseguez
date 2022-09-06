import { useEffect } from "react";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetails";
import { ClipLoader } from "react-spinners";

const ItemDetailContainer = () => {
  // const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    // const response = await fetch('url'); //iria la url de la api
    // const data = await response.json();
    // const item = data.find((i) => i.id === parseInt(id));
    // return item;
    const data =  {
      id: 1,
      title: "Musculosa roja",
      img: require("./imagenes/musculosaroja.png"),
      description:
        "Musculosa roja de algodon sin poliester en todos los talles",
      productStock: 5,
      price: 50000,
    };

    return new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 2000);
    });
  };
  useEffect(() => {
    setIsLoading(true);
    getData().then((product) => {
      setItem(product);
      setIsLoading(false);
    });
  }, []);

  const override = {
    display: "flex",
    margin: "2rem auto",
  };

  return (
    <div>
      {isLoading ? (
        <ClipLoader color="#36d7b7" cssOverride={override} size="150" />
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
