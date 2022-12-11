import { useEffect, useState } from "react";
import classes from "./AvaliblePasta.module.css";
import Card from "./UI/Card";
import PastaItem from "./PastaItem/PastaItem";

const AvaliblePasta = () => {
  const [pasta, setPasta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    const fetchPasta = async () => {
      const response = await fetch(
        "https://pasta-http-49d09-default-rtdb.firebaseio.com/pasta.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedPasta = [];

      for (const key in responseData) {
        loadedPasta.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setPasta(loadedPasta);
      setIsLoading(false);
    };

    fetchPasta().catch((error) => {
      setIsLoading(false);
      setHasError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (hasError) {
    return (
      <section className={classes.PastaError}>
        <p>{hasError}</p>
      </section>
    );
  }

  const pastaList = pasta.map((pasta) => (
    <PastaItem
      key={pasta.id}
      id={pasta.id}
      name={pasta.name}
      description={pasta.description}
      price={pasta.price}
    />
  ));

  return (
    <section className={classes.types}>
      <Card>
        <ul>{pastaList}</ul>
      </Card>
    </section>
  );
};

export default AvaliblePasta;
