import React from 'react'
import CommonHeading from "@/common/CommonHeading"

function Aboutsection({styles}) {
    return (
        <section className={`${styles.aboutSection} bg-white text-black py-5`}>
            <div className={styles.about_vl}></div>
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
        </section>
    )
}

export default Aboutsection