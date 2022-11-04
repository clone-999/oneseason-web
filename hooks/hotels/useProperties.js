import { useEffect, useState } from 'react';
import booking from '../../api/booking';

export default () => {
  const [properties, setProperties] = useState([]);
  const [propertiesErrorMessage, setPropertiesErrorMessage] = useState('');
  
  const getPropertiesApi = async (vies) => {
    
    try {
      //console.log('Paramsss', {...vies})
      const response = await booking.get('/properties/list', {
        params: {...vies}
      }); 
      //console.log('Paramsss', response.data.result)
      setProperties(response.data.result);
    } catch (err) {
        setPropertiesErrorMessage('Something went wrong');
    }
  };

  return [getPropertiesApi, properties, propertiesErrorMessage];
};
