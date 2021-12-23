import { React } from 'react';
import { InputBoxComponent } from '../../components';

export const SearchFieldContainer = () => {
  const [stateText, setStateText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const _onChangeText = (text) => {
    setIsLoading(true);
    setStateText(text);
  };

  const _handleChangeText = (e) => {
    const text = e.target.value;
    if (text !== ' ' && stateText.length >= 0) {
      _onChangeText(text);
    }
  };

  return (
    <>
      <div className="search-field-container">
        <InputBoxComponent handleChange={_handleChangeText} />
      </div>
    </>
  );
};
