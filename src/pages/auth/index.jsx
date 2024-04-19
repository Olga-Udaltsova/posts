import React, { useState } from "react";
import { Typo } from "../../components/ui/Typo";
import { Container } from "../../components/ui/Container";
import { Form } from "../../components/ui/Form";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

export const AuthPage = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const users = JSON.parse(localStorage.getItem("users"));
      if (!users) {
        return alert("Данный пользователь не найден в системе");
      }

      const currentUser = users.find(
        (user) =>
          user.email === formValues.email &&
          user.password === formValues.password
      );
      if (!currentUser) {
        return alert("Данный пользователь не найден в системе");
      }

      dispatch(login(currentUser));
      navigate("/posts");
    } catch (e) {
      console.log(e);
    }
  };

  const disabled = !formValues.email || !formValues.password;

  return (
    <Container>
      <Typo>Страница авторизации</Typo>
      <Form onSubmit={onSubmit} autoComplete="off">
        <Field>
          <Input
            type="email"
            name="email"
            value={formValues.email}
            placeholder="Email"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <Input
            type="password"
            name="password"
            value={formValues.password}
            placeholder="Пароль"
            onChange={(e) => onChange(e.target.name, e.target.value)}
            autoComplete="off"
          />
        </Field>
        <Button type="submit" disabled={disabled}>
          Авторизация
        </Button>
      </Form>
    </Container>
  );
};
