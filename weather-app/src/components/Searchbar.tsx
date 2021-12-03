import { Form, Container } from "react-bootstrap";
import { FormEvent, useState } from "react";
import { useAppSelector, useAppDispatch } from '../app/hooks';




const Searchbar = () => {

    const apikey = process.env.REACT_APP_WEATHER_API

    const [query, setQuery] = useState("");
    
    const baseEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}`;
    console.log(baseEndpoint)
  
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await fetch(baseEndpoint);
            if (!response.ok) {
                alert("Error fetching results");
                return;
            }
            const  data  = await response.json();
            
            console.log(data);
            
            //   setSongs(data)
            
        } catch (error) {
            console.log(error);
    }

    
  };

  return (
    <Container fluid className="d-flex justify-content-center py-5">
      <Form onSubmit={handleSubmit} className="p-5">
        <Form.Group>
          {/* <Form.Label>Search & Find</Form.Label> */}
          <Form.Text className="text-muted">
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