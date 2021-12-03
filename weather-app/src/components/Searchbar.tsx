import { Form, Container } from "react-bootstrap";
import { FormEvent, useState } from "react";
import { useAppDispatch } from '../app/hooks';
import  APICALL  from "../features/currentWeather/APICALL";
import currentWeather from "../interfaces/currentWeather"
import { setCurrentWeather } from "../features/currentWeather/currentWeatherSlice";



const Searchbar = () => {



    const [query, setQuery] = useState("");
    const dispatch = useAppDispatch()
  
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        let data: currentWeather = await APICALL(query)
        //console.log(query);
        dispatch(setCurrentWeather(data))
        
  };

  return (
    <Container fluid className="d-flex justify-content-center p-5">
      <Form onSubmit={handleSubmit} className="mx-5">
        <Form.Group>
         
          <Form.Text>
           See World Wide Weather Forcast
          </Form.Text>
          <Form.Control
            type="search"
            placeholder="type city => press enter"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Container>
  );  
};

export default Searchbar;