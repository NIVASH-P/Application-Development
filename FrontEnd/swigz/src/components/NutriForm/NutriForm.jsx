import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { StoreContext } from '../Exploremenu/context';
import { LoginContext } from '../Login/LoginContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 1rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: linear-gradient(45deg, #ff8e53 30%, #fe6b8b 90%);
  }
`;

const NutriForm = () => {
  const nav = useNavigate();
  const { formData, setFormData } = useContext(LoginContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      Max_Fat: 0,
      Max_Cholesterol: 0,
      Max_Sugar: 0,
    });
    nav('/nutrient'); 
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Health Tracker</Title>
        <Input
          type="number"
          name="Max_Fat"
          placeholder="Blood Pressure"
          value={formData.bloodPressure}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="Max_Cholesterol"
          placeholder="Glucose Level"
          value={formData.glucoseLevel}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="Max_Sugar"
          placeholder="Hemoglobin Level"
          value={formData.hemoglobinLevel}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default NutriForm;