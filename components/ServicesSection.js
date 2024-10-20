import CommonHeading from '@/common/CommonHeading'
import React from 'react'

function ServicesSection({styles, servicesImages}) {
  return (
    <section id='services' className={`${styles.aboutSection} bg-white text-black`}>
    <div className={styles.services_vl}></div>
    <div style={{ display: 'flex', flexDirection: "column", padding: '20px 90px' }}>
      <CommonHeading title={"make your life comfortable"} subtitle={"Services"} lineImg={"assets/category_title_line.png"} alt={"category_title_line"} />
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
    </div>
  </section>
  )
}

export default ServicesSection