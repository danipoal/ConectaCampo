
import { Product } from "@types/models";

const fetchUserById = async (productId:any) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        "http://94.143.138.55:8080/api/v1/product/" + productId,
        requestOptions
      );
      const result:Product = await response.json();

      return result;

    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  export default fetchUserById;