const fetchUserById = async (userId:any) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        "https://api-campo.danipoal.com/api/v1/user/all",
        requestOptions
      );
      const result = await response.json();
      const userFound = result.find(
        (item: { id: number | undefined }) =>
          item.id === userId
      );
      //console.log(result); 
      //console.log(userFound)
      return userFound;

    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  export default fetchUserById;