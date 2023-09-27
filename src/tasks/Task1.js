import { useState } from 'react';
import Navbar from '../task1_components/Navbar';
import TextBox from '../task1_components/TextBox';
import Alert from '../task1_components/Alert';

function Task1() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (text, type) => {
    setAlert({
      text: text,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success');
    }
  }

  return (
    <>
      <Navbar title="Text Utils" about="I am nothing" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextBox action="To Uppercase" mode={mode} showAlert={showAlert} />
    </>
  );
}

export default Task1;
