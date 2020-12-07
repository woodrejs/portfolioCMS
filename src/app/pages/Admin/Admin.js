import React from "react";
import ProjectForm from "../../components/Admin/ProjectForm";
import Cart from "../../components/Admin/Cart";
import { useCounter } from "../../utils/sweet_state";
import Login from "../../components/Admin/Login";
import {
  StyledSection,
  StyledLeftBox,
  StyledMenu,
  StyledLink,
  StyledBtn,
  StyledRightBox,
  StyledCartsBox,
} from "./Admin.css";

const Admin = () => {
  const [{ projects, logged }, { setLogged }] = useCounter();
  const handleButton = () => setLogged(false, "");

  return (
    <StyledSection
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      {!logged && <Login />}
      {logged && (
        <StyledLeftBox>
          <StyledMenu>
            <StyledLink to="/">start</StyledLink>
            <StyledLink to="/about">o mnie</StyledLink>
            <StyledLink to="/portfolio">projekty</StyledLink>
            <StyledLink to="/contact">kontakt</StyledLink>
          </StyledMenu>
          <StyledBtn onClick={handleButton}>Wyloguj</StyledBtn>
        </StyledLeftBox>
      )}
      {logged && (
        <StyledRightBox>
          <ProjectForm />
          <StyledCartsBox>
            {projects &&
              projects.map((project) => (
                <Cart key={project._id} state={project} />
              ))}
          </StyledCartsBox>
        </StyledRightBox>
      )}
    </StyledSection>
  );
};

export default Admin;
