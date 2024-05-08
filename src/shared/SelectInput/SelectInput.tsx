import { Form, Select } from "antd";

interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  options: any[];
  onChange: (name: string, value: string) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  value = "",
  options,
  onChange,
}) => {
  return (
    <Form.Item
      label={
        <label style={{ color: "white", fontWeight: 400, fontSize: "20px" }}>
          {label}
        </label>
      }
    >
      <Select
        className="input-field__select-area"
        value={value}
        onChange={(value) => onChange(name, value)}
        placeholder="Выберите..."
        style={{ width: "200px" }}
      >
        <Select.Option key="Не выбрано" value="">
          Не выбрано
        </Select.Option>
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectInput;
