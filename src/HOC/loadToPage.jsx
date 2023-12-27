import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const loadToPage = (Component) => {
  const Loading = () => (
    <>
      <div className={"loading"}>
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
  const ComponentWithLoading = (props) => {
    const [isLoaded, setLoaded] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setLoaded(true);
      }, 2000);
    }, []);
    return isLoaded ? <Component {...props} /> : <Loading />;
  };
  return ComponentWithLoading;
};

export default loadToPage;
