import { useState } from "react";
import "./TagSelect.css";

type TagSelectProps = {
  options: readonly string[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
};

function TagSelect({
  options,
  value,
  onChange,
  placeholder = "Type to search...",
}: TagSelectProps) {
  const [input, setInput] = useState("");

  const filteredOptions = options.filter(
    (option) =>
      option.toLowerCase().includes(input.toLowerCase()) &&
      !value.includes(option)
  );

  return (
    <div className="tag-select">
      <div className="tag-select-input">
        {value.map((tag) => (
          <span key={tag} className="tag">
            {tag}

            <button
              type="button"
              onClick={() =>
                onChange(value.filter((item) => item !== tag))
              }
            >
              ×
            </button>
          </span>
        ))}

        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && filteredOptions.length > 0) {
              event.preventDefault();

              onChange([...value, filteredOptions[0]]);
              setInput("");
            }

            if (event.key === "Escape") {
              setInput("");
            }
          }}
          placeholder={value.length === 0 ? placeholder : ""}
        />
      </div>

      {input && filteredOptions.length > 0 && (
        <div className="tag-select-options">
          {filteredOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange([...value, option]);
                setInput("");
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default TagSelect;