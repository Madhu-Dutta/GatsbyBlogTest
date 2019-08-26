import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SwipeableViews from "react-swipeable-views"

const styles = {
    slide: {
      padding: 20,
      height: '100vh',
      backgroundColor: '#fffafd',
    },
  };

const SwiperPage = () => (
<Layout>
  <SEO title="swiper"  keywords={["gatsby", "application", "react"]}/>

  <SwipeableViews enableMouseEvents>
     
  <div style={Object.assign({}, styles.slide)}>
          <h1>The Rights of Dog Guides and Their Handlers</h1>
          <hr />
          <p>
            Under the Federal Disability Discrimination Act 1992, Guide and
            Seeing Eye Dogs are covered by the term ?assistance animals?.
          </p>
          <br />
          <p>
            While the Disability Discrimination Act includes a section on
            exemptions to access for assistance animals (Section 54A), it does
            not explicitly state the types of establishments where assistance
            animals are not permitted. As a result of precedents that have been
            established through case law, however, it is generally accepted that
            dog guides are not permitted in operating theatres, hospital burns
            units, commercial kitchens and some zoos.
          </p>
          <br />
          <p>
            When it comes to medical facilities, even solicitors seem to have
            some confusion in regards to where assistance animals are and are
            not permitted. This being the case, we have had several members that
            have been granted access to intensive care units with their dog
            guides, so this precedent has already been established.
          </p>
        </div>
        <div style={Object.assign({}, styles.slide)}>
          <h1>State Legislation</h1>
          <hr />
          <h2>Victoria</h2>
          <br />
          <h4>Primary Act: </h4>
          <h5>DOMESTIC ANIMALS ACT 1994</h5>
          <br />
          <h6>Section/s Applicable:</h6>
          <p>Section 7, Exemptions for Guide Dogs</p>
          <br />
          <h6>Excerpt from Secion 7:</h6>
          <p>
            ?(1) A visually impaired person or hearing impaired person who keeps
            and uses a dog as a guide dog is not liable for an offence under
            this Act in respect of that dog, where, in acting in the manner
            which would constitute the offence, the dog was performing its
            functions as a guide dog.? ?(4) Despite anything in any other Act or
            subordinate instrument a visually impaired person, hearing impaired
            person or person fftraining a guide dog may, at all times and in all
            places, be accompanied by a dog kept and used, or trained by him or
            her as a guide dog.”
          </p>
          <h6>Maximum Fine for Breach of Act:</h6>
          <p>Value of One Penalty Unit as of 2012:</p>
          <p>$125.19</p>
        </div>
        <div style={Object.assign({}, styles.slide)}>
          <h1>Other Stuff</h1>
          <hr />
          <h3>Information</h3>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos iure
            numquam corporis ex eaque deserunt nesciunt? Enim alias voluptates
            repudiandae repellat minus dolorem modi! Aperiam suscipit cum
            debitis distinctio qui!
          </p>
          <br />
          <h4>More Information</h4>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor
            tempora fugit dolorem doloremque, eveniet incidunt, quis esse dicta
            molestias itaque quas quisquam natus praesentium temporibus alias
            sint, illo possimus?
          </p>
        </div>
        <div style={Object.assign({}, styles.slide)}>
          <h1>Sick Animation</h1>
          <hr />
        </div>
    </ SwipeableViews>
</Layout>    
)

export default SwiperPage
