import React from 'react'

function HeroSectoin({ styles }) {
  return (
    <div id='heroSection' className={styles.hero_container}>
      <div style={{ display: 'flex', width: "100%", color: '#fff' }} className="text-white z-2">
        <div style={{ width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: '100px' }}>
          <h1 className="font-42 fw-bold mb-2">
            Interior <br /> Emulsions
          </h1>
          <p className="fw-light mb-3">Excellent fungal resistance | smooth finish</p>
          <a href="#" className={`${styles.white_a_btn} btn rounded-5 py-2`}>
            Read more
          </a>
        </div>
        <div style={{ width: '50%', display: 'flex', justifyContent: 'right', paddingRight: '100px' }}>
          <img
            src="assets/heroLineGroup.png"
            alt="Custom Molding"
            height={100}
            width={20}
          />
        </div>
      </div>
      <img className={styles.hero_rainbow} src="assets/hero_rainbow.svg" alt="" />
    </div>
  )
}

export default HeroSectoin