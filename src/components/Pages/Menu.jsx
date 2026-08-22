import { useState } from "react";

export default function Menu() {
  const [value, setValue] = useState("");

  const handleChange = function (e) {
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search menu items..."
      />
      ;
    </div>
  );
}
