import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ShortUrlPage = () => {
  const { shortId }: any = useParams();

  try {
    axios.get(`http://localhost:3001/v1/shorturl/${shortId}`).then((res) => {
      window.location.replace(res.data);
    });
  } catch (err) {
    console.log(err, "ERR");
  }

  return <div></div>;
};

export default ShortUrlPage;
