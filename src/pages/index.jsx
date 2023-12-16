import React, { useEffect, useState } from "react";

import Head from "next/head";
import { Container, Tab, Nav } from "react-bootstrap";

import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import MapMain from "@/components/Map";
import SocialMedia from "@/components/Common/SocialMedia";
import Simulation from "@/components/Simulation";
import Compatant from "@/components/Compatant";

const projectTabs = [
  {
    title: "Compatatnt Selecttion",
  },
  {
    title: "Map Selection",
  },
  {
    title: "Simulation",
  },
];

export default function Home() {
  const [userData, setUserData] = useState({ email: null, credits: null });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://encounterra.com/api/user_data");
        if (!response.ok) {
          console.error("Server response was not OK", response.status);
          throw new Error("Server response was not OK");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Head>
        <title>Encountera</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />

        <h1>Email: {userData.email}</h1>

        <div className="d-none d-lg-block">
          <SocialMedia />
        </div>
        <div className="ts-main-content">
          <Container fluid className="ts-container">
            <Tab.Container
              id="GiveAwayTabs"
              defaultActiveKey={projectTabs[0].title}
            >
              <div className="d-flex justify-content-center mb-08">
                <Nav variant="pills" className="ts-tabs ts-tabs-primary">
                  {projectTabs.map((tabItem, index) => {
                    return (
                      <Nav.Item className="text-center " key={index}>
                        <Nav.Link eventKey={tabItem.title}>
                          {" "}
                          <span> {tabItem.title} </span>
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>
              </div>

              <Tab.Content>
                <Tab.Pane eventKey={projectTabs[0].title}>
                  <Compatant />
                </Tab.Pane>
                <Tab.Pane eventKey={projectTabs[1].title}>
                  <MapMain />
                </Tab.Pane>
                <Tab.Pane eventKey={projectTabs[2].title}>
                  <Simulation />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Container>
        </div>
        <Footer />
      </main>
    </>
  );
}
