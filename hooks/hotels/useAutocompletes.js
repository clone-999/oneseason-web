import { useEffect, useState } from 'react';
import booking from '../../api/booking';

export default () => {
  const [autocompletes, setAutocompletes] = useState([]);
  const [autocompleteErrorMessage, setAutocompleteErrorMessage] = useState('');

  const searchAutocompleteApi = async searchTerm => {
    
    if (searchTerm.length < 1) {
        return;
    }

    try {
      const response = await booking.get('/locations/auto-complete', {
        params: {
            text: searchTerm, 
            languagecode: 'en-us'
        }
      }); 
      setAutocompletes(response.data);
    } catch (err) {
        setAutocompleteErrorMessage('Something went wrong');
    }
  };

  return [searchAutocompleteApi, autocompletes, autocompleteErrorMessage];
};
