import React from "react";
import NavComponent from "../Component/NavComponent";
import FooterComponent from "../Component/FooterComponent";
import TrainerCardMiniSizeComponent from "../Component/TrainerCardMiniSizeComponent";
import "./TrainerPage.css";
import ContactUsComponent from "../Component/ContactUsComponent";

function TrainerPage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "60px", with: "100%" }}></div>
      <div className="trainer-page">
        <section className="head-trainer-text">
          <div className="container">
            <h1>Trainers</h1>
          </div>
        </section>
        <section className="trainer-profile">
          <div className="container">
            <div className="trainer-cardrow-trainerpage">
              <TrainerCardMiniSizeComponent
                pathOfImg="../PIC/Trainer/pexels-andrew-dick-733500.jpg"
                nickName="Trainer Ball"
                Fullname="Suthep Prabkeaw"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg="../PIC/Trainer/pexels-dimitry-zub-6743966.jpg"
                nickName="Trainer Man"
                Fullname="Chartchai Eiamsaart"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg="../PIC/Trainer/pexels-scott-webb-136405.jpg"
                nickName="Trainer Mind"
                Fullname="Preawwa Buakeaw"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg="../PIC/Trainer/pexels-the-lazy-artist-gallery-1451283.jpg"
                nickName="Trainer Top"
                Fullname="Chanathip Chaimun"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg="../PIC/Trainer/pexels-thisisengineering-3912944.jpg"
                nickName="Trainer Job"
                Fullname="Thanapob SingHaseanee"
              />
            </div>
            <div className="trainer-cardrow-trainerpage">
              <TrainerCardMiniSizeComponent
                pathOfImg="../PIC/Trainer/pexels-andrew-dick-733500.jpg"
                nickName="Trainer Ball"
                Fullname="Suthep Prabkeaw"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg="../PIC/Trainer/pexels-dimitry-zub-6743966.jpg"
                nickName="Trainer Man"
                Fullname="Chartchai Eiamsaart"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg="../PIC/Trainer/pexels-scott-webb-136405.jpg"
                nickName="Trainer Mind"
                Fullname="Preawwa Buakeaw"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg="../PIC/Trainer/pexels-the-lazy-artist-gallery-1451283.jpg"
                nickName="Trainer Top"
                Fullname="Chanathip Chaimun"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg="../PIC/Trainer/pexels-thisisengineering-3912944.jpg"
                nickName="Trainer Job"
                Fullname="Thanapob SingHaseanee"
              />
            </div>
          </div>
        </section>
        <section className="contact-us">
            <div className="container">
                <ContactUsComponent />
            </div>
        </section>
      </div>
      {/* Space Bottom */}
      <div style={{ marginBottom: "40px" }}></div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default TrainerPage;
