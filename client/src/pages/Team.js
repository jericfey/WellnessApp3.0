import React from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import TeamProfiles from "../components/TeamProfiles/TeamProfiles";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/sidebar";

function Team() {
  return (
    <div>
      <Sidebar />
      <Wrapper>
        <TeamProfiles />
      </Wrapper>
      <div>
        <Container />
        <Container />
        <Container />
        <Container />
      </div>
      <Footer />
    </div>
  );
}

export default Team;
