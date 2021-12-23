import { React, useMemo, useState } from 'react';

import { CONFIG } from '../../api/config';
import { InputBoxComponent } from '../../components';

export const SearchFieldContainer = () => {
  let _requests = [];
  let _results = [];

  const [showList, setShowList] = useState(false);
  const [userData, setUserData] = useState([]);
  const [stateText, setStateText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const _abortRequests = () => {
    _requests.map((i) => i.abort());
    _requests = [];
  };

  const _request = (text) => {
    _abortRequests();
    if (text) {
      const request = new XMLHttpRequest();
      _requests.push(request);
      request.timeout = 20000;
      request.ontimeout = () => {
        console.warn('Time out');
      };
      request.onreadystatechange = () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          const responseJSON = JSON.parse(request.responseText);
          setIsLoading(false);
          if (responseJSON && responseJSON.items) {
            const results = responseJSON.items;
            _results = results;
            setUserData(results);
          }
        } else {
          console.warn(
            'github user api: request could not be completed or has been aborted'
          );
        }
      };
      request.open(
        'GET',
        request.open(
          'GET',
          `${CONFIG.API_URL}search/users?q=${text}&per_page=5`
        )
      );
      request.setRequestHeader('Accept', 'application/vnd.github.v3+json');
      request.setRequestHeader(
        'Authorization',
        `Bearer ${CONFIG.Github_token}`
      );

      request.send();
      return;
    }
  };

  const debounceData = useMemo(() => _request);

  const _onChangeText = (text) => {
    setIsLoading(true);
    setStateText(text);
    debounceData(text);
  };

  const _handleChangeText = (e) => {
    const text = e.target.value;
    if (text !== ' ' && stateText.length >= 0) {
      _onChangeText(text);
    }
  };

  const _onFocus = () => {
    setShowList(true);
  };

  const _onBlur = (e) => {
    setShowList(false);
  };

  useEffect(() => {
    // This will load the default value's search results after the view has
    // been rendered
    _handleChangeText(stateText);
    return () => {
      _abortRequests();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="search-field-container">
        <InputBoxComponent
          onBlur={_onBlur}
          onFocus={_onFocus}
          handleChange={_handleChangeText}
        />
      </div>
    </>
  );
};
