import { useState } from "react";

export default function Input() {
  const [inputs, setInputs] = useState([
    { type: "checkbox",  },
    { type: "checkbox",  },
    { type: "checkbox",  },
    { type: "checkbox",  },
  ]);
  function onSelect(){
    
  }
  return (
    <label htmlFor="">
      {inputs.map((input) => (
        <input type={input.type} checked />
      ))}
      <input
        onSelect={() => {
          alert("you selected");
        }}
        type="text"
        value="Hello world!"
      />
    </label>
  );
}
