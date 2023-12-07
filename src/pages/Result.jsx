import Head from "next/head";
import { Container, Tab, Nav } from "react-bootstrap";

import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import SocialMedia from "@/components/Common/SocialMedia";

export default function Home() {
  return (
    <>
      <Head>
        <title>Encountera</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="d-none d-lg-block">
          <SocialMedia />
        </div>
        <div className="my-5">
          <div className="ts-container">
            <a
              className="ts-btn ts-btn-gray rounded-3  px-4 d-inline-block mb-04"
              href="./"
            >
              {" "}
              Back
            </a>

            <h1 className="ts-fs-40 text-uppercase text-center mb-09 fw-bold">
              simulation results
            </h1>
            <div className="ts-card-2 px-4 py-5">
              <Results />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

import Accordion from "react-bootstrap/Accordion";

function Results() {
  const Results = [
    {
      id: 1,
      statistics: {
        total_users: 1000,
        active_users: 750,
        registered_users: 900,
        average_session_duration: "00:15:30",
        conversion_rate: 0.15,
        revenue: {
          total: 50000,
          monthly: 12000,
        },
        page_views: {
          total: 200000,
          daily_average: 8000,
        },
        products: {
          total: 50,
          popular_categories: [
            {
              category: "Electronics",
              products: 15,
            },
            {
              category: "Clothing",
              products: 10,
            },
            {
              category: "Home and Garden",
              products: 8,
            },
          ],
        },
      },
    },
    {
      id: 2,
      statistics: {
        total_users: 1000,
        active_users: 750,
        registered_users: 900,
        average_session_duration: "00:15:30",
        conversion_rate: 0.15,
        revenue: {
          total: 50000,
          monthly: 12000,
        },
        page_views: {
          total: 200000,
          daily_average: 8000,
        },
        products: {
          total: 50,
          popular_categories: [
            {
              category: "Electronics",
              products: 15,
            },
            {
              category: "Clothing",
              products: 10,
            },
            {
              category: "Home and Garden",
              products: 8,
            },
          ],
        },
      },
    },
    {
      id: 3,
      statistics: {
        total_users: 1000,
        active_users: 750,
        registered_users: 900,
        average_session_duration: "00:15:30",
        conversion_rate: 0.15,
        revenue: {
          total: 50000,
          monthly: 12000,
        },
        page_views: {
          total: 200000,
          daily_average: 8000,
        },
        products: {
          total: 50,
          popular_categories: [
            {
              category: "Electronics",
              products: 15,
            },
            {
              category: "Clothing",
              products: 10,
            },
            {
              category: "Home and Garden",
              products: 8,
            },
          ],
        },
      },
    },
    {
      id: 4,
      statistics: {
        total_users: 1000,
        active_users: 750,
        registered_users: 900,
        average_session_duration: "00:15:30",
        conversion_rate: 0.15,
        revenue: {
          total: 50000,
          monthly: 12000,
        },
        page_views: {
          total: 200000,
          daily_average: 8000,
        },
        products: {
          total: 50,
          popular_categories: [
            {
              category: "Electronics",
              products: 15,
            },
            {
              category: "Clothing",
              products: 10,
            },
            {
              category: "Home and Garden",
              products: 8,
            },
          ],
        },
      },
    },
  ];

  return (
    <Accordion defaultActiveKey="0">
      {Results.map((item, index) => (
        <AccordionItem key={index} data={item} />
      ))}
    </Accordion>
  );
}

function AccordionItem({ key, data }) {
  const jsonString = JSON.stringify(data.statistics, null, 2);

  return (
    <Accordion.Item eventKey={data.id}>
      <Accordion.Header>
        <div className="row row-cols-2 row-cols-md-4 w-100 ">
          <div className="text-center mb-4 mb-md-0">
            <h3 className="ts-fs-22 text-uppercase fw-bold">DATE</h3>
            <p className="ts-fs-20 fw-medium mb-0">01-11-2023</p>
          </div>
          <div className="text-center mb-4 mb-md-0">
            <h3 className="ts-fs-22 text-uppercase fw-bold">iterntions</h3>
            <p className="ts-fs-20 fw-medium mb-0">01-11-2023</p>
          </div>
          <div className="text-center ">
            <h3 className="ts-fs-22 ts-text-skyblue text-uppercase fw-bold">
              Blue Team
            </h3>
            <p className="ts-fs-20 fw-medium mb-0">01-11-2023</p>
          </div>
          <div className="text-center">
            <h3 className="ts-fs-22 ts-text-red text-uppercase fw-bold">
              Red Team
            </h3>
            <p className="ts-fs-20 fw-medium mb-0">01-11-2023</p>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <pre>
          <code>{jsonString}</code>
        </pre>
      </Accordion.Body>
    </Accordion.Item>
  );
}
