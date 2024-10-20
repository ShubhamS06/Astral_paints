import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import HeroSectoin from "@/components/HeroSectoin"
import Aboutsection from "@/components/Aboutsection"
import Categorysection from "@/components/Categorysection"
import ServicesSection from "@/components/ServicesSection"
import { useEffect, useState } from "react";


export default function Home() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchLandingData = async () => {
      try {
        const response = await fetch('https://astralpaints.kwebmakerdigitalagency.com/graphql');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchLandingData();
  }, []);

  console.log('apiData', apiData)
  const navRoutes = [
    { text: "about", path: "#about" },
    { text: "catagoury", path: "#catagoury" },
    { text: "services", path: "#services" },
    { text: "colors", path: "#colors" },
    { text: "downloads", path: "#downloads" },
    { text: "become a dealer", path: "#become_dealer", },
    { text: "blogs", path: "#blogs", },
    { text: "contact", path: "#contact_us" },
    { text: "Enquire Now", path: "#heroSection", primary: true },
  ];
  const catagoryImages = [
    { img_url: 'assets/catagory1st_img.png', title: 'Interior Paints' },
    { img_url: 'assets/catagory2nd_img.png', title: 'Exterior Paints' },
    { img_url: 'assets/catagory3rd_img.png', title: 'Water Proofing' },
    { img_url: 'assets/catagory4rth_img.png', title: 'Undercoats' },
    { img_url: 'assets/catagory5th_img.png', title: 'Painting Tools' },
  ]
  const servicesImages = [
    { img_url: 'assets/searvice_img_1st.png', title: 'Wall Painting', description: 'Lorem ipsum dolor sit amet consectetur. ' },
    { img_url: 'assets/searvice_img_2nd.png', title: 'Water Solution', description: 'Lorem ipsum dolor sit amet consectetur. ' },
    { img_url: 'assets/searvice_img_3rd.png', title: 'Painting', description: 'Lorem ipsum dolor sit amet consectetur. ' },
  ]
  return (
    <>
      <Head>
        <title>Astral Paints</title>
        <meta name="description" content="GM Modules" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/AstralPaintsLogo.svg" />
      </Head>

      <Navbar expand="lg" style={{ background: '' }} className="py-2 bg-primary z-3">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="assets/AstralPaintsLogo.svg"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto column-gap-4 align-items-center" style={{ fontSize: '14px', color: '#fff' }}>
              {navRoutes.map((route, index) => (
                <Link
                  key={index}
                  href={route.path}
                  className={`${route.primary
                    ? "bg-white text-blue rounded-5 px-4 py-2 text-primary"
                    : ""
                    } route cursor-pointer text-capitalize`}
                >
                  {route.text}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="page bg-white">
        <main className={`${styles.main} bg-white z-2 text-capitalize`}>
          <HeroSectoin styles={styles} />
          <Aboutsection styles={styles} />
          <Categorysection styles={styles} catagoryImages={catagoryImages} />
          <ServicesSection styles={styles} servicesImages={servicesImages} />
        </main>
      </div>
    </>
  );
}
