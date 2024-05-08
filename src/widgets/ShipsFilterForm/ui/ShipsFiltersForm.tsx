import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col } from "antd";
import {
  levelOptions,
  nationOptions,
  typeOptions,
} from "../api/filtersOptions";
import SelectInput from "../../../shared/SelectInput/SelectInput";
import {
  Ship,
  ShipActionTypes,
} from "../../../pages/ShipsPage/model/actionTypes";

const ShipsFiltersForm: React.FC<{
  setCurrentPage: (pageNumber: number) => void;
  shipsData: Ship[];
}> = ({ setCurrentPage, shipsData }) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    level: "",
    nation: "",
    type: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const filteredShips = shipsData?.filter((vehicle) => {
      const isNationMatch =
        formValues.nation === "" || vehicle.nation.title === formValues.nation;
      const isLevelMatch =
        formValues.level === "" ||
        vehicle.level.toString() === formValues.level;
      const isTypeMatch =
        formValues.type === "" || vehicle.type.title === formValues.type;
      return isNationMatch && isLevelMatch && isTypeMatch;
    });
    dispatch({
      type: ShipActionTypes.GET_SHIPS,
      payload: filteredShips,
    });
    setCurrentPage(1);
  }, [formValues, shipsData]);

  return (
    <Form className="ship-filter-form" layout="vertical">
      <Row gutter={16}>
        <Col>
          <SelectInput
            label="Уровень"
            name="level"
            value={formValues.level}
            options={levelOptions}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <SelectInput
            label="Нация"
            name="nation"
            value={formValues.nation}
            options={nationOptions}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <SelectInput
            label="Класс"
            name="type"
            value={formValues.type}
            options={typeOptions}
            onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default ShipsFiltersForm;
