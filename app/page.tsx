"use client";
import { useEffect } from "react";
import AOS from "aos";

import AdsMobile from "./ui/ads-desktop";
import Ads_desktop from "./ui/ads_desktop";
import Experts from "./ui/experts";
import Footer from "./ui/footer";
import HappyUsers from "./ui/happy-users";
import Hero from "./ui/hero";
import HeroBottom from "./ui/hero-bottom";
import StepsView from "./ui/step_1";
import WhayLover from "./ui/whay-love";

import ads_desktop from "@/assets/ads-desktop.svg";
import ads_desktop_2 from "@/assets/ads-desktop-2.svg";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <Hero />
      <WhayLover />
      <StepsView
        step={1}
        title="Connect Your Content"
        description="Bring all of your content together and get a Homepage that
        automatically updates whenever you create anywhere online."
        button_value="View Avaliable Sources"
      />
      <Ads_desktop
        top_text="Your Homepage"
        title={{ top: "Your Content. ", bottom: "All in", main: "One Spot" }}
        image={ads_desktop}
        params={[
          "Bring all of your content together into one homepage.",
          "Your page automatically updates whenever you create.",
        ]}
      />
      <StepsView
        step={2}
        title="Share Your Homepage"
        description="Share your Wavium homepage link with your followers, and
        we'll handle the rest."
      />

      <AdsMobile />

      <StepsView
        step={3}
        title="Send Emails & Text Messages"
        description="No more going through a social platform. Reach and engage
        your audience directly over email and text massage."
      />

      <Ads_desktop
        top_text="Create & Share"
        title={{ top: "Reach Your. ", bottom: "Audience", main: "Directly." }}
        image={ads_desktop_2}
        params={[
          "Embed content or create something new to share.",
          "Share content over email, text message or your homepage.",
        ]}
      />

      <Experts />

      <HappyUsers />

      <HeroBottom />

      <Footer />
    </>
  );
}
