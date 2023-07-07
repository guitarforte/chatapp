import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';


const MessageForm = (props) => {
  const [value, setValue] = useState('');
 

  const handleChange = (event) => {
    setValue(event.target.value);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
    
    }

    setValue('');
  };

  const handleUpload = (event) => {
   
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;