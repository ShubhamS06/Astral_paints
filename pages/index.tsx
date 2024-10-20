import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import HeroSectoin from "@/components/HeroSectoin"
import Aboutsection from "@/components/Aboutsection"
import Categorysection from "@/components/Categorysection"
import CommonHeading from "@/common/CommonHeading"


export default function Home() {
  const navRoutes = [
    { text: "about", path: "#" },
    { text: "catagoury", path: "#" },
    { text: "services", path: "/about" },
    { text: "colors", path: "/services" },
    { text: "downloads", path: "/products" },
    { text: "become a dealer", path: "/contactus", },
    { text: "blogs", path: "/contactus", },
    { text: "contact", path: "/contactus" },
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

          <section className={`${styles.aboutSection} bg-white text-black`}>
            <div className={styles.services_vl}></div>
            <div style={{ display: 'flex', flexDirection: "column", padding: '20px 90px' }}>
              <CommonHeading title={"make your life comfortable"} subtitle={"Services"} lineImg={"assets/category_title_line.png"} alt={"category_title_line"} />
              {/* <div className="row"> */}
              <div className="row w-100">
                {servicesImages.map((card, index) => {

                  return (
                    <div key={index} className={`col-4 ${styles.services_wraped_Box}`} >
                      <img src={card.img_url} alt={card.title} />
                      <div className={styles.services_titlebox}>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                        <a href="#" className={`${styles.white_a_btn} btn rounded-5 py-2`}>
                          Read more
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
              {/* </div> */}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
