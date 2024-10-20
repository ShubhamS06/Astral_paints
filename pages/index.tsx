import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import HeroSectoin from "@/components/HeroSectoin"
import Aboutsection from "@/components/Aboutsection"
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
  const catagoryImages =[
    {img_url :'assets/catagory1st_img.png', title : 'Interior Paints'},
    {img_url :'assets/catagory2nd_img.png', title : 'Exterior Paints'},
    {img_url :'assets/catagory3rd_img.png', title : 'Water Proofing'},
    {img_url :'assets/catagory4rth_img.png', title : 'Undercoats'},
    {img_url :'assets/catagory5th_img.png', title : 'Painting Tools'},
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
        <main className={`${styles.main} bg-white z-2`}>
          <HeroSectoin styles={styles} />
          <Aboutsection styles={styles} />
          {/* <section className={`${styles.aboutSection} bg-white text-black py-5 mb-5`}>
            <div className={styles.vl}></div>
            <div className="row py-5 px-5">
              <div className="col-6 px-5">
                <CommonHeading title={"Bringing your dreams to life"} subtitle={"About Astral Paints"} lineImg={"assets/about_headingLine.png"} alt={"about_headingLine"} />
                <p style={{ fontSize: '16px', color: '#656565' }}>
                  Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis phasellus porttitor amet odio tempor. Ac molestie fames id urna dui posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at in pharetra velit luctus id pellentesque.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis phasellus porttitor amet odio tempor. Ac molestie fames id urna dui posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at in pharetra velit luctus id pellentesque.
                </p>
                <button className="btn btn-outline-danger rounded-5 mt-3"> Read more</button>
              </div>
              <div className="rightCol col-6">
                <img className={styles.aboutRightImg} src="assets/aboutRightImg.png" alt="aboutRightImg" />
              </div>
            </div>
          </section> */}
          <section className={`${styles.aboutSection} bg-white text-black`}>
            <div className={styles.catagory_vl}></div>
            <div style={{ display: 'flex', flexDirection: "column", padding:'20px 90px' }}>
              <CommonHeading title={"Bringing your dreams to life"} subtitle={"About Astral Paints"} lineImg={"assets/about_headingLine.png"} alt={"about_headingLine"} />
              <div className="row py-5 px-5">
                <div className="col-5 px-5 align-items-center ">
                  <img style={{width: '100%', height:'90%', marginTop:"5%" }} src={catagoryImages[0].img_url} alt="catagory1st_img" />
                </div>
                <div className="col-6 d-flex flex-wrap gap-5 ">
                  {catagoryImages.map((card, index)=>{
                    if (index === 0) {
                      return
                    }
                    return(
                      <div style={{display:'flex', flexDirection:'column', width: '40%',}}>
                        <img src={card.img_url} alt={card.title} />
                        <span>{card.title}</span>
                      </div>
                    )
                  })}
                  {/* <img className={styles.aboutRightImg} src="assets/aboutRightImg.png" alt="aboutRightImg" /> */}
                </div>

              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
